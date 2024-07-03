import { useState } from 'react'
import Navbar from "@/screens/navbar";


function App() {
  const [selectedPage, setSelectedPage] = useState("about")

  return (
    <div className="app bg-secondary-500">
      <Navbar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
    </div>
  )
}

export default App
