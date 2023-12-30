import React from 'react'

const Navbar = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header-main d-flex justify-content-between align-items-center">
                    <div className="header-logo">
                        <a href="index.html" style={{ textDecoration: 'none' }}><span>Microsoft </span> Institute</a>
                    </div>
                    <button className="header-hamburger-btn js-header-menu-toggler" type="button">
                        <span />
                    </button>
                    <div className="header-backdrop js-header-backdrop" />
                    <nav className="header-menu js-header-menu">
                        <button type="button" className="header-close-btn js-header-menu-toggler">
                            <i className="fas fa-times" />
                        </button>
                        <ul className="menu">
                            <li className="menu-item"><a href="index.html" style={{ textDecoration: 'none' }}>Home</a></li>
                            <li className="menu-item menu-item-has-children">
                                <a href="#" className="js-toggle-sub-menu" style={{ textDecoration: 'none' }}>Courses <i className="fas fa-chevron-down" /></a>
                                <ul className="sub-menu js-sub-menu">
                                    <li className="sub-menu-item"><a href="courses.html" style={{ textDecoration: 'none' }}>Course</a></li>
                                    <li className="sub-menu-item"><a href="adca.html" style={{ textDecoration: 'none' }}>Course-details</a></li>
                                </ul>
                            </li>
                            {/* <li class="menu-item menu-item-has-children">
                        <a href="#" class="js-toggle-sub-menu" style="text-decoration: none;">Pages <i class="fas fa-chevron-down"></i></a>
                        <ul class="sub-menu js-sub-menu">
                            <li class="sub-menu-item"><a href="log-in.html" style="text-decoration: none;">Login</a>
                            </li>
                            <li class="sub-menu-item"><a href="sign-up.html" style="text-decoration: none;">Sig-up</a>
                            </li>

                        </ul>
                    </li> */}
                            <li className="menu-item"><a href="log-in.html" style={{ textDecoration: 'none' }}>Gallery</a></li>
                            <li className="menu-item">
                                <a href="contact.html" style={{ textDecoration: 'none' }}>Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Navbar
