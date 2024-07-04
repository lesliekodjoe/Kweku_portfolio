import useMediaQuery from '@/hooks/useMediaQuery';
import { motion } from 'framer-motion';

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

type Props = {
    id: number,
    date_role: string;
    description: string;
    role: string;
}

const Projects = ({id, date_role, description, role}: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const flexBetween = "flex items-center justify-between";
  // const flexCenter = "flex flex-col items-center text-center justify-center"
  
  return (
    <motion.div 
    className={`text-white border-b border-gray-500 px-28 py-6 md:flex ${id === 1 ? 'bg-primary-500':''} ${isAboveMediumScreens ? flexBetween: ' '}`}
    variants={childVariant}
    >
      <p className=''>{date_role}</p>
      <p className='my-6 md:w-2/4'>{description}</p>
      <p>{role}</p>
    </motion.div>
   
  )
}

export default Projects