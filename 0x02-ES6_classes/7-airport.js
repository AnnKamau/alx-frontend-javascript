export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }
  
  get name() {
    return this._name;
  }
  
  get code() {
    return this._code;
  }
  
  toString() {
    return `Airport [${this.code}] { _name: '${this.name}', _code: '${this.code}' }`;
  }
}
