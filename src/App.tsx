import { useState } from 'react'
import Navbar from "@/screens/navbar";
import About from '@/screens/about';
import Project from '@/screens/projects';
import Footer from '@/screens/footer';


function App() {
  const [selectedPage, setSelectedPage] = useState("About")

  return (
    <div className="app bg-secondary-500">
      <Navbar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <About setSelectedPage={setSelectedPage}/>
      <Project setSelectedPage={setSelectedPage}/>
      <Footer/>
    </div>
  )
}

export default App
