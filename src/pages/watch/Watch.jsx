import React from 'react'
import PropTypes from 'prop-types'
import { ArrowLeftIcon } from '@heroicons/react/24/solid'
import useBillboard from '../../hooks/useBillboard'
import { useMatch, useNavigate, useParams } from 'react-router-dom'
import useWatchDetail from './hooks/useWatchDetail'

Watch.propTypes = {}

function Watch(props) {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate(`/`)
  }
  const { movieId } = useParams()
  const { data, error, loading } = useWatchDetail(movieId)

  return (
    <div className="h-screen w-screen bg-black">
      <nav className="fixed w-full p-4 z-10 flex flex-row items-center gap-8 bg-black bg-opacity-70">
        <ArrowLeftIcon
          onClick={handleClick}
          className="w-4 md:w-10 text-white cursor-pointer hover:opacity-80 transition"
        />
        <p className="text-white text-1xl md:text-3xl font-bold">
          <span className="font-light">Watching:</span> {data?.title}
        </p>
      </nav>
      <video
        className="h-full w-full"
        autoPlay
        controls
        src={data?.videoUrl}
      ></video>
    </div>
    // <div>
    //   {data.map((item) => (
    //     <div key={item.id} className="h-screen w-screen bg-black">
    //       <nav className="fixed w-full p-4 z-10 flex flex-row items-center gap-8 bg-black bg-opacity-70">
    //         <ArrowLeftIcon
    //           onClick={handleClick}
    //           className="w-4 md:w-10 text-white cursor-pointer hover:opacity-80 transition"
    //         />
    //         <p className="text-white text-1xl md:text-3xl font-bold">
    //           <span className="font-light">Watching:</span> {item?.title}
    //         </p>
    //       </nav>
    //       <video
    //         className="h-full w-full"
    //         autoPlay
    //         controls
    //         src={item?.videoUrl}
    //       ></video>
    //     </div>
    //   ))}
    // </div>
  )
}

export default Watch
// const data = {
//   id: '1',
//   title: 'Movie 1',
//   description: 'Description of Movie 1',
//   thumbnailUrl:
//     'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-movie-poster-template-design-0f5fff6262fdefb855e3a9a3f0fdd361_screen.jpg?ts=1636996054',
//   videoUrl:
//     'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
//   duration: '1h 30min',
//   genre: 'Action',
// }
