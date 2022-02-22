import Point from '../src/components/Point/Point'
import React, { useState, useEffect } from 'react'
import { getMaterials } from '../src/services'
import { getPoints } from '../src/components/Point/Point.service'
import '@splidejs/splide/dist/css/splide.min.css'
import PointNav from '../src/components/PointNav'

export default function Home () {
  const [points, setPoints] = useState([])
  const [materialsNav, setMaterialsNav] = useState(null)
  const [currentNav, setCurrentNav] = useState(null)
  const [currentImage, setCurrentImage] = useState('')
  

  const consumePoints = async () => {
    const apiData = await getPoints()
    setPoints(apiData)
    // console.log(apiData)
  }

  const consumeMaterials = async () => {
    const apiData = await getMaterials()
    setMaterialsNav(apiData)
    // console.log(apiData)
  }


  useEffect(() => {
    consumePoints()
    consumeMaterials()
    setCurrentImage('')
  }, [])

  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2 '>
      <div className='relative'>
        <img src='/assets/base.png' />
        <img src={currentImage} />

        
        {points && points.length > 0 ? points.map((pointData, i) => 
          
          <button type="button"  key={i} onClick={() => setCurrentNav(materialsNav[i].materials)} ><Point point={pointData} /></button>
        
        ) : null}

        

          { 
            currentNav !== null ?  <PointNav handleClick={(target) => setCurrentImage(materialsNav[i].materials) } items={currentNav} /> : ''
          }

      </div>
    </div>
  )
}
