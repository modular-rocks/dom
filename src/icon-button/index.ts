import Element from '../element';
import Svg from '../svg';

export default class IconButton extends Element {
  constructor(icon: SvgProps, children?: Element[]) {
    super('button');
    if (icon) {
      this.add(new Element('li').add(new Svg(icon)));
    }
    if (children) {
      this.addChildren(children);
    }
  }
}
