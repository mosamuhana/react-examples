import { forwardRef } from 'react';
import { type NavLinkProps, NavLink } from 'react-router-dom';
import clsx from 'clsx';

export const NavItemLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <NavLink
        ref={ref}
        className={({ isActive }) =>
          clsx(
            'px-3 py-2 font-medium',
            isActive
              ? 'text-blue-700 hover:text-blue-700 bg-slate-200 hover:bg-slate-100'
              : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
          )
        }
        {...props}
      >
        {children}
      </NavLink>
    );
  }
);
