import useMediaQuery from "@/hooks/useMediaQuery";

type Props = {
    date: string;
    year: string;
    location: string;
}

const ResTimeLine = ({date, year, location}: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <div className={`my-10 flex gap-y-12 ${isAboveMediumScreens ? 'gap-x-14' : 'flex-col'}`}>
        <div>
            <div className="uppercase pb-6 text-gray-50 border-b border-gray-50 text-xs">Date</div>
            <p className="mt-6 text-gray-20">{date}</p>
        </div>
        <div>
            <div className="uppercase pb-6 text-gray-50 border-b border-gray-50 text-xs">Year</div>
            <p className="mt-6 text-gray-20">{year}</p>
        </div>
        <div>
            <div className="uppercase pb-6 text-gray-50 border-b border-gray-50 text-xs">Location</div>
            <p className="mt-6 text-gray-20">{location}</p>
        </div>
    </div>
  )
}

export default ResTimeLine