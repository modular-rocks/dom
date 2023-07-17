const exists = (x: any): boolean => x.length > 0;
const remove =
  (y: any) =>
  (x: any): boolean =>
    x !== y;

function push(arr: string[], klass: string): string[] {
  arr.push(klass);
  return arr;
}

class Element {
  element: HTMLElement;

  textContent?: string;

  isVisible: boolean;

  constructor(type: string = 'div', klass?: string, text?: string, opts?: ElementOpts) {
    this.element = document.createElement(type);
    if (klass) {
      this.element.className = klass;
    }

    if (text) {
      this.text(text);
    }

    // const { data, attrs, children } = opts;

    // if (data) {
    //   for (const [key, value] of Object.entries(data)) {
    //     this[key] = value;
    //     this.element[key as keyof HTMLElement] = value;
    //   }
    // }

    if (opts) {
      if (opts.attrs) {
        Object.keys(opts.attrs).forEach((k: string) => {
          this.element.setAttribute(k, opts.attrs[k]);
        });
      }

      if (opts.children) {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        Array.isArray(opts.children) ? this.addChildren(opts.children) : this.add(opts.children);
      }
    }

    this.isVisible = true;
  }

  text(text?: string): string | null {
    if (text) {
      this.element.textContent = text;
      this.textContent = text;
    }
    return this.textContent || this.element.textContent;
  }

  add(component: Element): Element {
    this.element.appendChild(component.element);
    return component;
  }

  addChildren(children: Element[]): void {
    children.map(this.add.bind(this));
  }

  remove(): void {
    this.element.parentElement?.removeChild(this.element);
  }

  insertTemplate(str: string): Element {
    this.element.innerHTML = str;
    return this;
  }

  insertAsTemplate(component: ElementType): Element {
    return this.insertTemplate(component.element.innerHTML);
  }

  addTemplate(str: string): Element {
    this.element.innerHTML += str;
    return this;
  }

  addAsTemplate(component: ElementType): Element {
    return this.addTemplate(component.element.innerHTML);
  }

  show(): Element {
    this.element.style.display = 'block';
    this.isVisible = true;
    return this;
  }

  hide(): Element {
    this.element.style.display = 'none';
    this.isVisible = false;
    return this;
  }

  toggle(): Element {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    this.isVisible ? this.hide() : this.show();
    this.isVisible = !this.isVisible;
    return this;
  }

  clear(): Element {
    this.element.innerHTML = '';
    return this;
  }

  replace(component: Element): Element {
    this.clear();
    return this.add(component);
  }

  toggleClass(klass: string): void {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    this.element.className.match(klass) ? this.removeClass(klass) : this.addClass(klass);
  }

  hasClass(klass: string): Boolean {
    return this.element.className.split(' ').includes(klass);
  }

  addClass(klass: string): void {
    this.element.className = push(this.element.className.split(' ').filter(exists), klass).join(' ');
  }

  removeClass(klass: string): void {
    this.element.className = this.element.className.split(' ').filter(remove(klass)).join(' ');
  }

  className(name: string): void {
    this.element.className = name;
  }

  onClick(fn: (event: MouseEvent) => void): void {
    this.element.addEventListener('click', fn, false);
  }

  onDblClick(fn: (event: MouseEvent) => void): void {
    this.element.addEventListener('dblclick', fn, false);
  }

  onHover(fnIn: (event: MouseEvent) => void, fnOut: (event: MouseEvent) => void): void {
    this.element.addEventListener('mouseover', fnIn, false);
    this.element.addEventListener('mouseout', fnOut, false);
  }

  onKeyup(fn: (event: KeyboardEvent) => void): void {
    const inputHandler = (e: any) => fn && fn(e);

    this.element.addEventListener('input', inputHandler);
  }

  attr(key: string, value?: string): string | null {
    if (value) {
      this.element.setAttribute(key, value);
    }
    return this.element.getAttribute(key);
  }

  to_s(): string {
    return this.element.innerHTML;
  }
}

export default Element;
