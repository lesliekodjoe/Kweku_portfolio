import { useState, useLayoutEffect, useRef } from 'react'
import gsap from "gsap";
import Navbar from "@/screens/navbar";
import About from '@/screens/about';
import Project from '@/screens/projects';
import Footer from '@/screens/footer';
import Research from '@/screens/research';
import Skill from '@/screens/skills';


function App() {
  const [selectedPage, setSelectedPage] = useState("About")

  const comp =  useRef(null)

  useLayoutEffect(() => {
    let context = gsap.context(() => {
      const t1 = gsap.timeline()
      t1.from("#intro-slider", {
        xPercent: "-100",
        duration: 1.5,
        delay: 0.3,
      })

        .from(["#title-1", "#title-2", "#title-3"], {
          opacity: 0,
          y: "+=30",
          stagger: 0.5,
        })
        .to(["#title-1", "#title-2", "#title-3"], {
          opacity: 0,
          y: "-=30",
          delay: 0.3,
          stagger: 0.5,
        })
        .to("#intro-slider", {
          xPercent: "-100",
          duration: 1.3,
        })
        .from("#welcome", {
          opacity: 0,
          duration: 0.5,
        })

    }, comp)

    return () => context.revert()
  }, [])

  return (
    <div className="relative app bg-secondary-500" ref={comp}>
      <div 
      id = 'intro-slider'
      className='h-screen p-10 font-medium font-satoshi text-black bg-white absolute top-0 left-0 z-50 w-full flex flex-col gap-10 tracking-tight'>
        <h1 className='text-9xl' id="title-1">AI Enthusiast</h1>
        <h1 className='text-9xl' id="title-2">Freelance</h1>
        <h1 className='text-9xl' id="title-3">Software Engineer</h1>
      </div>
      <div id="welcome">
        <Navbar
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
        <About setSelectedPage={setSelectedPage}/>
        <Project setSelectedPage={setSelectedPage}/>
        <Research setSelectedPage={setSelectedPage}/>
        <Skill setSelectedPage={setSelectedPage}/>
        <Footer/>
      </div>
    </div>
  )
}

export default App
