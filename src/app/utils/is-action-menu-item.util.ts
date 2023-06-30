import { MenuItem } from '../classes/menu-item.class';
import { ActionMenuItem } from '../classes/action-menu-item.class';

export const isActionMenuItem = (
  menuItem: MenuItem
): menuItem is ActionMenuItem => {
  return menuItem instanceof ActionMenuItem;
};
