import Link from "next/link";
import React from "react";
import SearchImage from '../../common/images/search.svg';
import Image from "next/image";

const Navbar = () => {
  return (
    <>
    <nav>
      <div className="flex justify-between items-center py-4 px-8">
        <div className="logo w-64">
          <Link className="text-3xl font-[--heading-font]" href={'#'}>Byte Height</Link>
        </div>
        <div className="menu w-full">
          <ul className="flex text-left text-md">
            <li className="me-4"><Link className="p-2 hover:border-b-2 hover:text-[#FFB0B0] border-[#FFB0B0]" href={'#'}>Beauty</Link></li>
            <li className="me-4"><Link className="p-2 hover:border-b-2 hover:text-[#729762] border-[#729762]" href={'#'}>Lifestyle</Link></li>
            <li className="me-4"><Link className="p-2 hover:border-b-2 hover:text-[#FCDC94] border-[#FCDC94]" href={'#'}>Technology</Link></li>
            <li className="me-4"><Link className="p-2 hover:border-b-2 hover:text-[#E3F4F4] border-[#E3F4F4]" href={'#'}>Travel</Link></li>
            <li className=""><Link className="p-2 hover:border-b-2 hover:text-[#FEBE8C] border-[#FEBE8C]" href={'#'}>Worldwide</Link></li>
          </ul>
        </div>
        <div className="subscribe text-right">
          <ul className="flex items-center">
            <li><Image className="hover:cursor-pointer" src={SearchImage} width={60} height={60} alt="search-icon"/></li>
            <li className="ms-5"><Link className="px-6 py-2 font-bold rounded-3xl text-[--background] bg-[#FFDCA9] hover:bg-[#FEFCF3]" href={'#'}>Subscribe</Link></li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  );
};

export default Navbar;
