declare module '@modular-rocks/dom';

interface PathProps {
  d: string;
  opacity?: number;
  fill?: string;
}

interface SvgProps {
  id: string;
  color: string;
  width?: number;
  height?: number;
  viewbox: string;
  paths: PathProps[];
}

interface RowProps {
  name: string;
  attrs?: { [key: string]: string };
}

interface Agent {
  get?: Function;
  post: Function;
  put: Function;
  delete: Function;
  upload: Function;
}

interface ElementOpts {
  data?: any;
  attrs?: any;
  children?: ElementType[] | any;
}

interface ElementType {
  element: HTMLElement;
  textContent?: string;
  isVisible: boolean;
  text: Function;
  add: Function;
  addChildren: Function;
  remove: Function;
  insertTemplate: Function;
  insertAsTemplate: Function;
  addTemplate: Function;
  addAsTemplate: Function;
  show: Function;
  hide: Function;
  toggle: Function;
  clear: Function;
  replace: Function;
  toggleClass: Function;
  hasClass: Function;
  addClass: Function;
  removeClass: Function;
  className: Function;
  onClick: Function;
  onDblClick: Function;
  onHover: Function;
  onKeyup: Function;
  attr: Function;
  to_s: Function;
}
