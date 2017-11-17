
import { propertyExists } from '../src/acronHelper.js';

describe('Property Exists', () => {
  it('should compare prop.key.name with propName', () => {
    expect(propertyExists([{prop1: 'value1'}], 'prop1')).toEqual(false);
    expect(propertyExists([{key: {name: 'prop1'}, value:{ value: 'value1'} }], 'prop1')).toEqual(true);
  });
});
