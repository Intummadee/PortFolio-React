import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";





const Navbar = () => {

  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
            to='/'
            className='flex items-center gap-2'
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
              // เลื่อนหน้าเว็บไปยังตำแหน่งบนสุด
            }}
          >
            {/* <img src={logo} alt='logo' className='w-9 h-9 object-contain' /> */}
            <p className='text-darksky text-[24px] font-extrabold cursor-pointer flex '>
              {/* Adrian &nbsp; <span className='sm:block hidden'> | JS Mastery</span> */}
              Intummadee
              {/* &nbsp; = ย่อมาจาก "non-breaking space" ป้องกันไม่ให้ "Adrian" และข้อความใน <span> แยกออกจากกันเมื่อขนาดหน้าจอเปลี่ยนไป */}
              {/* ถ้าหน้าจอเป็นขนาดเล็ก sm  ข้อความ " | JavaScript Mastery" จะถูกซ่อน , ถ้าหน้าจอเป็นขนาดใหญ่ ข้อความ " | JavaScript Mastery" จะปรากฏ */}
              
            </p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white hover:underline hover:underline-offset-8 text-[18px] font-medium cursor-pointer hover:decoration-2 
              `}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
          <li className={`
          ${
            active === "Github" ? "text-white" : "text-secondary"
          }
          hover:text-white hover:underline hover:underline-offset-8 text-[18px] font-medium cursor-pointer hover:decoration-2 
              `}onClick={() => setActive(nav.title)}>
                <a href="https://github.com/Intummadee/" target="_blank">Github</a>
          </li>
        </ul>
        


        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />
          

          <div className={`${!toggle ? "hidden" : "flex"} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;