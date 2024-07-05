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

                <div className="px-28 my-14 text-white font-black text-justify font-satoshi text-lg leading-loose md:leading-relaxed md:text-5xl">
                    <p className="">
                        I'm experienced in Machine Learning, and Natural Language Processing and model 
                        deployment with Docker containers. Proficient in Python, Java, C++, MySQL, R, JavaScript, 
                        PHP, HTML, and CSS. My expertise extends to data analysis and visualization (Python, Power BI, Tableau).
                    </p>
                </div>
                <div className={`px-28 grid ${isAboveMediumScreens ? 'grid-cols-3' : 'grid-cols-2 gap-y-10'}`}>
                    <div className="flex flex-col items-center gap-5 justify-between">
                        <div className="w-14">
                            <img src={Python} className="w-full h-full"/>
                        </div>
                        <div className="w-14 mt-10">
                            <img src={JS} className="w-full h-full"/>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-5 justify-between">
                        <div className="w-14">
                            <img src={Java} className="w-full h-full"/>
                        </div>
                        <div className="w-40 mt-10">
                            <img src={Pytorch} className="w-full h-full"/>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-5 justify-between">
                        <div className="w-14">
                            <img src={R} className="w-full h-full"/>
                        </div>
                        <div className="w-44 mt-10">
                            <img src={TensorFlow} className="w-full h-full"/>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-5 justify-between">
                        <div className="w-40 mt-10">
                            <img src={MySql} className="w-full h-full"/>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
  )
}

export default Skill