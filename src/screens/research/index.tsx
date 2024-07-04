import HeadText from '@/shared/HeadText';
import RHeadText from '@/shared/RHeadText';
import { motion } from 'framer-motion';
import ResTimeLine from './ResTimeLine';
import { ResearchType } from '@/shared/type';

const researchDetails: Array<ResearchType> =[
    {
        resTitle: "Effort to Apply NLP in Africa",
        resDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. At tortor praesent ullamcorper gravida libero id malesuada vitae ultrices. Nunc quis suspendisse eget tristique orci odio enim lectus ac... ",
        resDate: "Aug 21 - Dec 24",
        resYear: "2022",
        resLocation: "Accra, Ghana",
    },
    {
        resTitle: "African Deep Fake Speech & ASV Systems",
        resDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. At tortor praesent ullamcorper gravida libero id malesuada vitae ultrices. Nunc quis suspendisse eget tristique orci odio enim lectus ac... ",
        resDate: "Aug 21 - Dec 24",
        resYear: "2022",
        resLocation: "Accra, Ghana",
    }
]

type Props = {
    setSelectedPage: (value: string) => void;
}

const Research = ({setSelectedPage}: Props) => {
  return (
    <section id='research' className='bg-secondary-500 mx-auto'>
        <motion.div 
        className='h-full'
        onViewportEnter={() => setSelectedPage("research")}
        viewport={{ amount: 0.85 }}
        >
            <div className='border-b border-gray-500'>
                <HeadText
                backgroundColor='bg-secondary-500'
                >Research</HeadText>
            </div>
            <div>
                
            </div>
            <div className='px-12 border w-full py-16'>
                <div>
                    {/* <RHeadText></RHeadText> */}
                    {/* <ResTimeLine></ResTimeLine> */}
                </div>
            </div>

        </motion.div>
    </section>
  )
}

export default Research