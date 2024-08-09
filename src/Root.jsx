import Header from './Components/Header/header'
import Footer from './Components/Footer/footer'
import { Outlet } from 'react-router-dom'

export default function Root() {

  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}



