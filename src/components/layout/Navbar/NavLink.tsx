import Link from "next/link";
import { navHref } from "@/data/nav";
import { cn } from "@/lib/utils";
import type { NavItem } from "@/types";

export interface NavLinkProps {
  item: NavItem;
  active?: boolean;
}

/** Desktop nav link with animated underline + active state. Works cross-route. */
export function NavLink({ item, active = false }: NavLinkProps) {
  return (
    <Link
      href={navHref(item)}
      aria-current={active ? "page" : undefined}
      className={cn(
        "relative rounded-sm px-3 py-2 text-sm font-medium transition-colors hover:text-accent focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none",
        active ? "text-accent" : "text-current",
      )}
    >
      {item.label}
      <span
        aria-hidden
        className={cn(
          "absolute inset-x-3 -bottom-0.5 h-0.5 origin-left rounded-full bg-accent transition-transform duration-200",
          active ? "scale-x-100" : "scale-x-0",
        )}
      />
    </Link>
  );
}
