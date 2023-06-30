import { MenuItem } from '../classes/menu-item.class';
import { ExpandableMenuItem } from '../classes/expandable-menu-item.class';

export const isExpandableMenuItem = (
  menuItem: MenuItem
): menuItem is ExpandableMenuItem => {
  return menuItem instanceof ExpandableMenuItem;
};
