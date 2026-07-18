import fs from 'fs/promises'
import path from 'path'

import axios from 'axios'

const PROJECTS = [
  {
    title: 'AESTHETIC',
    repo: 'ziad-wdev/AESTHETIC',
    url: 'https://ziad-wdev.github.io/AESTHETIC/',
  },
  {
    title: 'Fresh Flavor',
    repo: 'ziad-wdev/FreshFlavor',
    url: 'https://ziad-wdev.github.io/FreshFlavor/',
  },
  {
    title: 'Digital Pro',
    repo: 'ziad-wdev/DigitalPro',
    url: 'https://ziad-wdev.github.io/DigitalPro/',
  },
  { title: 'Store', repo: 'ziad-wdev/Store', url: 'https://store-two-mu.vercel.app/' },
]

const IMAGE_DIR = './public/projects'
const DATA_FILE = './src/data/projectData.json'

// Setup Axios instance with GitHub Auth
const github = axios.create({
  baseURL: 'https://api.github.com',
  headers: process.env.GITHUB_TOKEN ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` } : {},
})

async function getScreenshot(url, fileName) {
  const microlinkUrl = `https://api.microlink.io?url=${encodeURIComponent(url)}&screenshot=true&meta=false&type=jpeg&viewport.width=1280&viewport.height=720&timeout=3s&waitForTimeout=3s`

  // Retry logic using a simple loop
  for (let i = 0; i < 3; i++) {
    try {
      console.log(`Attempting screenshot for ${url} (Try ${i + 1}/3)...`)
      const response = await axios.get(microlinkUrl, { timeout: 20000 })
      const downloadUrl = response.data.data?.screenshot?.url

      if (downloadUrl) {
        const image = await axios.get(downloadUrl, { responseType: 'arraybuffer' })
        await fs.writeFile(path.join(IMAGE_DIR, fileName), image.data)
        return `/projects/${fileName}`
      } else {
        throw new Error('No screenshot URL returned from Microlink')
      }
    } catch (error) {
      console.error(`Attempt ${i + 1} failed: ${error.message}`)
      if (i === 2) return null // Final failure
      await new Promise((r) => setTimeout(r, 3000)) // Wait 3s before retry
    }
  }
}

async function sync() {
  const projectsData = []
  await fs.mkdir(IMAGE_DIR, { recursive: true })
  await fs.mkdir(path.dirname(DATA_FILE), { recursive: true })

  for (const project of PROJECTS) {
    try {
      console.log(`\n--- Processing ${project.repo} ---`)

      const { data } = await github.get(`/repos/${project.repo}`)

      const homepage = project.url || data.homepage || ''
      const fileName = `${project.title.toLowerCase().split(' ').join('')}.jpeg`
      let imgPath = `https://via.placeholder.com/1920x1080.png?text=Preview+Coming+Soon`

      if (homepage && homepage !== 'null') {
        const savedPath = await getScreenshot(homepage, fileName)
        if (savedPath) imgPath = savedPath
      }

      projectsData.push({
        name: project.title,
        description: data.description || 'A modern web application.',
        topics: data.topics || [],
        pageUrl: homepage || data.html_url,
        githubUrl: data.html_url,
        imageUrl: imgPath,
      })
    } catch (err) {
      console.error(`Error processing ${project.repo}:`, err.response?.data?.message || err.message)
    }
  }

  await fs.writeFile(DATA_FILE, JSON.stringify(projectsData, null, 2))
  console.log('\nSync Complete!')
}

sync()
