import SvgElement from '.';

describe('SvgElement', () => {
  const svgProps = {
    id: 'testSVG',
    color: '#ffffff',
    viewbox: '0 0 12 12',
    paths: [{ d: 'M1 1 L12 12', opacity: 0.8, fill: '#000000' }],
  };

  let svgElement: SvgElement;

  beforeEach(() => {
    svgElement = new SvgElement(svgProps);
  });

  test('SvgElement creates an SVG with the correct attributes', () => {
    const svgElementNode = svgElement.element.querySelector('svg') as SVGElement;
    expect(svgElementNode.nodeName.toLowerCase()).toBe('svg');
    expect(svgElementNode.id).toBe('testSVG');
    expect(svgElementNode.getAttribute('viewBox')).toBe('0 0 12 12');
    expect(svgElementNode.getAttribute('width')).toBe('30');
    expect(svgElementNode.getAttribute('height')).toBe('30');
  });

  test('SvgElement correctly initializes path', () => {
    const svgPathNode = svgElement.element.querySelector('path') as SVGElement;
    expect(svgPathNode.nodeName.toLowerCase()).toBe('path');
    expect(svgPathNode.getAttribute('d')).toBe('M1 1 L12 12');
    expect(svgPathNode.getAttribute('fill')).toBe('#000000');
    expect(svgPathNode.getAttribute('opacity')).toBe('0.8');
  });
});
