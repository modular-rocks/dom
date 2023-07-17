import Element from '../element';
import Svg from '../svg';

class IconContainer extends Element {
  constructor(klass: string, icon: SvgProps) {
    super('div', klass, undefined, { children: [new Svg(icon)] });
  }
}

export default IconContainer;
