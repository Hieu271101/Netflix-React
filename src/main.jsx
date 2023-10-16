import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import store from './redux/store.jsx'
// import Profile from './pages/Profile/profile.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/watch/:movieId" element={<Watch />} />
        <Route path="/admin/" element={<AdminLayout />} />
      </Routes> */}
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
