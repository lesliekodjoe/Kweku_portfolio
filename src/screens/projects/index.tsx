import React from 'react'
import HeadText from '@/shared/HeadText'
import { motion } from 'framer-motion';
import { ProjectType } from '@/shared/type';
import Projects from './Projects';

const projectTimeline: Array<ProjectType> = [
  {
    id: 1,
    date_role: "September 2022",
    description: "I taught Operating Systems at Ashesi University during the Summer.",
    role: "Freelance",

  },
  {
    id: 2,
    date_role: "September 2022",
    description: "I taught Operating Systems at Ashesi University during the Summer.",
    role: "Freelance",

  },
  {
    id: 3,
    date_role: "September 2022",
    description: "I taught Operating Systems at Ashesi University during the Summer.",
    role: "Freelance",

  },
  {
    id: 4,
    date_role: "September 2022",
    description: "I taught Operating Systems at Ashesi University during the Summer.",
    role: "Freelance",

  },
];


type Props = {
    setSelectedPage: (value: string) => void;
}

const Project = ({setSelectedPage}: Props) => {
  return (
    <section id='projects' className='bg-secondary-500 mx-auto h-screen'>
      <motion.div 
      className=''
      onViewportEnter={() => setSelectedPage("projects")}
      viewport={{ amount: 0.85 }}
      >
        <div className='border'>
          <HeadText>Timeline</HeadText>
          <div className='px-12'>
            <ul className='w-full border'>
              {projectTimeline.map((item: ProjectType) =>(
                <Projects
                  key={item.id}
                  id={item.id}
                  date_role={item.date_role}
                  description={item.description}
                  role={item.role}
                />
              ))}
            </ul>
          </div>

        </div>
      </motion.div>
      
    </section>
  )
}

export default Project