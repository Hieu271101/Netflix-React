import React, { Fragment } from 'react'
import './index.css'
import { Route, Routes } from 'react-router-dom'
import { publicRoutes } from './route/publicRoute'
import { privateRoutes } from './route/privateRoute'
import { AdminTheme, ClientTheme } from './themes'
import ScrollToTop from './utils/ScrollToTop'

function App() {
  // const { webConfigs } = useAppSelector((state) => state.WebConfigReducer)
  // const isMaintain = webConfigs[0].isMaintaince

  return (
    <>
      <Routes>
        {publicRoutes.map((route, index) => {
          const Page = route.component
          let Layout = ClientTheme

          if (route.layout) {
            Layout = route.layout
          } else if (route.layout === null) {
            Layout = Fragment
          }
          return (
            <Route
              key={index}
              path={route.path}
              element={
                // <Maintain isMaintain={isMaintain}>
                <Layout>
                  <Page />
                </Layout>
                // </Maintain>
              }
            />
          )
        })}
        {privateRoutes.map((route, index) => {
          const Page = route.component
          let Layout = AdminTheme

          if (route.layout) {
            Layout = route.layout
          } else if (route.layout === null) {
            Layout = Fragment
          }

          return (
            <Route
              key={index}
              path={route.path}
              element={
                // <PrivateRoute acceptRole={1}>
                <Layout>
                  <Page />
                </Layout>
                // </PrivateRoute>
              }
            />
          )
        })}
      </Routes>
      <ScrollToTop />
    </>
  )
}

export default App
