import React from 'react'
import PropTypes from 'prop-types'
import { Button, Form, message } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import MovieForm from '../../../components/admin/FormAndTable/MovieForm'

import { useState } from 'react'
import MovieApi from '../../../api/movieApi'
import { useDispatch } from 'react-redux'
import { createMovie } from '../../../redux/slice/movie'

// import { useAppDispatch } from '../../../redux/hook'
// import { createMovie } from '../../../redux/slice/Movie'
// import { Link, useNavigate } from 'react-router-dom'
// import configRoute from '../../../config'
// import moment from 'moment'
// import MovieForm from '../../../components/admin/Form&Table/MovieForm'

CreateMovie.propTypes = {
  form: PropTypes.any,
  onFinish: PropTypes.any,
  image: PropTypes.any,
  // setImage: PropTypes.any,
  // onReset: PropTypes.any,
}

function CreateMovie({}) {
  const [image, setImage] = useState([])
  const [form] = Form.useForm()

  // const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const onFinish = async (values) => {
    console.log(values)
    const action = createMovie(values)
    const result = await dispatch(action)

    // Access meta and payload from the dispatched action result
    const { meta, payload } = result
    if (meta.requestStatus == 'fulfilled') {
      message.success('Thêm thành công')
      // navigate(configRoute.routes.adminMovie)
      console.log('thanh cong')
    } else {
      message.error(`${payload}`)
    }
    // values.releaseDate = new Date(moment(values.releaseDate).format())
    // values.image = values.avatarList?.fileList
    // delete values?.avatarList
    // const { meta, payload } = await dispatch(createMovie(values))
    // if (meta.requestStatus == 'fulfilled') {
    //   message.success('Thêm thành công')
    //   navigate(configRoute.routes.adminMovie)
    // } else {
    //   message.error(`${payload}`)
    // }
  }

  const onReset = () => {
    form.resetFields()
    setImage([])
  }
  return (
    <>
      <Button
        className="bg-blue-500"
        type="alert"
        style={{ marginBottom: '20px' }}
      >
        <Link to="/admin/movies">DS phim</Link>
      </Button>
      <MovieForm
        image={image}
        setImage={setImage}
        form={form}
        onFinish={onFinish}
        onReset={onReset}
      />
    </>
  )
}

export default CreateMovie
