import IconContainer from '.';

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

describe('IconContainer', () => {
  let iconContainer: IconContainer;
  beforeEach(() => {
    iconContainer = new IconContainer('testClass', fakeSvg);
  });

  test('IconContainer creates an element with the correct class', () => {
    expect(iconContainer.element.className).toBe('testClass');
  });

  test('IconContainer correctly initializes Svg child', () => {
    expect(iconContainer.element.childNodes.length).toBeGreaterThan(0);
    expect(iconContainer.element.firstChild?.nodeName.toLowerCase()).toBe('div');
    expect(iconContainer.element.firstChild?.firstChild?.nodeName.toLowerCase()).toBe('svg');
  });
});
