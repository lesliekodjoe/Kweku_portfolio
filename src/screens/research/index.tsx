import HeadText from '@/shared/HeadText';
import RHeadText from '@/screens/research/RHeadText';
import { motion } from 'framer-motion';
import ResTimeLine from './ResTimeLine';
import { ResearchType } from '@/shared/type';
import ResLap from './resLap';
import useMediaQuery from '@/hooks/useMediaQuery';



const researchDetails: Array<ResearchType> = [
    {
        resId: 1,
        resTitle: "Africa Deep Fake Speech & ASV Systems",
        resDescription: "Evaluating Deepfake Speech and ASV Systems on African Accents: ASV systems authenticate users via their speech, while DNN-based voice...",
        resDate: "Dec 08",
        resYear: "2023",
        resLocation: "Accra, Ghana",
        resLink: "https://openreview.net/forum?id=j26ZkJ7w64"
    },
    {
        resId: 2,
        resTitle: "Effort to Apply NLP in Africa",
        resDescription: "This paper investigates advancements in ASR, NLP, and TTS technologies for African languages, addressing the continent's implementation...",
        resDate: "May 15",
        resYear: "2023",
        resLocation: "Accra, Ghana",
        resLink: "https://journal.ashesi.edu.gh/index.php/seed/article/view/63/39"
    },
];

type Props = {
    setSelectedPage: (value: string) => void;
}

const Research = ({setSelectedPage}: Props) => {
      const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  return (
    <section id='research' className='bg-secondary-500 mx-auto'>
        <motion.div 
        className='h-full'
        onViewportEnter={() => setSelectedPage("research")}
        viewport={{ amount: 0.5 }}
        >
            <div className='border-b border-gray-500'>
                <HeadText
                backgroundColor='bg-secondary-500'
                >Research</HeadText>
            </div>

            <div className='flex flex-col w-full py-16 gap-10'>

                {researchDetails.map((item: ResearchType)=> (
                    <div className={`border-b border-gray-500 px-24 md:px-40 ${isAboveMediumScreens ? 'flex ' : ''}`}
                        key={item.resId}
                    >
                        <div className='md:w-1/2'>
                            <motion.div
                            initial = "hidden"
                            whileInView="visible"
                            viewport={{once: true, amount: 0.5}}
                            transition={{duration: 0.8}}
                            variants={{
                                hidden: {opacity: 0, x: -50},
                                visible:{opacity: 1, x: 0 }
                            }}
                            >
                                <RHeadText
                                    title={item.resTitle}
                                />
                            </motion.div>
                            <motion.div
                            initial = "hidden"
                            whileInView="visible"
                            viewport={{once: true, amount: 0.5}}
                            transition={{delay: 0.5, duration: 0.5}}
                            variants={{
                                hidden: {opacity: 0, x: -50},
                                visible:{opacity: 1, x: 0 }
                            }}
                            >
                                <ResTimeLine
                                    date={item.resDate}
                                    year={item.resYear}
                                    location={item.resLocation}
                                />
                            </motion.div>
                        </div>
                        <motion.div 
                        className='flex items-center justify-center md:w-1/2'
                        initial = "hidden"
                        whileInView="visible"
                        viewport={{once: true, amount: 0.5}}
                        transition={{delay: 1, duration: 0.5}}
                        variants={{
                            hidden: {opacity: 0, x: 50},
                            visible:{opacity: 1, x: 0 }
                        }}
                        >
                            <ResLap
                                description={item.resDescription}
                                link={item.resLink}
                            />
                        </motion.div>
                    </div>
                ))}
            </div>

        </motion.div>
    </section>
  )
}

export default Research