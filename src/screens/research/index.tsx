import HeadText from '@/shared/HeadText';
import RHeadText from '@/screens/research/RHeadText';
import { motion } from 'framer-motion';
import ResTimeLine from './ResTimeLine';
import { ResearchType } from '@/shared/type';
import ResLap from './resLap';
import useMediaQuery from '@/hooks/useMediaQuery';



const researchDetails: Array<ResearchType> = [
    {
        resTitle: "Effort to Apply NLP in Africa",
        resDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. At tortor praesent ullamcorper gravida libero id malesuada vitae ultrices. Nunc quis suspendisse eget tristique orci odio enim lectus ac... ",
        resDate: "Aug 21 - Dec 24",
        resYear: "2022",
        resLocation: "Accra, Ghana",
    },
    {
        resTitle: "Africa Deep Fake Speech & ASV Systems",
        resDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. At tortor praesent ullamcorper gravida libero id malesuada vitae ultrices. Nunc quis suspendisse eget tristique orci odio enim lectus ac... ",
        resDate: "Aug 21 - Dec 24",
        resYear: "2022",
        resLocation: "Accra, Ghana",
    }
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

            <div className='flex flex-col w-full py-16 gap-20'>

                {researchDetails.map((item: ResearchType)=> (
                    <div className={`border-b border-gray-500 px-28 ${isAboveMediumScreens ? 'flex ' : ''}`}>
                        <div className='md:w-1/2'>
                            <RHeadText
                                title={item.resTitle}
                            />
                            <ResTimeLine
                                date={item.resDate}
                                year={item.resYear}
                                location={item.resLocation}
                            />
                        </div>
                        <div className='flex items-center justify-center md:w-1/2'>
                            <ResLap
                                description={item.resDescription}
                            />
                        </div>
                    </div>
                ))}
            </div>

        </motion.div>
    </section>
  )
}

export default Research