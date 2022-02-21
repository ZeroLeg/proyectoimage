import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'

function PointNav ({ items }) {
   //console.log(items);
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
          <SplideSlide key={i} className='navItem'>
            <span className='navItem__name'>{item.name}</span>
            <div className='img__container'>
              <img src={item.thumbnail} />
            </div>
          </SplideSlide>
          )
        : null}
    </Splide>

  )
}

export default PointNav
