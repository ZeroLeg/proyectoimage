import React, { useState, useEffect } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'

function PointNav ({ items }) {
   //console.log(items);
  const [currentItem, setCurrentItem] = useState(false)

  const handleClick = () => {
    setCurrentItem(true);
  } 
  return (
    <Splide
      className='pointNav'
      options={{
        direction: 'ttb',
        height: '70%',
        perPage: 3,
        gap: '1rem', 
        pagination: false
      }}
    >
      {items && items.length > 0
        ? items.map((item, i) =>
          <SplideSlide key={i} >
            <button id={item.id} type="button" className={currentItem ? 'navItem active': 'navItem'} onClick={handleClick} >
              <span className='navItem__name'>{item.name}</span>
              <div className='img__container'>
                <img src={item.thumbnail} />
              </div>
            </button>
          </SplideSlide>
          )
        : null}
    </Splide>

  )
}

export default PointNav
