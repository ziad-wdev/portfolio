import { Toaster } from "sonner";

import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import Home from "@/components/sections/Home";
import Projects from "@/components/sections/Projects";

export default function Page() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
      <Toaster />
    </>
  );
}
