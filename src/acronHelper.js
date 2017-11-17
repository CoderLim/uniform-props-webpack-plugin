/*
 *  Acron is a framework used
 */



/*
 * propName Exists in props or not
 *
 * props just like:
 * [
 *  { key: { name: 'prop1', type: 'Property' }, value: {value: 'value1', type: 'Literal'},
 *  { key: { name: 'prop2', type: 'Property' }, value: {value: 'value2', type: 'Literal'},
 * ]
 *
 */
export function propertyExists (props, propName) {
  if (!Array.isArray(props)) return false;
  return  props.some((prop) => prop.key && prop.key.name === propName);
}

