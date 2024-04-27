import { Outlet } from 'react-router-dom'
import { Header } from '../../components/header'

export function DefaultLayout() {
  return (
    <div className="grid grid-rows-[208px_88px_1fr] place-items-center font-nunito leading-relaxed">
      <Header className="col-start-1 row-start-1 row-end-3" />
      <div className="col-start-1 row-start-2 row-end-4 h-[300px] w-screen max-w-[54rem]">
        <Outlet />
      </div>
    </div>
  )
}
