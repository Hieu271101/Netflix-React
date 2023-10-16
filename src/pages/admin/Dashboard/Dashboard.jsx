import React from 'react'
import PropTypes from 'prop-types'

Dashboard.propTypes = {}

function Dashboard(props) {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
        <div className="flex items-center p-3 justify-center bg-white rounded-md text-[#b5b5c3]">
          {/* <RiUserLine className="w-10 h-10 px-1" /> */}
          <div className="text-center bg-red-700 text-white w-full rounded-md">
            <div className="py-3">
              <span className="block font-semibold">
                {dashboard.length == 0
                  ? formatCurrency(dashboard?.dayProfit[0]?.dayTotal)
                  : ''}
              </span>
              <span className="text-sm font-semibold">
                Doanh thu ngày hôm nay
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center p-3 justify-center bg-white rounded-md text-[#b5b5c3]">
          {/* <RiMovie2Fill className="w-10 h-10 px-1" /> */}
          <div className="text-center w-full bg-yellow-700 text-white rounded-md">
            <div className="py-3">
              <span className="block font-semibold">
                {dashboard.length !== 0
                  ? formatCurrency(dashboard?.monthProfit[0]?.mothTotal)
                  : ''}
              </span>
              <span className="text-sm font-semibold">Doanh thu tháng này</span>
            </div>
          </div>
        </div>
        <div className="flex items-center p-3 justify-center bg-white rounded-md text-[#b5b5c3]">
          {/* <RiUserLine className="w-10 h-10 px-1" /> */}
          <div className="text-center w-full bg-green-700 text-white rounded-md">
            <div className="py-3">
              <span className="block font-semibold">
                {dashboard.length !== 0
                  ? formatCurrency(dashboard?.yearProfit[0]?.yearTotal)
                  : ''}
              </span>
              <span className="text-sm font-semibold">Doanh thu năm nay</span>
            </div>
          </div>
        </div>
        <div className="flex items-center p-3 justify-center bg-white rounded-md text-[#b5b5c3]">
          <div className="text-center w-full bg-blue-700 text-white  rounded-md">
            {/* <FaMoneyCheckAlt size={30} /> */}
            <div className="py-3">
              <span className="block font-semibold">{totalPost}</span>
              <span className="text-sm font-semibold">Tổng đơn đặt hàng</span>
            </div>
          </div>
        </div>
      </div>
      <div className="my-10 ml-8">
        <button
          onClick={() => onToggle(1)}
          className={
            active == 1
              ? 'px-1 bg-green-600 text-white h-[50px] mx-2 rounded'
              : 'px-1 border border-green-600 text-green-600 h-[50px] mx-2 rounded'
          }
        >
          Doanh thu của rạp theo tháng
        </button>
        <button
          onClick={() => onToggle(2)}
          className={
            active == 2
              ? 'px-1 bg-green-600 text-white h-[50px] mx-2 rounded'
              : 'px-1 border border-green-600 text-green-600 h-[50px] mx-2 rounded'
          }
        >
          Doanh thu của rạp theo năm
        </button>
        <button
          onClick={() => onToggle(3)}
          className={
            active == 3
              ? 'px-1 bg-green-600 text-white h-[50px] mx-2 rounded'
              : 'px-1 border border-green-600 text-green-600 h-[50px] mx-2 rounded'
          }
        >
          Doanh thu phim
        </button>
        <button
          onClick={() => onToggle(4)}
          className={
            active == 4
              ? 'px-1 bg-green-600 text-white h-[50px] mx-2 rounded'
              : 'px-1 border border-green-600 text-green-600 h-[50px] mx-2 rounded'
          }
        >
          Doanh thu vé, đồ ăn của rạp
        </button>
        <button
          onClick={() => onToggle(5)}
          className={
            active == 5
              ? 'px-1 bg-green-600 text-white h-[50px] mx-2 rounded'
              : 'px-1 border border-green-600 text-green-600 h-[50px] mx-2 rounded'
          }
        >
          Doanh thu theo khoảng thời gian
        </button>
      </div>

      <div className={active == 1 ? '' : 'hidden'}>
        <MonthRevenue />
      </div>
      <div className={active == 2 ? '' : 'hidden'}>
        <YearRevenue />
      </div>
      <div className={active == 3 ? '' : 'hidden'}>
        <Topmovie />
      </div>
      <div className={active == 4 ? '' : 'hidden'}>
        <CripTicketFood />
      </div>
      <div className={active == 5 ? '' : 'hidden'}>
        <StatisticsOverTime />
      </div>
    </>
  )
}

export default Dashboard
