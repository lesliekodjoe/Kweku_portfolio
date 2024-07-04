import useMediaQuery from "@/hooks/useMediaQuery";
import { motion } from "framer-motion";

type Props = {
    setSelectedPage: (value: string) => void;
}

const About = ({setSelectedPage}: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
    
    return (
        <section id="about" className="relative bg-about-image bg-cover bg-center md:h-full w-full">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <motion.div 
            className="relative mx-auto px-12 flex items-center justify-center"
            onViewportEnter={() => setSelectedPage("about")}
            viewport={{ amount: 0.85 }}
            >
                <div className="mt-10 flex flex-col justify-center items-center p-10 gap-16 md:p-0">
                    <motion.div 
                    className="md:w-full md:flex md:justify-start md:pl-60 md:pt-28"
                    initial = "hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                    transition={{duration: 0.5}}
                    variants={{
                        hidden: {opacity: 0, x: -50},
                        visible:{opacity: 1, x: 0 }
                    }}
                    >
                        <div className="text-xl font-semibold">
                            <p className="tracking-super-wide text-white"><span className="text-primary-500">K</span>WEKU</p> 
                            <p className="pl-5 py-3 tracking-super-wide text-white"><span className="text-primary-500">A</span>NDOH</p> 
                            <p className="pl-10 tracking-super-wide text-white"><span className="text-primary-500">Y</span>AMOAH</p> 
                        </div>
                    </motion.div>
                    <motion.div 
                    className="h-5/6 md:w-full md:flex md:justify-end"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: 50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                    >
                        <p className="text-xl md:w-1/5 font-medium text-white leading-loose px-4 md:px-0">
                            NLP Enthusiast interested in <span className="text-gray-200 font-bold">Multilingual NLP</span>, 
                            <span className="text-gray-200 font-bold"> Efficient Language Generation</span>, and <span className="text-gray-200 font-bold">Multimodal Learning</span>. 
                            Eager to explore AI's transformative power and societal impact.
                        </p>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}

export default About