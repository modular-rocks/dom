import Button from '.';

describe('Button class', () => {
  let button: Button;

  beforeEach(() => {
    button = new Button('Test button', false, {}, 'active', 'inactive');
  });

  test('constructor initializes button correctly', () => {
    expect(button.text()).toBe('Test button');
    expect(button.element.className).toBe('inactive');
    expect(button.active).toBe(false);
  });

  test('activate method correctly activates the button', () => {
    button.activate();
    expect(button.element.className).toBe('active');
    expect(button.active).toBe(true);
  });

  test('disactivate method correctly deactivates the button', () => {
    button.activate();
    button.disactivate();
    expect(button.element.className).toBe('inactive');
    expect(button.active).toBe(false);
  });

  test("toggle method correctly toggles the button's active state", () => {
    button.toggleActive();
    expect(button.element.className).toBe('active');
    expect(button.hasClass('active')).toBe(true);
    expect(button.active).toBe(true);

    button.toggleActive();
    expect(button.element.className).toBe('inactive');
    expect(button.hasClass('active')).toBe(false);
    expect(button.active).toBe(false);
  });
});

describe('Button class', () => {
  let button: Button;

  beforeEach(() => {
    button = new Button('Test button', false, {}, 'active', 'inactive');
  });

  test('constructor initializes correctly', () => {
    expect(button.element.nodeName).toBe('BUTTON');
    expect(button.element.className).toBe('inactive');
    expect(button.text()).toBe('Test button');
    expect(button.active).toBe(false);
  });

  test('toggleActive toggles active state and classes', () => {
    button.toggleActive();
    expect(button.active).toBe(true);
    expect(button.hasClass('active')).toBe(true);
    expect(button.hasClass('inactive')).toBe(false);

    button.toggleActive();
    expect(button.active).toBe(false);
    expect(button.hasClass('active')).toBe(false);
    expect(button.hasClass('inactive')).toBe(true);
  });

  test('activate makes button active', () => {
    button.activate();
    expect(button.active).toBe(true);
    expect(button.hasClass('active')).toBe(true);
    expect(button.hasClass('inactive')).toBe(false);
  });

  test('disactivate makes button inactive', () => {
    // First activate the button
    button.activate();

    button.disactivate();
    expect(button.active).toBe(false);
    expect(button.hasClass('active')).toBe(false);
    expect(button.hasClass('inactive')).toBe(true);
  });
});
