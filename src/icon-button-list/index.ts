import Element from '../element';
import IconButton from '../icon-button';

export default class IconButtonList extends Element {
  constructor(icons: SvgProps[], onClick?: (event: MouseEvent) => void) {
    super('ul');
    icons.map((x) => this.add(new Element('li').add(new IconButton(x))));
    if (onClick) {
      this.element.addEventListener('click', onClick, false);
    }
  }
}
