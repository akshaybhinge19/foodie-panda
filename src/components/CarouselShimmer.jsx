import React from 'react'

import item1 from '../../assets/logo.jpg'
import item2 from '../../assets/logo.jpg'
import item3 from '../../assets/logo.jpg'
import item4 from '../../assets/logo.jpg'
import item5 from '../../assets/logo.jpg'

const ScrollCarousel = () => {
  return (
    <>
        <div className='mb-96'>
            <div className="relative w-full p-16  overflowx-hidden">
                <div className="flex absolute left-0 animate-pulse 2s linear infinite">
                    <div className='flex w-96 h-[12rem] justify-around'>
                        <img src={item1} alt="" />
                        <img src={item2} alt="" />
                        <img src={item3} alt="" />
                        <img src={item4} alt="" />
                        <img src={item5} alt="" />
                    </div>
                    <div className='flex w-96 h-[12rem] justify-around'>
                        <img src={item1} alt="" />
                        <img src={item2} alt="" />
                        <img src={item3} alt="" />
                        <img src={item4} alt="" />
                        <img src={item5} alt="" />
                        <img src={item1} alt="" />
                        <img src={item2} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ScrollCarousel