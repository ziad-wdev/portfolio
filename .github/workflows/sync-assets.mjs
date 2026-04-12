import fs from "fs/promises";
import path from "path";

import axios from "axios";

const REPO_OWNER = "ziad-wdev";
const REPOS = ["AESTHETIC", "FreshFlavor", "DigitalPro"];
const IMAGE_DIR = "./public/projects";
const DATA_FILE = "./src/data/projectData.json";

// Setup Axios instance with GitHub Auth
const github = axios.create({
  baseURL: "https://api.github.com",
  headers: process.env.GITHUB_TOKEN ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` } : {},
});

async function getScreenshot(url, fileName) {
  const microlinkUrl = `https://api.microlink.io?url=${encodeURIComponent(url)}&screenshot=true&meta=false&type=jpeg&viewport.width=1280&viewport.height=720`;

  // Retry logic using a simple loop
  for (let i = 0; i < 3; i++) {
    try {
      console.log(`Attempting screenshot for ${url} (Try ${i + 1}/3)...`);
      const response = await axios.get(microlinkUrl, { timeout: 20000 });
      const downloadUrl = response.data.data?.screenshot?.url;

      if (downloadUrl) {
        const image = await axios.get(downloadUrl, { responseType: "arraybuffer" });
        await fs.writeFile(path.join(IMAGE_DIR, fileName), image.data);
        return `/projects/${fileName}`;
      }
    } catch (error) {
      console.error(`Attempt ${i + 1} failed: ${error.message}`);
      if (i === 2) return null; // Final failure
      await new Promise((r) => setTimeout(r, 3000)); // Wait 3s before retry
    }
  }
}

async function sync() {
  const projectsData = [];
  await fs.mkdir(IMAGE_DIR, { recursive: true });
  await fs.mkdir(path.dirname(DATA_FILE), { recursive: true });

  for (const repoName of REPOS) {
    try {
      console.log(`\n--- Processing ${repoName} ---`);

      const { data } = await github.get(`/repos/${REPO_OWNER}/${repoName}`);

      const homepage = data.homepage || "";
      const fileName = `${repoName.toLowerCase()}.jpeg`;
      let imgPath = `https://via.placeholder.com/1920x1080.png?text=Preview+Coming+Soon`;

      if (homepage && homepage !== "null") {
        const savedPath = await getScreenshot(homepage, fileName);
        if (savedPath) imgPath = savedPath;
      }

      projectsData.push({
        name: data.name.replaceAll("-", " ") || repoName.replaceAll("-", " "),
        description: data.description || "A modern web application.",
        topics: data.topics || [],
        pageUrl: homepage || data.html_url,
        githubUrl: data.html_url,
        imageUrl: imgPath,
      });
    } catch (err) {
      console.error(`Error processing ${repoName}:`, err.response?.data?.message || err.message);
    }
  }

  await fs.writeFile(DATA_FILE, JSON.stringify(projectsData, null, 2));
  console.log("\nSync Complete!");
}

sync();
