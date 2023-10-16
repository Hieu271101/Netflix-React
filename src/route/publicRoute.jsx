import configRoute from './configRoute'
// import { AuthTheme } from '../themes/index'
import NotFoundPage from '../pages/NotFound/NotFoundPage'
import Home from '../pages/client/Home'

export const publicRoutes = [
  //   { path: configRoute.routes.signin, component: SignIn, layout: AuthTheme },
  //   { path: configRoute.routes.signup, component: SignUp, layout: AuthTheme },

  { path: configRoute.routes.home, component: Home },

  { path: '*', component: NotFoundPage, layout: null },
]
