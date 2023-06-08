import { Outlet } from 'react-router-dom';

import { NavItemLink } from './NavItemLink';
import { useCurrentLink, links } from './useCurrentLink';

export function Layout() {
  const setCurrentLink = useCurrentLink();

  return (
    <div className="flex h-full">
      <div className="flex-none bg-gray-50 w-60 border-r border-gray-400">
        <div className="py-4 max-h-full overflow-y-auto">
          <nav className="flex flex-col space-y-0 pb-16 px-0">
            {links.map(({ path, title }) => (
              <NavItemLink
                key={path}
                to={path}
                ref={setCurrentLink(path)}
              >
                {title}
              </NavItemLink>
            ))}
          </nav>
        </div>
      </div>

      <main className="flex-1">
        <div className="p-5 max-h-full overflow-y-auto container">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
