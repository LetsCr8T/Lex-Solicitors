import { NavLink } from "@/components/layout/Navbar/NavLink";
import { isNavItemActive } from "@/data/nav";
import type { NavItem } from "@/types";

export interface DesktopNavProps {
  items: NavItem[];
  activeId: string | null;
  pathname: string;
}

/** Horizontal desktop nav list (hidden below `md`). */
export function DesktopNav({ items, activeId, pathname }: DesktopNavProps) {
  return (
    <ul className="hidden items-center gap-1 lg:flex">
      {items.map((item) => (
        <li key={item.href}>
          <NavLink
            item={item}
            active={isNavItemActive(item, pathname, activeId)}
          />
        </li>
      ))}
    </ul>
  );
}
