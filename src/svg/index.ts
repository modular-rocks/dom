import Element from '../element';

class SvgElement extends Element {
  constructor(props: SvgProps, tag: string = 'div') {
    super(tag);

    this.addTemplate(
      `<svg id='${props.id}' viewbox='${props.viewbox}' width='${props.width || 30}'  height='${props.height || 30}'>
        ${props.paths
          .map((p) => {
            const { d, opacity, fill } = p;
            return `<path d='${d}' fill='${fill || props.color}' opacity=${opacity || 1}></path>`;
          })
          .join('')}
      </svg>`
    );
  }
}

export default SvgElement;
