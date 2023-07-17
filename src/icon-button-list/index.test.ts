import IconButtonList from '.';

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

describe('IconButtonList', () => {
  let icons: SvgProps[];
  let onClick: jest.Mock;
  let iconButtonList: IconButtonList;

  beforeEach(() => {
    icons = [fakeSvg, fakeSvg];
    onClick = jest.fn();
    iconButtonList = new IconButtonList(icons, onClick);
  });

  test('adds icons to list', () => {
    expect(iconButtonList.element.childNodes.length).toBe(icons.length);
  });

  test('registers onClick handler', () => {
    const event = new window.MouseEvent('click');
    iconButtonList.element.dispatchEvent(event);
    expect(onClick).toBeCalledWith(event);
  });
});
