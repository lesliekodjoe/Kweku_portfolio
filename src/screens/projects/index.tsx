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

const container = {
  hidden: {},
  visible: {
    transition: { delayChildren: 0.1 , staggerChildren: 0.3 },
  },
};


type Props = {
    setSelectedPage: (value: string) => void;
}

const Project = ({setSelectedPage}: Props) => {
  return (
    <section id='projects' className='bg-secondary-500 mx-auto'>
      <motion.div 
      className='md:h-full'
      onViewportEnter={() => setSelectedPage("projects")}
      viewport={{ amount: 0.85 }}
      >
        <div className=''>
          <HeadText
          backgroundColor='bg-black'
          >Timeline</HeadText>
       
          <motion.div 
          className='w-full '
          initial = "hidden"
          whileInView="visible"
          viewport={{once: true, amount: 0.5}}
          variants={container}
          >
            {projectTimeline.map((item: ProjectType) =>(
              <Projects
                key={item.id}
                id={item.id}
                date_role={item.date_role}
                description={item.description}
                role={item.role}
              />
            ))}
          </motion.div>
 
        </div>
      </motion.div>
      
    </section>
  )
}

export default Project