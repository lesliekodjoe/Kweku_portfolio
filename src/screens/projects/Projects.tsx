import useMediaQuery from '@/hooks/useMediaQuery';

type Props = {
    id: number,
    date_role: string;
    description: string;
    role: string;
}

const Projects = ({id, date_role, description, role}: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const flexBetween = "flex items-center justify-between";
  
  return (
    <li className={`text-white border-b border-gray-500 px-12 py-6 md:flex ${id === 1 ? 'bg-primary-500':''} ${isAboveMediumScreens ? flexBetween:''}`}>
      <p className=''>{date_role}</p>
      <p className='my-6 w-2/4'>{description}</p>
      <p>{role}</p>
    </li>
   
  )
}

export default Projects