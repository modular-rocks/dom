import SearchTextInput from '.';

describe('SearchTextInput', () => {
  let mockCallback: Function;
  let searchTextInput: SearchTextInput;

  beforeEach(() => {
    mockCallback = jest.fn();
    searchTextInput = new SearchTextInput(mockCallback);
  });

  test('SearchTextInput should correctly initialize with an input child', () => {
    const inputChild = searchTextInput.element.children[0];
    expect(inputChild.tagName).toBe('INPUT');
  });

  test('Callback function should be called with correct value after keyup event and delay', () => {
    jest.useFakeTimers();
    const inputElement = searchTextInput.element.querySelector('input');

    if (inputElement) {
      // Manually changing the value of the input.
      inputElement.value = 'a';

      const mockEvent = new window.KeyboardEvent('keyup');
      inputElement.dispatchEvent(mockEvent);

      jest.advanceTimersByTime(300);

      expect(mockCallback).toHaveBeenCalledWith('a');
    } else {
      throw new Error('Input element not found');
    }
  });
});
