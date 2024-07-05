import HeadText from "@/shared/HeadText"
import { motion } from "framer-motion"

type Props = {
    setSelectedPage: (value: string) => void
}

const Skill = ({setSelectedPage}: Props) => {
  return (
        <section id='skills' className='bg-secondary-500 mx-auto'>
            <motion.div 
            className='h-full'
            onViewportEnter={() => setSelectedPage("skills")}
            viewport={{ amount: 0.5 }}
            >
                <div className='border-b border-gray-500'>
                    <HeadText
                    backgroundColor='bg-secondary-500'
                    >Experience</HeadText>
                </div>

                <div className="px-28 my-14 text-white font-black font-satoshi text-lg leading-loose md:leading-relaxed md:text-5xl">
                    <p className="">
                        I'm experienced in Machine Learning, and Natural Language Processing and model 
                        deployment with Docker containers. Proficient in Python, Java, C++, MySQL, R, JavaScript, 
                        PHP, HTML, and CSS. My expertise extends to data analysis and visualization (Python, Power BI, Tableau).
                    </p>
                </div>

            </motion.div>
        </section>
  )
}

export default Skill