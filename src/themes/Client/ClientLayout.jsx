import React from 'react'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import Navbar from './Header/Navbar'

ClientLayout.propTypes = {
  children: PropTypes.any.isRequired,
}

function ClientLayout({ children }) {
  const [offsetTop, setOffsetTop] = useState(0)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setOffsetTop(window.scrollY)
    })
  }, [])
  return (
    // <div className="bg-[#151f32] min-h-screen">
    <div className=" min-h-screen">
      <div className="">
        <Navbar />
      </div>
      <main>{children}</main>
      {/* <Footer /> */}
    </div>
  )
}

export default ClientLayout
