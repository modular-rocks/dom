import Element from '../element';
import IconButton from '.';

const fakeSvg = {
  id: '',
  color: '',
  width: 300,
  height: 300,
  viewbox: '',
  paths: [
    {
      d: 'string',
      opacity: 300,
      fill: '',
    },
  ],
};

describe('IconButton', () => {
  let children: Element[];
  let iconButton: IconButton;

  beforeEach(() => {
    children = [new Element()];
    iconButton = new IconButton(fakeSvg, children);
  });

  test('adds icon to button', () => {
    const iconElement = iconButton.element.querySelector('svg');
    expect(iconElement).not.toBeNull();
  });

  test('adds children to button', () => {
    expect(iconButton.element.contains(children[0].element)).toBe(true);
  });
});
