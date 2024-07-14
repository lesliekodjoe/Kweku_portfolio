import Github from "@/assets/Github.svg";
import LinkedIn from "@/assets/Linked.svg";
import Twitter from "@/assets/Twitter.svg";

const Footer = () => {
  return (
    <footer className='fixed bottom-6 z-40 w-full py-6 '>
        <div className='mx-auto w-full px-12 space-y-10'>
            <div className='w-4'>
                <a href={'https://github.com/KwekuYamoah'} target="_blank">
                    <img src={Github}  className='w-full h-full' />
                </a>
            </div>
            <div className='w-4'>
                <a href={'https://www.linkedin.com/in/kweku-andoh-yamoah/'} target="_blank">
                    <img src={LinkedIn}  className='w-full h-full' />
                </a>
            </div>
            <div className='w-4'>
                <a href={'https://x.com/neural_mozart'} target="_blank">
                    <img src={Twitter}  className='w-full h-full' />
                </a>
            </div>
        </div>
    </footer>
  )
}

export default Footer
