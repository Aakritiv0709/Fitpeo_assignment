import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

const Sidebar = () => {
  const [SideBarOpen, setSideBarOpen] = useState(true);
  const [ScreenWidth, setScreenWidth] = useState(window.innerWidth);

  const drawerRef = useRef(null);

  const NavLinks = [
    {
      title: "Dashboard",
      link: "/",
      src: "/icons/Dashboard navbar icons/overview_icon.svg",
    },
    {
      title: "Products",
      link: "/",
      src: "/icons/Dashboard navbar icons/calendar_icon.svg",
    },
    {
      title: "Customers",
      link: "/",
      src: "/icons/Dashboard navbar icons/user_icon.svg",
    },
    {
      title: "Income",
      link: "/",
      src: "/icons/Dashboard navbar icons/message_icon.svg",
    },
    {
      title: "Promote",
      link: "/",
      src: "/icons/Dashboard navbar icons/group_user_icon.svg",
    },
    {
      title: "Settings",
      link: "/",
      src: "/icons/Dashboard navbar icons/setting_icon.svg",
    },
    {
      title: "Logout",
      link: "",
      src: "/icons/Dashboard navbar icons/logout_icon.svg",
    },
  ];

  useEffect(() => {
    // Define a function to update the screen ScreenWidth
    function OnWindowResize() {
      setScreenWidth(window.innerWidth);

      if (window.innerWidth >= 992) {
        setSideBarOpen(true);
      } else {
        setSideBarOpen(false);
      }
    }

    // Add an event listener for the window's resize event
    window.addEventListener("resize", OnWindowResize);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", OnWindowResize);
    };
  }, []);

  const OnClickOutSide = (event) => {
    if (
      drawerRef.current &&
      !drawerRef.current.contains(event.target) &&
      ScreenWidth <= 992
    ) {
      setSideBarOpen(false);
    }
  };

  useEffect(() => {
    if (SideBarOpen) {
      // Attach the event listener when the drawer is open
      document.addEventListener("mousedown", OnClickOutSide);
    } else {
      // Remove the event listener when the drawer is closed
      document.removeEventListener("mousedown", OnClickOutSide);
    }

    // Cleanup the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", OnClickOutSide);
    };
  }, [SideBarOpen, ScreenWidth]);

  return (
    <>
      <div
        ref={drawerRef}
        className={`max-[992px]:absolute inset-y-0 left-0 z-50 w-[370px] max-[992px]:w-[40vw] h-screen bg-[#040440] min-[992px]:px-4 transform transition-transform ease-in-out duration-300 ${
          SideBarOpen ? "translate-x-0 " : "-translate-x-full fixed"
        }`}
      >
        {/* LOGO div */}
        <div className="flex justify-center items-center h-28 mt-3">
          <Link href="/" className="p-1 bg-white rounded-xl">
            <img
              src={"/fitpeo_logo.png"}
              height={100}
              width={100}
              alt="Medella logo"
            ></img>
          </Link>
        </div>
        <ul className="p-3">
          {NavLinks.map((data, index) => {
            const ActivePath = true;
            return (
              <li
                ref={drawerRef}
                key={index}
                className={` ${
                  ActivePath ? "bg-primary text-white" : ""
                } max-[992px]:p-2 md:p-3 text-xs md:text-base rounded-lg my-3 font-bold text-[#767b9c] hover:text-white hover:bg-[#2d2d69] transition-all duration-[0.3] cursor-pointer`}
              >
                <Link
                  href={data.link}
                  className="flex items-center min-[992px]:px-3"
                >
                  <div className="mr-4 bg-white p-[8px] rounded-full">
                    <img
                      width={16}
                      height={16}
                      src={data.src}
                      alt={data.title + "icon"}
                      className="min-w-[16px] min-h-[16px] "
                    ></img>
                  </div>
                  <p>{data.title}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      {SideBarOpen ? (
        <span
          className="cursor-pointer top-5 z-[50] min-[992px]:hidden max-[992px]:absolute"
          onClick={() => setSideBarOpen(!SideBarOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0,0,256,256"
            width="25px"
            height="25px"
          >
            <g
              fill="#ffffff"
              fillRule="nonzero"
              stroke="none"
              strokeWidth="1"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              strokeMiterlimit="10"
              strokeDasharray=""
              strokeDashoffset="0"
              fontFamily="none"
              fontWeight="none"
              fontSize="none"
              textAnchor="none"
            >
              <g transform="scale(8.53333,8.53333)">
                <path d="M7,4c-0.25587,0 -0.51203,0.09747 -0.70703,0.29297l-2,2c-0.391,0.391 -0.391,1.02406 0,1.41406l7.29297,7.29297l-7.29297,7.29297c-0.391,0.391 -0.391,1.02406 0,1.41406l2,2c0.391,0.391 1.02406,0.391 1.41406,0l7.29297,-7.29297l7.29297,7.29297c0.39,0.391 1.02406,0.391 1.41406,0l2,-2c0.391,-0.391 0.391,-1.02406 0,-1.41406l-7.29297,-7.29297l7.29297,-7.29297c0.391,-0.39 0.391,-1.02406 0,-1.41406l-2,-2c-0.391,-0.391 -1.02406,-0.391 -1.41406,0l-7.29297,7.29297l-7.29297,-7.29297c-0.1955,-0.1955 -0.45116,-0.29297 -0.70703,-0.29297z"></path>
              </g>
            </g>
          </svg>
        </span>
      ) : (
        <span
          className="cursor-pointer  top-5 rounded-full z-[50] min-[992px]:hidden max-[992px]:absolute"
          onClick={() => setSideBarOpen(!SideBarOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0,0,256,256"
            width="40px"
            height="40px"
          >
            <defs>
              <linearGradient
                x1="32"
                y1="5.333"
                x2="32"
                y2="59.867"
                gradientUnits="userSpaceOnUse"
                id="color-1"
              >
                <stop offset="0" stopColor="#040440"></stop>
                <stop offset="1" stopColor="#c822ff"></stop>
              </linearGradient>
              <linearGradient
                x1="32"
                y1="5.333"
                x2="32"
                y2="59.867"
                gradientUnits="userSpaceOnUse"
                id="color-2"
              >
                <stop offset="0" stopColor="#040440"></stop>
                <stop offset="1" stopColor="#c822ff"></stop>
              </linearGradient>
              <linearGradient
                x1="32"
                y1="21.5"
                x2="32"
                y2="26.336"
                gradientUnits="userSpaceOnUse"
                id="color-3"
              >
                <stop offset="0" stopColor="#6dc7ff"></stop>
                <stop offset="1" stopColor="#040440"></stop>
              </linearGradient>
              <linearGradient
                x1="32"
                y1="29.333"
                x2="32"
                y2="34.5"
                gradientUnits="userSpaceOnUse"
                id="color-4"
              >
                <stop offset="0" stopColor="#6dc7ff"></stop>
                <stop offset="1" stopColor="#040440"></stop>
              </linearGradient>
              <linearGradient
                x1="32"
                y1="37"
                x2="32"
                y2="41.337"
                gradientUnits="userSpaceOnUse"
                id="color-5"
              >
                <stop offset="0" stopColor="#6dc7ff"></stop>
                <stop offset="1" stopColor="#040440"></stop>
              </linearGradient>
            </defs>
            <g
              fill="none"
              fillRule="nonzero"
              stroke="none"
              strokeWidth="1"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              strokeMiterlimit="10"
              strokeDasharray=""
              strokeDashoffset="0"
              fontFamily="none"
              fontWeight="none"
              fontSize="none"
              textAnchor="none"
            >
              <g transform="scale(4,4)">
                <path
                  d="M32,58c-14.337,0 -26,-11.663 -26,-26c0,-14.337 11.663,-26 26,-26c14.337,0 26,11.663 26,26c0,14.337 -11.663,26 -26,26zM32,8c-13.233,0 -24,10.767 -24,24c0,13.233 10.767,24 24,24c13.233,0 24,-10.767 24,-24c0,-13.233 -10.767,-24 -24,-24z"
                  fill="url(#color-1)"
                ></path>
                <path
                  d="M32,52c-11.028,0 -20,-8.972 -20,-20c0,-11.028 8.972,-20 20,-20c11.028,0 20,8.972 20,20c0,11.028 -8.972,20 -20,20zM32,14c-9.925,0 -18,8.075 -18,18c0,9.925 8.075,18 18,18c9.925,0 18,-8.075 18,-18c0,-9.925 -8.075,-18 -18,-18z"
                  fill="url(#color-2)"
                ></path>
                <path
                  d="M42,25c0,0.552 -0.448,1 -1,1h-18c-0.552,0 -1,-0.448 -1,-1v-2c0,-0.552 0.448,-1 1,-1h18c0.552,0 1,0.448 1,1z"
                  fill="url(#color-3)"
                ></path>
                <path
                  d="M42,33c0,0.552 -0.448,1 -1,1h-18c-0.552,0 -1,-0.448 -1,-1v-2c0,-0.552 0.448,-1 1,-1h18c0.552,0 1,0.448 1,1z"
                  fill="url(#color-4)"
                ></path>
                <path
                  d="M42,41c0,0.552 -0.448,1 -1,1h-18c-0.552,0 -1,-0.448 -1,-1v-2c0,-0.552 0.448,-1 1,-1h18c0.552,0 1,0.448 1,1z"
                  fill="url(#color-5)"
                ></path>
              </g>
            </g>
          </svg>
        </span>
      )}
    </>
  );
};

export default Sidebar;
