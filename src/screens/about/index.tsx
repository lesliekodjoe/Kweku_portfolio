import useMediaQuery from "@/hooks/useMediaQuery";

type Props = {
    setSelectedPage: (value: string) => void;
}

const About = ({setSelectedPage}: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
    
    return (
        <section id="about" className="bg-about-image bg-cover bg-center h-screen w-full">
            
        </section>
    )
}

export default About