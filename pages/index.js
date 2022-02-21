import Point from '../src/components/Point'
import React, { useState, useEffect } from 'react'
import { getPoints, getMaterials } from '../src/services'
import '@splidejs/splide/dist/css/splide.min.css'
import PointNav from '../src/components/PointNav'

export default function Home () {
  const [points, setPoints] = useState([])

  const [materialsNav, setMaterialsNav] = useState([])

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
  }, [])

  // console.log(materialsNav)

  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2 '>
      <div className='relative'>
        <img src='/assets/base.png' />

        {points && points.length > 0 ? points.map((pointData, i) => <Point id={i} key={i} point={pointData} />) : null}

        {materialsNav && materialsNav.length > 0
          ? materialsNav.map((materialNav, i) =>
            <PointNav key={i} items={materialNav.materials} />
            )
          : null}

      </div>
    </div>
  )
}
