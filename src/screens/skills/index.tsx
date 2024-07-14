import HeadText from "@/shared/HeadText"
import { motion } from "framer-motion"
import Python from "@/assets/Python logo.svg";
import Java from "@/assets/Java logo.svg";
import R from "@/assets/R logo.svg";
import JS from "@/assets/JS logo.svg";
import Pytorch from "@/assets/pytorch logo.svg";
import TensorFlow from "@/assets/tensorflow logo.svg";
import MySql from "@/assets/MySQL logo.svg";
import useMediaQuery from "@/hooks/useMediaQuery";

type Props = {
    setSelectedPage: (value: string) => void
}

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.1 , 
      staggerChildren: 0.25
    }
  }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const Skill = ({setSelectedPage}: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
        <section id='skills' className='bg-secondary-500 mx-auto pb-16'>
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

                <motion.div 
                className="px-24 md:px-40 my-14 text-white font-black text-justify font-satoshi text-lg leading-loose md:leading-relaxed md:text-5xl"
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}
                variants={staggerContainer}
                >
                    <motion.p variants={fadeInUp} id="text-1" className="">
                        I'm experienced in Machine Learning, and Natural 
                    </motion.p>
                    <motion.p variants={fadeInUp} id="text-2" className="">
                        Language Processing and model deployment with                    
                    </motion.p>
                    <motion.p variants={fadeInUp} id="text-3" className="">
                        Docker containers. Proficient in Python, Java, C++,
                    </motion.p>
                    <motion.p variants={fadeInUp} id="text-4" className="">
                        MySQL, R, JavaScript, PHP, HTML, and CSS. My  
                    </motion.p>
                    <motion.p variants={fadeInUp} id="text-5" className="">
                        expertise extends to data analysis and visualization
                    </motion.p>
                    <motion.p variants={fadeInUp} id="text-6" className="">
                        (Python, Power BI, Tableau).
                    </motion.p>
                           
                        
                </motion.div>
                <motion.div 
                className={`px-28 grid ${isAboveMediumScreens ? 'grid-cols-3' : 'grid-cols-2 gap-y-10'}`}
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}
                >
                    <motion.div variants={fadeInUp} className="flex flex-col items-center gap-5 justify-between">
                        <div className="w-14">
                            <img src={Python} className="w-full h-full"/>
                        </div>
                        <div className="w-14 mt-10">
                            <img src={JS} className="w-full h-full"/>
                        </div>
                    </motion.div>
                    <motion.div variants={fadeInUp} className="flex flex-col items-center gap-5 justify-between">
                        <div className="w-14">
                            <img src={Java} className="w-full h-full"/>
                        </div>
                        <div className="w-40 mt-10">
                            <img src={Pytorch} className="w-full h-full"/>
                        </div>
                    </motion.div>
                    <motion.div variants={fadeInUp} className="flex flex-col items-center gap-5 justify-between">
                        <div className="w-14">
                            <img src={R} className="w-full h-full"/>
                        </div>
                        <div className="w-44 mt-10">
                            <img src={TensorFlow} className="w-full h-full"/>
                        </div>
                    </motion.div>
                    <motion.div variants={fadeInUp} className="flex flex-col items-center gap-5 justify-between">
                        <div className="w-40 mt-10">
                            <img src={MySql} className="w-full h-full"/>
                        </div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
  )
}

export default Skill