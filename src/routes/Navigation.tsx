import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { showNavActive } from '../helpers/showNavActive';
import logo from '../logo.svg';

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className='main-layout'>
        <nav>
          <img src={logo} alt='React Logo' />
          <ul>
            <li>
              <NavLink to='/home' className={showNavActive}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to='/about' className={showNavActive}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to='/users' className={showNavActive}>
                Users
              </NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='about' element={<h1>About page</h1>} />
          <Route path='users' element={<h1>Users page</h1>} />
          <Route path='home' element={<h1>Home page</h1>} />
          <Route path='/*' element={<Navigate to='/home' replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
