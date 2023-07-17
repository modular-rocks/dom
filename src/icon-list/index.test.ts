import IconList from '.';

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

describe('IconList', () => {
  let iconList: IconList;

  beforeEach(() => {
    iconList = new IconList([fakeSvg, fakeSvg], () => {});
  });

  test('IconList correctly initializes Svg children', () => {
    expect(iconList.element.childNodes.length).toBeGreaterThan(0);
    iconList.element.childNodes.forEach((childNode) => {
      expect(childNode.nodeName.toLowerCase()).toBe('li');
      expect(childNode.childNodes.length).toBeGreaterThan(0);
      expect(childNode.firstChild?.nodeName.toLowerCase()).toBe('svg');
    });
  });
});
