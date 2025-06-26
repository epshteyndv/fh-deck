import './App.css'
import {Header} from "./Header.tsx";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <>
        <Header/>
        <div className={"container"} style={{"marginTop": "64px"}}>
          <Outlet/>
        </div>
    </>
  )
}

export default MainLayout
