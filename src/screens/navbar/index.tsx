import React from 'react'
import Logo from "@/assets/Logo.png";
import Link from './Link';

type Props = {
    selectedPage: string;
    setSelectedPage: (value: string) => void;
}

const Navbar = ({selectedPage, setSelectedPage}: Props) => {
    const flexBetween = "flex items-center justify-between";
    const flexStartBetween = "flex items-start justify-between";

    return (
        <nav>
            {/* Desktop View */}
            <div className={`${flexBetween} fixed top-0 z-40 w-full py-6`}>
                <div className={`${flexStartBetween} mx-auto w-full px-12`}>
                    {/* Left Side */}
                    <div className='w-24'> 
                        <img alt="logo" src={Logo}  className='w-full h-full'/>
                    </div>

                    {/* Right Side */}
                    <div className='flex flex-col gap-3'>
                        <Link 
                            page="ABOUT"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link 
                            page="RESEARCH"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link 
                            page="PROJECTS"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link 
                            page="SKILLS"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar