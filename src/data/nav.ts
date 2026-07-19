import type { NavItem } from "@/types";

/** Primary site navigation — in-page anchors plus the dedicated Contact route. */
export const navItems: NavItem[] = [
  { label: "About", type: "anchor", href: "about" },
  { label: "Practice Areas", type: "anchor", href: "practice-areas" },
  { label: "Our Approach", type: "anchor", href: "approach" },
  { label: "Contact", type: "route", href: "/contact" },
];

/** Section ids the anchor items point to (used for scroll-spy on the home route). */
export const navSectionIds: string[] = navItems
  .filter((item) => item.type === "anchor")
  .map((item) => item.href);

/**
 * Resolve a nav item to an href. Anchors use `/#<id>` so they navigate home and
 * scroll from ANY route; routes use their path directly.
 */
export function navHref(item: NavItem): string {
  return item.type === "route" ? item.href : `/#${item.href}`;
}

/**
 * Active state: route items match the current pathname; anchor items match the
 * scroll-spy id, but only on the home route.
 */
export function isNavItemActive(
  item: NavItem,
  pathname: string,
  activeId: string | null,
): boolean {
  return item.type === "route"
    ? pathname === item.href
    : pathname === "/" && activeId === item.href;
}
