import React from "react";
import Category from "../category/Category";
import Link from "next/link";
import BackgroundImg from '../../common/images/bg_1.jpg';

let style = {
  'background': `url(${BackgroundImg.src})`,
  'backgroundRepeat': 'no-repeat',
  'backgroundPosition': 'top'
}

const Cards = () => {
  return (
    <>
      <div style={style} className="rounded-md md:hover:h-[95%] py-5 px-2">
        <Category />
        <Link href={"#"} className="block mt-4">
          <h5 className="text-lg font-normal">Popular Lifestyle with Fashion & Modeling</h5>
        </Link>
      </div>
    </>
  );
};

export default Cards;
