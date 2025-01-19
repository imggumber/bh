import React from 'react';
import Category from '../category/Category';
import Link from 'next/link';
import BackgroundImg from '../../common/images/bg_1.jpg';

let style = {
  'background': `url(${BackgroundImg.src})`,
  'backgroundRepeat': 'no-repeat',
  'backgroundPosition': 'top'
}


const Hero = () => {
  return (
    <>
    <div style={style} className="hero overflow-hidden w-full h-full md:hover:w-[99%] md:hover:h-[99%] rounded-md flex items-end">
      <div className="title__category p-4 pb-0">
        <div className="title">
          <Category />
          <Link href={'#'} className='mt-4 mb-32 block'>
            <h1>Popular Lifestyle with Fashion & Modeling</h1>
          </Link>
        </div>
      </div>
    </div>
    </>
  )
}

export default Hero