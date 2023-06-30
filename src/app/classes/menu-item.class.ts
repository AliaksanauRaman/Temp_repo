export abstract class MenuItem {
  constructor(public readonly text: string, public readonly shortcut: string) {}

  abstract onClick(): void;
}
