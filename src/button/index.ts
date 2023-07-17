import Element from '../element';

export default class Button extends Element {
  active: boolean;

  private activeClass: string;

  private inactiveClass: string;

  constructor(text: string, active: boolean = false, opts: any = {}, activeClass?: string, inactiveClass?: string) {
    const klass = active ? activeClass : inactiveClass;
    super('button', klass, text, opts);

    this.active = active;
    this.activeClass = activeClass || '';
    this.inactiveClass = inactiveClass || '';
  }

  toggleActive(): void {
    this.active = !this.active;
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    this.active ? this.activate() : this.disactivate();
  }

  activate(): void {
    this.active = true;
    this.removeClass(this.inactiveClass);
    this.addClass(this.activeClass);
  }

  disactivate(): void {
    this.active = false;
    this.removeClass(this.activeClass);
    this.addClass(this.inactiveClass);
  }
}
