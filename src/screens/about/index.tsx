import useMediaQuery from "@/hooks/useMediaQuery";

type Props = {
    setSelectedPage: (value: string) => void;
}

const About = ({setSelectedPage}: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
    
    return (
        <section id="about" className="relative bg-about-image bg-cover bg-center h-screen w-full">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative mx-auto px-12 flex items-center h-screen justify-center">
                <div className="mt-10 flex flex-col justify-center items-center p-10 gap-16 md:p-0">
                    <div className="md:w-full md:flex md:justify-start md:pl-60 md:pt-28">
                        <div className="text-xl font-semibold">
                            <p className="tracking-super-wide text-white"><span className="text-primary-500">K</span>WEKU</p> 
                            <p className="pl-5 py-3 tracking-super-wide text-white"><span className="text-primary-500">A</span>NDOH</p> 
                            <p className="pl-10 tracking-super-wide text-white"><span className="text-primary-500">Y</span>AMOAH</p> 
                        </div>
                    </div>
                    <div className="h-5/6 md:w-full md:flex md:justify-end">
                        <p className="text-xl md:w-1/5 font-medium text-white leading-loose px-4 md:px-0">
                            NLP Enthusiast interested in Multilingual NLP, 
                            Efficient Language Generation, and Multimodal Learning. 
                            Eager to explore AI's transformative power and societal impact.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About