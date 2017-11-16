
export default class Insertion {
  constructor(type, range) {
    this.type = type;
    this.range = range;
  }

  applyTo (replaceSource, string) {
    if (this.type === AFTER_FIRST_PARAM_END) {
      replaceSource.insert(this.range[1], `, {${string}}`);
    } else if (this.type === BEFORE_SECOND_PARAM_END) {
      replaceSource.insert(this.range[1] - 1, `,${string}`);
    } else if (this.type === REPLACE_SECOND_PARAM) {
      replaceSource.replace(this.range[0], this.range[1] - 1, `{${string}}`);
    }
  }
}
