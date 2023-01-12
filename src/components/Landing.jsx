import { motion } from "framer-motion" 
const Landing = () => {
  return (
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
  )
}

export default Landing