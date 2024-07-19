import { Outlet } from "react-router-dom"
import Menu from "./layout/Menu.jsx";
import Header from "./layout/Header.jsx";
import Footer from "./layout/Footer.jsx";

export default function Dashboard(){
    return(
        <div className="layout-wrapper layout-content-navbar">
            <div className="layout-container">
                {/**<!-- Menu -->**/}
                <Menu />
                {/**<!-- / Menu -->**/}
                {/**<!-- Layout page -->**/}
                <div className="layout-page">
                    {/**<!-- Header -->**/}
                    <Header />
                    {/**<!-- / Header -->**/}
                    {/**<!-- Content wrapper-->**/}
                    <div className="content-wrapper">
                        {/**<!-- Content-->**/}
                        <div className="container-xxl flex-grow-1 container-p-y">
                            <Outlet />
                        </div>
                        {/**<!-- / Content-->**/}
                        {/**<!-- Footer-->**/}
                        <Footer />
                        {/**<!-- / Footer-->**/}
                        <div className="content-backdrop fade"></div>
                    </div>
                    {/**<!-- / Content wrapper-->**/}
                </div>
                {/**<!-- / Layout page -->**/}
            </div>
            {/**<!-- Overlay -->**/}
            <div className="layout-overlay layout-menu-toggle" />
            
            {/**<!-- Drag Target Area To SlideIn Menu On Small Screens -->**/}
            <div className="drag-target" />
        </div>
            
    )
}
