import { motion } from "framer-motion";
import useMediaQuery from "../hooks/useMediaQuery";
const Landing = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <div>

    {isDesktop ? (
      <div className="flex h-full w-screen  flex-row-reverse justify-center pt-8">
        <div className="flex  pr-24">
          <img className="w-[650px] h-[700px] " src="../assets/images/image-hero-desktop.png" alt="landing-logo"/>
        </div>
        <div className="flex items-center   w-4/6 flex-col">
          <div>
            <h3 className="font-bold text-[70px] mt-8">Make</h3>
            <h3 className="font-bold text-[70px] mt-[-38px]"> remote work</h3>

            <p className="text-[19px] text-medium-gray   mt-8">Get your team in sync, no matter your location.<br />
            Streamline processes, 
                create team rituals, and <br/>  watch productivity soar.
            </p>

          <button className="border-2 w-[130px] border-almost-black text-almost-black hover:bg-almost-black hover:text-almost-white
             transition duration-300 font-bold  py-2 mt-16 mr-64 rounded-xl">Learn More</button>
          <div className="flex justify-center  mt-48 gap-4 w-full ">
              <img className="h-[30px] w-[100px]" src="../assets/images/client-databiz.svg" alt="databiz-logo"/>
              <img className="h-[30px] w-[100px]" src="../assets/images/client-audiophile.svg" alt="audiophile-logo"/>
              <img className="h-[30px] w-[100px]" src="../assets/images/client-meet.svg" alt="meet-logo"/>
              <img className="h-[30px] w-[100px]" src="../assets/images/client-maker.svg" alt="maker-logo"/>
          </div>
          </div>
        </div>
    </div>
      ) : (
      <div className="flex flex-col font-epilogue text-center items-center">
        <img src="../assets/images/image-hero-mobile.png" alt="landing-logo"/>
        <h3 className="font-bold text-[40px] mt-8">Make remote work</h3>
        <p className="text-[16px] text-medium-gray  px-4 mt-3">Get your team in sync, no matter your location. Streamline processes, 
            create team rituals, and watch productivity soar.
        </p>
        <button className="bg-almost-black text-almost-white px-4 py-2 mt-8 rounded-xl">Learn More</button>
        <div className="flex justify-center  mt-16 gap-4 w-full mx-8">
            <img className="h-[20px] w-[80px]" src="../assets/images/client-databiz.svg" alt="databiz-logo"/>
            <img className="h-[20px] w-[80px]" src="../assets/images/client-audiophile.svg" alt="audiophile-logo"/>
            <img className="h-[20px] w-[80px]" src="../assets/images/client-meet.svg" alt="meet-logo"/>
            <img className="h-[20px] w-[80px]" src="../assets/images/client-maker.svg" alt="maker-logo"/>
        </div>
      </div>
    )}
    </div>
  )
}

export default Landing