import { MenuItem } from './menu-item.class';

export class ActionMenuItem extends MenuItem {
  constructor(
    text: string,
    shortcut: string,
    public readonly action: Function
  ) {
    super(text, shortcut);
  }

  public override onClick(): void {
    this.action();
  }
}
