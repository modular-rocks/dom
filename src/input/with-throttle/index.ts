import Element from '../../element';

export default class SearchTextInput extends Element {
  constructor(callback: Function) {
    super('div');

    const input = this.add(new Element('input'));

    let timer: any;
    input.element.addEventListener(
      'keyup',
      (e: KeyboardEvent) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
          const target = e.target as HTMLInputElement;
          callback(target.value);
        }, 300);
      },
      false
    );
  }
}
