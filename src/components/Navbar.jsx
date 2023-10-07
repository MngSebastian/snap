import { useState } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
function Navbar() {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const [isFeatures, setIsFeatures] = useState(false);
  const [isCompany, setIsCompany] = useState(false);

  const isDesktop = useMediaQuery("(min-width: 768px)");
  const hover =
    "hover:text-almost-black cursor-pointer transition duration-300";

  // Close feature and company dropwdowns when closing the sidebar
  function handleClick() {
    setIsMenuToggled(!isMenuToggled);
    setIsFeatures(false);
    setIsCompany(false);
  }
  return (
    <div className="flex font-epilogue border-b-2 justify-between w-screen py-4">
      {/* DESKTOP NAV */}
      {isDesktop ? (
        <div className="flex justify-between w-full">
          <div className="flex  w-[75%] text-medium-gray items-center h-10 gap-4 md:gap-12  pl-4">
            <img src="../assets/images/logo.svg" alt="snap-logo" />
            {/* features DropDown Btn */}
            <button
              onClick={() => setIsFeatures(!isFeatures)}
              className={`${hover} `}
            >
              Features{" "}
              <span
                className={`${
                  isFeatures ? "content-arrowUp" : "content-arrowDown"
                } `}
              ></span>
            </button>
            <div
              className={`${
                isFeatures ? "" : "hidden"
              } flex justify-center shadow-[0px_0px_20px_1px_rgba(0,0,0,0.1)] absolute bg-white 
                flex-col mt-48  ml-20 gap-2 h-[128px] text-sm pl-4 rounded-xl w-36`}
            >
              <div className="flex ">
                <img
                  className="mr-4"
                  src="../assets/images/icon-todo.svg"
                  alt="todo-list-icon"
                />
                <button>Todo List</button>
              </div>
              <div className="flex ">
                <img
                  className="mr-4"
                  src="../assets/images/icon-calendar.svg"
                  alt="calendar-icon"
                />
                <button>Calendar</button>
              </div>
              <div className="flex">
                <img
                  className="mr-4"
                  src="../assets/images/icon-reminders.svg"
                  alt="reminders-icon"
                />
                <button>Reminders</button>
              </div>
              <div className="flex">
                <img
                  className="mr-4"
                  src="../assets/images/icon-planning.svg"
                  alt="planning-icon"
                />
                <button>Planning</button>
              </div>
            </div>

            {/* Company button Dropdown */}
            <button
              onClick={() => setIsCompany(!isCompany)}
              className={`${hover}`}
            >
              Company{" "}
              <span
                className={`${
                  isCompany ? "content-arrowUp" : "content-arrowDown"
                } `}
              ></span>
            </button>
            <div
              className={`${
                isCompany ? "" : "hidden"
              } flex justify-center shadow-[0px_0px_20px_1px_rgba(0,0,0,0.1)] absolute bg-white 
                flex-col mt-44  ml-64 gap-2 h-28 text-sm pl-4 rounded-xl w-24`}
            >
              <p>History</p>
              <p>Our Team</p>
              <p>Blog</p>
            </div>

            <p className={`${hover}`}>Company</p>
            <p className={`${hover}`}>Careers</p>
            <p className={`${hover}`}>About</p>
          </div>
          <div className="flex justify-end w-[220px] pr-6 text-medium-gray">
            <button className={`${hover} pr-8`}>Login</button>
            <button
              className={`${hover} border-2    border-medium-gray hover:border-almost-black  rounded-2xl px-4`}
            >
              Register
            </button>
          </div>
        </div>
      ) : (
        <div className="flex  justify-between w-full mx-4">
          <img src="../assets/images/logo.svg" alt="snap-logo" />
          <button
            className="flex justify-end cursor:pointer px-4"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <img src="../assets/images/icon-menu.svg" alt="menu-icon" />
          </button>
        </div>
      )}
      {/* MOBILE MENU POPUP */}
      {!isDesktop && isMenuToggled && (
        <div className=" fixed right-0 top-0 bottom-0 h-full bg-white w-[220px]">
          {/* CLOSE ICON */}
          <div className="flex justify-end pt-10 pr-10">
            <button onClick={handleClick}>
              <img
                src="../assets/images/icon-close-menu.svg"
                alt="icon-close-menu"
              />
            </button>
          </div>
          {/* MENU ITEMS */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.3 }}
            variants={{
              hidden: { opacity: 0, x: 40 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="flex flex-col items-start text-[16px] text-medium-gray gap-4   ml-[10%] mt-[12%] text-2xl h-5/6">
              {}
              <button
                onClick={() => setIsFeatures(!isFeatures)}
                className={`${hover} `}
              >
                Features{" "}
                <span
                  className={`${
                    isFeatures ? "content-arrowUp" : "content-arrowDown"
                  } mb-1 ml-3`}
                ></span>
              </button>
              <div
                className={`${
                  isFeatures ? "" : "hidden"
                } flex   flex-col  gap-2 h-1/6 text-sm pl-[20] ml-12 w-full`}
              >
                <div className="flex ">
                  <img
                    className="mr-4"
                    src="../assets/images/icon-todo.svg"
                    alt="todo-list-icon"
                  />
                  <button>Todo List</button>
                </div>
                <div className="flex ">
                  <img
                    className="mr-4"
                    src="../assets/images/icon-calendar.svg"
                    alt="calendar-icon"
                  />
                  <button>Calendar</button>
                </div>
                <div className="flex">
                  <img
                    className="mr-4"
                    src="../assets/images/icon-reminders.svg"
                    alt="reminders-icon"
                  />
                  <button>Reminders</button>
                </div>
                <div className="flex">
                  <img
                    className="mr-4"
                    src="../assets/images/icon-planning.svg"
                    alt="planning-icon"
                  />
                  <button>Planning</button>
                </div>
              </div>
              <button
                onClick={() => setIsCompany(!isCompany)}
                className={`${hover}`}
              >
                Company{" "}
                <span
                  className={`${
                    isCompany ? "content-arrowUp" : "content-arrowDown"
                  } mb-1 ml-3`}
                ></span>
              </button>
              <div
                className={`${
                  isCompany ? "" : "hidden"
                } flex  flex-col  gap-4 h-1/6 pl-[20]   ml-12 w-full text-sm`}
              >
                <p>History</p>
                <p>Our Team</p>
                <p>Blog</p>
              </div>
              <p className={`${hover}`}>Careers</p>
              <p className={`${hover}`}>About</p>

              <div className="flex flex-col  w-full px-8 mt-[20%] text-[18px]">
                <button className={`${hover}`}>Login</button>
                <button
                  className={`${hover} border-2    border-medium-gray hover:border-almost-black  rounded-2xl`}
                >
                  Register
                </button>
                <p className="text-xs text-center mt-[45%]">
                  (Buttons are not actually clickable, the only purpose of this
                  website was to learn Tailwindcss.)
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
