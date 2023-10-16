import React from 'react'
import PropTypes from 'prop-types'
// import { useHistory } from 'react-router-dom'
import { PlayIcon } from '@heroicons/react/24/solid'
import { useNavigate } from 'react-router-dom'
PlayButton.propTypes = {
  movieId: PropTypes.string,
}

function PlayButton({ movieId }) {
  // const router = useHistory()
  const navigate = useNavigate()
  const handleClick = () => {
    navigate(`/watch/${movieId}`)
  }
  return (
    <button
      // onClick={() => router.push(`/watch/${movieId}`)}
      onClick={handleClick}
      className="
     bg-white
     rounded-md
     py-1 md:py-2
     px-2 md:px-4
     w-auto
     text-xs lg:text-lg
     font-semibold
     flex
     flex-row
     items-center
     hover:bg-neutral-300
     transition
      
      "
    >
      <PlayIcon className="w-4 md:w-7 text-black mr-1" />
      Play
    </button>
  )
}

export default PlayButton
