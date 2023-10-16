import configRoute from './configRoute'
// import { AuthTheme } from '../themes'
import Billboard from '../components/Billboard'
import ManageMoviePage from '../pages/admin/Movie/ManageMoviePage'
import CreateMovie from '../pages/admin/Movie/CreateMovie'

export const privateRoutes = [
  { path: configRoute.routes.dashboard, component: Billboard },
  { path: configRoute.routes.manageMovie, component: ManageMoviePage },
  { path: configRoute.routes.createMovie, component: CreateMovie },

  //   { path: configRoute.routes.adminUserList, component: UserTab },
  //   { path: configRoute.routes.adminUserAdd, component: UserCreate },
  //   { path: configRoute.routes.adminUserUpdate, component: UserEdit },

  //   { path: configRoute.routes.adminMovieTypeEdit, component: EditMovieType },
  //   { path: configRoute.routes.adminMovieTypeAdd, component: CreateMovieType },
  //   { path: configRoute.routes.adminMovieType, component: ListMovieType },

  //   { path: configRoute.routes.adminFood, component: FoodList },
  //   { path: configRoute.routes.adminFoodCreate, component: CreateFood },
  //   { path: configRoute.routes.adminFoodUpdate, component: UpdateFood },

  //   { path: configRoute.routes.adminSlider, component: AdminSlider },
  //   { path: configRoute.routes.adminSliderCreate, component: CreateSlider },
  //   { path: configRoute.routes.adminSliderUpdate, component: UpdateSlider },

  //   { path: configRoute.routes.adminSeatType, component: ListSeatType },
  //   { path: configRoute.routes.adminSeatTypeAdd, component: CeateSeatType },
  //   { path: configRoute.routes.adminSeatTypeUpdate, component: UploadSeatType },

  //   { path: configRoute.routes.adminCategories, component: ListCategories },
  //   { path: configRoute.routes.adminCategoriesCreate, component: CreateCategory },
  //   { path: configRoute.routes.adminCategoryEdit, component: EditCategory },

  //   { path: configRoute.routes.adminMoviecCreat, component: CreateMovie },
  //   { path: configRoute.routes.adminMovie, component: MovieTab },
  //   { path: configRoute.routes.adminMoviecUpdate, component: UpdateMovies },

  //   { path: configRoute.routes.adminRooms, component: AdminRoomList },
  //   { path: configRoute.routes.adminRoomsCreate, component: AdminRoomCreate },
  //   { path: configRoute.routes.adminRoomEdit, component: AdminRoomEdit },

  //   { path: configRoute.routes.AdminShowTimes, component: NestedTable },
  //   {
  //     path: configRoute.routes.AdminShowTimesCreate,
  //     component: AdminShowTimesCreate,
  //   },
  //   { path: configRoute.routes.showTimeByRoom, component: ListShowTimeByRoom },

  //   { path: configRoute.routes.AdminFilmFormat, component: FilmFormatList },

  //   { path: configRoute.routes.AdminVouchers, component: AdminVoucherList },
  //   {
  //     path: configRoute.routes.AdminVouchersCreate,
  //     component: AdminVoucherCreate,
  //   },
  //   { path: configRoute.routes.AdminVouchersEdit, component: AdminVoucherEdit },

  //   { path: configRoute.routes.AdminPosts, component: AdminPosts },
  //   { path: configRoute.routes.AdminPostsCreate, component: AdminPostsCreate },
  //   { path: configRoute.routes.AdminPostsEdit, component: AdminPostsEdit },

  //   { path: configRoute.routes.webConfig, component: WebConfig },
  //   { path: configRoute.routes.webConfigAdd, component: WebConfigCreate },
  //   { path: configRoute.routes.webConfigEdit, component: WebConfigEdit },
  //   { path: configRoute.routes.AdminSeatByRoom, component: SeatByRoom },
  //   { path: configRoute.routes.adminOrders, component: OrderTab },
  //   { path: configRoute.routes.adminOrdersDetail, component: AdminOrdersDetail },
  //   {
  //     path: configRoute.routes.adminListCommentMovie,
  //     component: ListCommentMovie,
  //   },
]
