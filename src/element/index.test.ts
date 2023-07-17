import { fireEvent } from '@testing-library/dom';
import Element from '.';

describe('Combine imports', () => {
  test('sets textContent correctly', () => {
    const element = new Element('div', '', '');
    element.text('Hello, World!');
    expect(element.textContent).toEqual('Hello, World!');
  });

  test('add method correctly appends child', () => {
    const parent = new Element('div', '', '');
    const child = new Element('div', '', '');
    parent.add(child);

    expect(parent.element.firstChild).toBe(child.element);
  });

  test('show method correctly changes visibility', () => {
    const element = new Element('div', '', '');
    element.hide();
    element.show();

    expect(element.isVisible).toBe(true);
    expect(element.element.style.display).toBe('block');
  });

  test('attr method sets and gets attribute correctly', () => {
    const element = new Element('div', '', '');
    element.attr('id', 'test');

    expect(element.attr('id')).toBe('test');
  });

  test('replace method replaces content correctly', () => {
    const originalElement = new Element('div', 'original');
    const newElement = new Element('div', 'new');
    originalElement.replace(newElement);

    expect(originalElement.element.firstChild).toBe(newElement.element);
  });

  test('toggleClass correctly adds and removes class', () => {
    const element = new Element('div');
    element.toggleClass('test-class');

    expect(element.element.className).toBe('test-class');

    element.toggleClass('test-class');

    expect(element.element.className).toBe('');
  });

  test('className method sets class name correctly', () => {
    const element = new Element('div');
    element.className('test-class');

    expect(element.element.className).toBe('test-class');
  });

  test('hasClass method correctly checks if class is present', () => {
    const element = new Element('div');
    element.addClass('test-class');

    expect(element.hasClass('test-class')).toBe(true);
    expect(element.hasClass('non-existent-class')).toBe(false);
  });

  test('addClass method adds class correctly', () => {
    const element = new Element('div');
    element.addClass('test-class');

    expect(element.element.className).toContain('test-class');
  });

  test('removeClass method removes class correctly', () => {
    const element = new Element('div');
    element.addClass('test-class');
    element.removeClass('test-class');

    expect(element.element.className).not.toContain('test-class');
  });

  test('onClick attaches click event listener correctly', () => {
    const element = new Element('div');
    const mockCallback = jest.fn();

    element.onClick(mockCallback);
    fireEvent.click(element.element);

    expect(mockCallback).toHaveBeenCalledTimes(1);
  });

  test('onDblClick attaches dblclick event listener correctly', () => {
    const element = new Element('div');
    const mockCallback = jest.fn();

    element.onDblClick(mockCallback);
    fireEvent.dblClick(element.element);

    expect(mockCallback).toHaveBeenCalledTimes(1);
  });

  test('onHover attaches mouseover and mouseout events correctly', () => {
    const element = new Element('div');
    const mockInCallback = jest.fn();
    const mockOutCallback = jest.fn();

    element.onHover(mockInCallback, mockOutCallback);
    fireEvent.mouseOver(element.element);
    fireEvent.mouseOut(element.element);

    expect(mockInCallback).toHaveBeenCalledTimes(1);
    expect(mockOutCallback).toHaveBeenCalledTimes(1);
  });

  test('onKeyup attaches keyup event listener correctly', () => {
    const element = new Element('input');
    const mockCallback = jest.fn();

    element.onKeyup(mockCallback);
    fireEvent.input(element.element, { target: { value: 'test' } });

    expect(mockCallback).toHaveBeenCalledTimes(1);
  });

  test('attr method sets and gets attribute correctly', () => {
    const element = new Element('div');
    element.attr('id', 'test');

    expect(element.attr('id')).toBe('test');
  });

  test('to_s method returns innerHTML correctly', () => {
    const element = new Element('div');
    element.insertTemplate('<p>Hello, world!</p>');

    expect(element.to_s()).toBe('<p>Hello, world!</p>');
  });
});

describe('Element class', () => {
  let element: Element;

  beforeEach(() => {
    element = new Element('div', 'test-class', 'Test content');
  });

  test('constructor initializes correctly', () => {
    expect(element.element.nodeName).toBe('DIV');
    expect(element.element.className).toBe('test-class');
    expect(element.text()).toBe('Test content');
    expect(element.isVisible).toBe(true);
  });

  test('add method adds a child element', () => {
    const child = new Element('span');
    element.add(child);
    expect(element.element.childNodes.length).toBeGreaterThan(0);

    let containsSpan = false;
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < element.element.childNodes.length; i++) {
      if (element.element.childNodes[i].nodeName === 'SPAN') {
        containsSpan = true;
        break;
      }
    }
    expect(containsSpan).toBe(true);
  });

  test('toggleClass toggles a class', () => {
    element.toggleClass('toggle-class');
    expect(element.hasClass('toggle-class')).toBe(true);

    element.toggleClass('toggle-class');
    expect(element.hasClass('toggle-class')).toBe(false);
  });

  test('addClass and removeClass work correctly', () => {
    element.addClass('added-class');
    expect(element.hasClass('added-class')).toBe(true);

    element.removeClass('added-class');
    expect(element.hasClass('added-class')).toBe(false);
  });

  test('onClick, onDblClick, onHover, and onKeyup add event listeners', () => {
    // Mock the global EventListener function
    const addEventListenerMock = jest.fn();
    element.element.addEventListener = addEventListenerMock;

    const testFn = jest.fn();

    element.onClick(testFn);
    element.onDblClick(testFn);
    element.onHover(testFn, testFn);
    element.onKeyup(testFn);

    expect(addEventListenerMock).toHaveBeenCalledTimes(5); // onClick, onDblClick, onHover (twice for mouseover and mouseout), onKeyup
  });

  test('attr sets and gets an attribute', () => {
    element.attr('data-test', 'value');
    expect(element.attr('data-test')).toBe('value');
  });

  test('to_s returns inner HTML', () => {
    expect(element.to_s()).toBe('Test content');
  });
});
