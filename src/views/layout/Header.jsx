/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Cookies from 'universal-cookie';
// import img_avatar1 from './../../../public/assets/img/avatars/1.png';
import img_avatar1 from './../../img/1.png';
// import img_avatar2 from './assets/img/avatars/2.png';
import img_avatar2 from './../../img/1.png';
//import img_avatar5 from '../assets/img/avatars/5.png';
//import img_avatar6 from '../assets/img/avatars/6.png';
//import img_avatar9 from '../assets/img/avatars/9.png';


export default function Header() {
  const cookies = new Cookies();

   const dtUser_tipoUsu = cookies.get('dtUser_tipoUsu');
   const dtUser_nombre = cookies.get('dtUser_nombre');
   const dtUser_sexo = cookies.get('dtUser_sexo');

  const onClickCerrarSession = (event) => {
    event.preventDefault();
    cookies.set('CookieSession', 'False');
    cookies.remove('ultimapag');
    cookies.remove('dtUser_tipoUsu')
    cookies.remove('dtUser_nombre')
    cookies.remove('dtUser_sexo')
    cookies.remove('dtUser')
    //sessionStorage.getItem("user_logueado")
    sessionStorage.removeItem("user_logueado")
    sessionStorage.clear()
    //alert(deds)
    window.location.href = "/login"
  }
  const handleClick = (event) => {
    event.preventDefault();
  }

  return (
      <nav className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme" id="layout-navbar">
        <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0   d-xl-none ">
          <a className="nav-item nav-link px-0 me-xl-4" href="#" onClick={handleClick}>
            <i className="bx bx-menu bx-sm" />
          </a>
        </div>
        <div className="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
          {/* Search */}
          <div className="navbar-nav align-items-center">
            <div className="nav-item navbar-search-wrapper mb-0">
              <a className="nav-item nav-link search-toggler px-0" href="#" onClick={handleClick} >
                <i className="bx bx-search bx-sm" />
                <span className="d-none d-md-inline-block text-muted">Search (Ctrl+/)</span>
              </a>
            </div>
          </div>
          {/* /Search */}
          <ul className="navbar-nav flex-row align-items-center ms-auto">
            {/* Language
            <li className="nav-item dropdown-language dropdown me-2 me-xl-0">
              <a className="nav-link dropdown-toggle hide-arrow" href="javascript:void(0);" data-bs-toggle="dropdown">
                <i className="fi fi-us fis rounded-circle fs-3 me-1" />
              </a>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <a className="dropdown-item" href="javascript:void(0);" data-language="en">
                    <i className="fi fi-us fis rounded-circle fs-4 me-1" />
                    <span className="align-middle">English</span>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="javascript:void(0);" data-language="fr">
                    <i className="fi fi-fr fis rounded-circle fs-4 me-1" />
                    <span className="align-middle">France</span>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="javascript:void(0);" data-language="de">
                    <i className="fi fi-de fis rounded-circle fs-4 me-1" />
                    <span className="align-middle">German</span>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="javascript:void(0);" data-language="pt">
                    <i className="fi fi-pt fis rounded-circle fs-4 me-1" />
                    <span className="align-middle">Portuguese</span>
                  </a>
                </li>
              </ul>
            </li>
            {/* Language */}
            {/* Style Switcher */}
            <li className="nav-item me-2 me-xl-0">
              <a className="nav-link style-switcher-toggle hide-arrow" href="#" onClick={handleClick}>
                <i className="bx bx-sm" />
              </a>
            </li>
            {/*/ Style Switcher */}
            {/* Quick links 
              <li className="nav-item dropdown-shortcuts navbar-dropdown dropdown me-2 me-xl-0">
                <a className="nav-link dropdown-toggle hide-arrow" href="javascript:void(0);" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                  <i className="bx bx-grid-alt bx-sm" />
                </a>
                <div className="dropdown-menu dropdown-menu-end py-0">
                  <div className="dropdown-menu-header border-bottom">
                    <div className="dropdown-header d-flex align-items-center py-3">
                      <h5 className="text-body mb-0 me-auto">Shortcuts</h5>
                      <a href="javascript:void(0)" className="dropdown-shortcuts-add text-body" data-bs-toggle="tooltip" data-bs-placement="top" title="Add shortcuts"><i className="bx bx-sm bx-plus-circle" /></a>
                    </div>
                  </div>
                  <div className="dropdown-shortcuts-list scrollable-container">
                    <div className="row row-bordered overflow-visible g-0">
                      <div className="dropdown-shortcuts-item col">
                        <span className="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
                          <i className="bx bx-calendar fs-4" />
                        </span>
                        <a href="app-calendar.html" className="stretched-link">Calendar</a>
                        <small className="text-muted mb-0">Appointments</small>
                      </div>
                      <div className="dropdown-shortcuts-item col">
                        <span className="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
                          <i className="bx bx-food-menu fs-4" />
                        </span>
                        <a href="app-invoice-list.html" className="stretched-link">Invoice App</a>
                        <small className="text-muted mb-0">Manage Accounts</small>
                      </div>
                    </div>
                    <div className="row row-bordered overflow-visible g-0">
                      <div className="dropdown-shortcuts-item col">
                        <span className="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
                          <i className="bx bx-user fs-4" />
                        </span>
                        <a href="app-user-list.html" className="stretched-link">User App</a>
                        <small className="text-muted mb-0">Manage Users</small>
                      </div>
                      <div className="dropdown-shortcuts-item col">
                        <span className="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
                          <i className="bx bx-check-shield fs-4" />
                        </span>
                        <a href="app-access-roles.html" className="stretched-link">Role Management</a>
                        <small className="text-muted mb-0">Permission</small>
                      </div>
                    </div>
                    <div className="row row-bordered overflow-visible g-0">
                      <div className="dropdown-shortcuts-item col">
                        <span className="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
                          <i className="bx bx-pie-chart-alt-2 fs-4" />
                        </span>
                        <a href="index.html" className="stretched-link">Dashboard</a>
                        <small className="text-muted mb-0">User Profile</small>
                      </div>
                      <div className="dropdown-shortcuts-item col">
                        <span className="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
                          <i className="bx bx-cog fs-4" />
                        </span>
                        <a href="pages-account-settings-account.html" className="stretched-link">Setting</a>
                        <small className="text-muted mb-0">Account Settings</small>
                      </div>
                    </div>
                    <div className="row row-bordered overflow-visible g-0">
                      <div className="dropdown-shortcuts-item col">
                        <span className="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
                          <i className="bx bx-help-circle fs-4" />
                        </span>
                        <a href="pages-help-center-landing.html" className="stretched-link">Help Center</a>
                        <small className="text-muted mb-0">FAQs &amp; Articles</small>
                      </div>
                      <div className="dropdown-shortcuts-item col">
                        <span className="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
                          <i className="bx bx-window-open fs-4" />
                        </span>
                        <a href="modal-examples.html" className="stretched-link">Modals</a>
                        <small className="text-muted mb-0">Useful Popups</small>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            {/* Quick links  */}
            {/* Notification 
            <li className="nav-item dropdown-notifications navbar-dropdown dropdown me-3 me-xl-1">
              <a className="nav-link dropdown-toggle hide-arrow" href="javascript:void(0);" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                <i className="bx bx-bell bx-sm" />
                <span className="badge bg-danger rounded-pill badge-notifications">5</span>
              </a>
              <ul className="dropdown-menu dropdown-menu-end py-0">
                <li className="dropdown-menu-header border-bottom">
                  <div className="dropdown-header d-flex align-items-center py-3">
                    <h5 className="text-body mb-0 me-auto">Notification</h5>
                    <a href="javascript:void(0)" className="dropdown-notifications-all text-body" data-bs-toggle="tooltip" data-bs-placement="top" title="Mark all as read"><i className="bx fs-4 bx-envelope-open" /></a>
                  </div>
                </li>
                <li className="dropdown-notifications-list scrollable-container">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item list-group-item-action dropdown-notifications-item">
                      <div className="d-flex">
                        <div className="flex-shrink-0 me-3">
                          <div className="avatar">
                            <img src="assets/img/avatars/1.png" alt="ab" className="w-px-40 h-auto rounded-circle" />
                          </div>
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="mb-1">Congratulation Lettie 🎉</h6>
                          <p className="mb-0">Won the monthly best seller gold badge</p>
                          <small className="text-muted">1h ago</small>
                        </div>
                        <div className="flex-shrink-0 dropdown-notifications-actions">
                          <a href="javascript:void(0)" className="dropdown-notifications-read"><span className="badge badge-dot" /></a>
                          <a href="javascript:void(0)" className="dropdown-notifications-archive"><span className="bx bx-x" /></a>
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item list-group-item-action dropdown-notifications-item">
                      <div className="d-flex">
                        <div className="flex-shrink-0 me-3">
                          <div className="avatar">
                            <span className="avatar-initial rounded-circle bg-label-danger">CF</span>
                          </div>
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="mb-1">Charles Franklin</h6>
                          <p className="mb-0">Accepted your connection</p>
                          <small className="text-muted">12hr ago</small>
                        </div>
                        <div className="flex-shrink-0 dropdown-notifications-actions">
                          <a href="javascript:void(0)" className="dropdown-notifications-read"><span className="badge badge-dot" /></a>
                          <a href="javascript:void(0)" className="dropdown-notifications-archive"><span className="bx bx-x" /></a>
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                      <div className="d-flex">
                        <div className="flex-shrink-0 me-3">
                          <div className="avatar">
                            <img src={img_avatar2} alt="ab" className="w-px-40 h-auto rounded-circle" />
                          </div>
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="mb-1">New Message ✉️</h6>
                          <p className="mb-0">You have new message from Natalie</p>
                          <small className="text-muted">1h ago</small>
                        </div>
                        <div className="flex-shrink-0 dropdown-notifications-actions">
                          <a href="javascript:void(0)" className="dropdown-notifications-read"><span className="badge badge-dot" /></a>
                          <a href="javascript:void(0)" className="dropdown-notifications-archive"><span className="bx bx-x" /></a>
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item list-group-item-action dropdown-notifications-item">
                      <div className="d-flex">
                        <div className="flex-shrink-0 me-3">
                          <div className="avatar">
                            <span className="avatar-initial rounded-circle bg-label-success"><i className="bx bx-cart" /></span>
                          </div>
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="mb-1">Whoo! You have new order 🛒 </h6>
                          <p className="mb-0">ACME Inc. made new order $1,154</p>
                          <small className="text-muted">1 day ago</small>
                        </div>
                        <div className="flex-shrink-0 dropdown-notifications-actions">
                          <a href="javascript:void(0)" className="dropdown-notifications-read"><span className="badge badge-dot" /></a>
                          <a href="javascript:void(0)" className="dropdown-notifications-archive"><span className="bx bx-x" /></a>
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                      <div className="d-flex">
                        <div className="flex-shrink-0 me-3">
                          <div className="avatar">
                            <img src={img_avatar9} alt="ab" className="w-px-40 h-auto rounded-circle" />
                          </div>
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="mb-1">Application has been approved 🚀 </h6>
                          <p className="mb-0">Your ABC project application has been approved.</p>
                          <small className="text-muted">2 days ago</small>
                        </div>
                        <div className="flex-shrink-0 dropdown-notifications-actions">
                          <a href="javascript:void(0)" className="dropdown-notifications-read"><span className="badge badge-dot" /></a>
                          <a href="javascript:void(0)" className="dropdown-notifications-archive"><span className="bx bx-x" /></a>
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                      <div className="d-flex">
                        <div className="flex-shrink-0 me-3">
                          <div className="avatar">
                            <span className="avatar-initial rounded-circle bg-label-success"><i className="bx bx-pie-chart-alt" /></span>
                          </div>
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="mb-1">Monthly report is generated</h6>
                          <p className="mb-0">July monthly financial report is generated </p>
                          <small className="text-muted">3 days ago</small>
                        </div>
                        <div className="flex-shrink-0 dropdown-notifications-actions">
                          <a href="javascript:void(0)" className="dropdown-notifications-read"><span className="badge badge-dot" /></a>
                          <a href="javascript:void(0)" className="dropdown-notifications-archive"><span className="bx bx-x" /></a>
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                      <div className="d-flex">
                        <div className="flex-shrink-0 me-3">
                          <div className="avatar">
                            <img src={img_avatar5} alt="ab" className="w-px-40 h-auto rounded-circle" />
                          </div>
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="mb-1">Send connection request</h6>
                          <p className="mb-0">Peter sent you connection request</p>
                          <small className="text-muted">4 days ago</small>
                        </div>
                        <div className="flex-shrink-0 dropdown-notifications-actions">
                          <a href="javascript:void(0)" className="dropdown-notifications-read"><span className="badge badge-dot" /></a>
                          <a href="javascript:void(0)" className="dropdown-notifications-archive"><span className="bx bx-x" /></a>
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item list-group-item-action dropdown-notifications-item">
                      <div className="d-flex">
                        <div className="flex-shrink-0 me-3">
                          <div className="avatar">
                            <img src={img_avatar6} alt="ab" className="w-px-40 h-auto rounded-circle" />
                          </div>
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="mb-1">New message from Jane</h6>
                          <p className="mb-0">Your have new message from Jane</p>
                          <small className="text-muted">5 days ago</small>
                        </div>
                        <div className="flex-shrink-0 dropdown-notifications-actions">
                          <a href="javascript:void(0)" className="dropdown-notifications-read"><span className="badge badge-dot" /></a>
                          <a href="javascript:void(0)" className="dropdown-notifications-archive"><span className="bx bx-x" /></a>
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                      <div className="d-flex">
                        <div className="flex-shrink-0 me-3">
                          <div className="avatar">
                            <span className="avatar-initial rounded-circle bg-label-warning"><i className="bx bx-error" /></span>
                          </div>
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="mb-1">CPU is running high</h6>
                          <p className="mb-0">CPU Utilization Percent is currently at 88.63%,</p>
                          <small className="text-muted">5 days ago</small>
                        </div>
                        <div className="flex-shrink-0 dropdown-notifications-actions">
                          <a href="javascript:void(0)" className="dropdown-notifications-read"><span className="badge badge-dot" /></a>
                          <a href="javascript:void(0)" className="dropdown-notifications-archive"><span className="bx bx-x" /></a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
                <li className="dropdown-menu-footer border-top">
                  <a href="javascript:void(0);" className="dropdown-item d-flex justify-content-center p-3">
                    View all notifications
                  </a>
                </li>
              </ul>
            </li>
            {/* Notification */}
            {/* User */}
            <li className="nav-item navbar-dropdown dropdown-user dropdown">
              <a className="nav-link dropdown-toggle hide-arrow" href="#" onClick={handleClick} data-bs-toggle="dropdown">
                <div className="avatar avatar-online">
                  <img src={dtUser_sexo === "M" ? img_avatar1 : img_avatar2} alt="ab" className="w-px-40 h-auto rounded-circle" />
                </div>
              </a>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <a className="dropdown-item" href="#">
                    <div className="d-flex">
                      <div className="flex-shrink-0 me-3">
                        <div className="avatar avatar-online">
                          <img src={dtUser_sexo === "M" ? img_avatar1 : img_avatar2} alt="ab" className="w-px-40 h-auto rounded-circle" />
                        </div>
                      </div>
                      <div className="flex-grow-1">
                        <span className="fw-semibold d-block">{dtUser_nombre}</span>
                        <small className="text-muted">{dtUser_tipoUsu}</small>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <div className="dropdown-divider" />
                </li>
                {/*<li>
                  <a className="dropdown-item" href="#">
                    <i className="bx bx-user me-2" />
                    <span className="align-middle">My Profile</span>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="bx bx-cog me-2" />
                    <span className="align-middle">Settings</span>
                  </a>
                </li>
                <li>
                  <div className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="bx bx-support me-2" />
                    <span className="align-middle">Help</span>
                  </a>
                </li>
                <li>
                  <div className="dropdown-divider" />
                </li>*/}
                <li>
                  <a className="dropdown-item" href="#" onClick={onClickCerrarSession}>
                    <i className="bx bx-power-off me-2" />
                    <span className="align-middle">Cerrar Sessión</span>
                  </a>
                </li>
              </ul>
            </li>
            {/*/ User */}
          </ul>
        </div>
        {/* Search Small Screens */}
        <div className="navbar-search-wrapper search-input-wrapper  d-none">
          <input type="text" className="form-control search-input container-xxl border-0" placeholder="Search..." aria-label="Search..." />
          <i className="bx bx-x bx-sm search-toggler cursor-pointer" />
        </div>
      </nav>
  )
}

//export default Header;