import Frame from "@/assets/device-frame.svg";
import useMediaQuery from "@/hooks/useMediaQuery";

type Props = {
    description: string;
}

const ResLap = ({description}: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
 
    <div className="relative mb-20">
        <img src={Frame} className=" w-full h-full"/>
        {
            isAboveMediumScreens ?(
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-10">
                    <p className="text-white text-center text-sm w-44 md:w-2/3 leading-relaxed ">{description}</p>
                    <a className="border p-6 rounded-full text-white text-xs hover:cursor-pointer hover:bg-white hover:text-black">Read Paper</a>
                </div>

            )
            :
            (
                <div className="absolute inset-0 flex items-center justify-center">
                    <a className="border p-6 rounded-full text-white text-xs hover:cursor-pointer hover:bg-white hover:text-black">Read Paper</a>
                </div>
            )
        }
        
    </div>


  )
}

export default ResLap