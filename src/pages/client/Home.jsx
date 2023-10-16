import React, { useEffect } from 'react'
import Billboard from '../../components/Billboard'
import MovieList from '../../components/MovieList'
import Navbar from '../../components/Navbar'

Home.propTypes = {}

function Home(props) {
  // const movies = useMovie()
  // console.log(typeof movies)
  const [movies, setMovies] = React.useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:9090/movie') // Replace with your API endpoint
        const jsonData = await response.json()
        setMovies(jsonData) // Store the retrieved data in the 'data' state variable
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  // const movies = [
  //   {
  //     id: '1',
  //     title: 'Movie 1',
  //     description: 'Description of Movie 1',
  //     thumbnailUrl:
  //       'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-movie-poster-template-design-0f5fff6262fdefb855e3a9a3f0fdd361_screen.jpg?ts=1636996054',
  //     videoUrl:
  //       'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
  //     duration: '1h 30min',
  //     genre: 'Action',
  //   },
  //   {
  //     id: '2',
  //     title: 'Movie 2',
  //     description: 'Description of Movie 2',
  //     thumbnailUrl:
  //       'https://e1.pngegg.com/pngimages/212/644/png-clipart-marvel-cinematic-universe-folder-icons-phase-one-theavengers-marvel-studios-the-avengers-folder-icon-thumbnail.png',
  //     videoUrl: 'https://example.com/movie2-video.mp4',
  //     duration: '1h 45min',
  //     genre: 'Comedy',
  //   },
  // ]
  // const { data: favorites = [] } = useFavorites();
  const favorites = [
    {
      id: '3',
      title: 'Movie 1',
      description: 'Description of Movie 1',
      thumbnailUrl:
        'https://phimmoiyyy.net/wp-content/uploads/2023/06/Nguoi-Nhen-Du-Hanh-Vu-Tru-Nhen-2023.jpg',
      videoUrl:
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      duration: '1h 30min',
      genre: 'Action',
    },
    {
      id: '4',
      title: 'Movie 2',
      description: 'Description of Movie 2',
      thumbnailUrl:
        'https://wirally.com/wp-content/uploads/2019/06/5-RRR-Trailer.jpg',
      videoUrl: 'https://example.com/movie2-video.mp4',
      duration: '1h 45min',
      genre: 'Comedy',
    },
  ]
  // const { isOpen, closeModal } = useInfoModalStore()
  return (
    <>
      {/* <InfoModal visible={isOpen} onClose={closeModal} /> */}
      <Navbar />
      <Billboard />
      <div className="pb-40">
        <MovieList title="Trending Now" data={movies} />
        <MovieList title="My List" data={favorites} />
      </div>
      {/* <Watch /> */}
      {/* <Test /> */}
    </>
  )
}

export default Home
