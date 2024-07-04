import HeadText from '@/shared/HeadText';
import { motion } from 'framer-motion';
import React from 'react'

type Props = {
    setSelectedPage: (value: string) => void;
}

const Research = ({setSelectedPage}: Props) => {
  return (
    <section id='research' className='bg-secondary-500 mx-auto h-screen'>
        <motion.div 
        className=''
        onViewportEnter={() => setSelectedPage("research")}
        viewport={{ amount: 0.85 }}
        >
            <div className='border-b border-gray-500'>
                <HeadText
                backgroundColor='bg-secondary-500'
                >Research</HeadText>
            </div>

        </motion.div>
    </section>
  )
}

export default Research