import { useState } from "react"
import useMediaQuery from "../hooks/useMediaQuery";
 
function Navbar() {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");


  const hover = "hover:text-almost-black cursor-pointer transition duration-300"
  return (




    <div className="flex font-epilogue justify-between w-full py-4">
      {/* DESKTOP NAV */}
        {isDesktop ? (
          <div >
            <div className="flex    w-2/4 transition duration-300 text-medium-gray items-center h-16 xs:gap-x-2 md:-gap-x-16  pl-16">
              <p className=""></p>
              <p className={`${hover}`}>Features</p>
              <p className={`${hover}`}>Company</p>
              <p className={`${hover}`}>Careers</p>
              <p className={`${hover}`}>About</p> 

            </div>
            <div className="flex  xs:bg-purple-500">
                <button className={`${hover}`}>Login</button>
                <button className={`${hover} border-2    border-medium-gray hover:border-almost-black  rounded-2xl`}>Register</button>
            </div>


          </div>
        ) : (
          <div className="flex  justify-between w-full mx-4">
            <img src="../assets/images/logo.svg" alt="snap-logo"/>
            <button 
              className="flex justify-end cursor:pointer px-4"
              onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <img src="../assets/images/icon-menu.svg" alt="menu-icon"/>
            </button>
          </div>
        )}
          {/* MOBILE MENU POPUP */}
          {!isDesktop && isMenuToggled && (
            <div className=" fixed right-0 top-0 bottom-0 h-full bg-white w-[220px]">
              {/* CLOSE ICON */}
              <div className="flex justify-end pt-10 pr-10">
                <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <img  src="../assets/images/icon-close-menu.svg" alt="icon-close-menu"/>
                </button>
              </div>
            {/* MENU ITEMS */}
            <div className="flex flex-col items-start text-[16px] text-medium-gray gap-4 bg-red-500  ml-[10%] mt-[12%] text-2xl h-5/6">                
                <p className={`${hover} `}>Features <span className="mb-1 ml-3 content-arrowDown"></span></p>
                <div className=" flex-col bg-yellow-500  h-1/6 text-sm pl-[20] ml-16 w-full">
                  <div className="flex ">
                    <img className="mr-4" src="../assets/images/icon-todo.svg" alt="todo-list-icon"/>
                    <p>Todo List</p>
                  </div>
                  <div className="flex ">
                    <img className="mr-4" src="../assets/images/icon-calendar.svg" alt="calendar-icon"/>
                    <p>Calendar</p>
                  </div>
                  <div className="flex">
                    <img className="mr-4" src="../assets/images/icon-reminders.svg" alt="reminders-icon"/>
                    <p>Reminders</p>
                  </div>
                  <div className="flex">
                    <img className="mr-4" src="../assets/images/icon-planning.svg" alt="planning-icon"/>
                    <p>Planning</p>
                  </div>
                </div>
                <p className={`${hover}`}>Company <span className="mb-1 ml-3 content-arrowDown"></span></p>
                <div className=" bg-yellow-500  h-1/6 pl-[20] ml-16 w-full text-sm">
                    <p>History</p>
                    <p>Our Team</p>
                    <p>Blog</p>
                  </div>
                <p className={`${hover}`}>Careers</p>
                <p className={`${hover}`}>About</p> 

              <div className="flex flex-col   w-full px-8 text-[18px]">
                  <button className={`${hover}`}>Login</button>
                  <button className={`${hover} border-2    border-medium-gray hover:border-almost-black  rounded-2xl`}>Register</button>
              </div>
            </div>

            </div>
          )}








    </div>
  )
}

export default Navbar


