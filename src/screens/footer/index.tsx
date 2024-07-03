import React from 'react'
import Github from "@/assets/Github.svg";
import LinkedIn from "@/assets/Linked.svg";
import Twitter from "@/assets/Twitter.svg";

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className='fixed bottom-6 z-40 w-full py-6 '>
        <div className='mx-auto w-full px-12 space-y-10'>
            <div className='w-4'>
                <img src={Github}  className='w-full h-full' />
            </div>
            <div className='w-4'>
                <img src={LinkedIn}  className='w-full h-full' />
            </div>
            <div className='w-4'>
                <img src={Twitter}  className='w-full h-full' />
            </div>
        </div>
    </footer>
  )
}

export default Footer
