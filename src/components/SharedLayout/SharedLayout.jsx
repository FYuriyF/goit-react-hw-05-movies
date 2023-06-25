import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import css from './SharedLayout.module.css';

const navItems = [
  { href: '/', text: 'Home' },
  { href: 'movies', text: 'Movies' },
];

const SharedLayout = () => {
  return (
    <>
      <header className={css.header}>
        <nav>
          {navItems.map(({ href, text }) => (
            <NavLink
              key={href}
              to={href}
              className={({ isActive }) =>
                isActive ? `${css.active}` : `${css.link}`
              }
            >
              {text}
            </NavLink>
          ))}
        </nav>
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default SharedLayout;
