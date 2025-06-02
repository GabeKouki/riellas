import React from 'react'
import { useParams } from 'react-router-dom'


const Menu = () => {
  const { menu } = useParams()

  console.log(menu)
  return (
    <>
      hi
    </>
  )
}

export default Menu