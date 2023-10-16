import { Button, Tabs } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
// import SearchByCate from '../../../components/admin/SearchByCate'
import configRoute from '../../../route/configRoute'
// import { MovieMutipleOption } from '../../../ultils/data'

ManageMoviePage.propTypes = {}

function ManageMoviePage(props) {
  return (
    <>
      <div className="flex gap-5">
        <Button type="primary" style={{ marginBottom: '20px' }}>
          <Link to="/admin/movies/create">Tạo Phim</Link>
        </Button>
        <Button>
          <Link to={configRoute.routes.adminMovieType}>
            Quản lí thể loại phim
          </Link>
        </Button>
      </div>
      {/* <SearchByCate
        data={movie}
        onFinish={onFinish}
        onReset={onReset}
        category={MovieMutipleOption}
      /> */}
      {/* {!hiddenEl ? (
        <Tabs
          defaultActiveKey="1"
          size={'small'}
          style={{ marginBottom: 32 }}
          items={items}
        />
      ) : (
        <Tabs
          defaultActiveKey="1"
          size={'small'}
          style={{ marginBottom: 32 }}
          items={SearchItems}
        />
      )} */}
    </>
  )
}

export default ManageMoviePage
