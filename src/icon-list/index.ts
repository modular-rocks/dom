import Element from '../element';
import Svg from '../svg';

class IconList extends Element {
  constructor(icons: SvgProps[], onClick?: (event: MouseEvent) => void) {
    super('ul');

    icons.forEach((icon) => {
      this.add(new Element('li').add(new Svg(icon, 'li')));
    });

    if (onClick) {
      this.element.addEventListener('click', onClick, false);
    }
  }
}

export default IconList;
