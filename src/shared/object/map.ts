/**
 * @name                    map
 * @namespace               shared.object
 * @type                    Function
 * @platform                js
 * @platform                node
 * @status                  stable
 *
 * This is the same function as the "Array.map" but for objects. It will iterate over all the properties
 * of the passed object and pass the value to your process function. It will then save the property
 * with your processed value
 *
 * @param           {Object}            object          The object to process
 * @param           {Function}          processor       The processor function that will take as parameters the current property value and the property name
 * @return          {Object}                            The processed object
 *
 * @todo      tests
 *
 * @snippet         __map($1, $2)
 * __map($1, ({value, prop}) => {
 *      $2
 * })
 *
 * @example         js
 * import { __map } from '@lotsof/sugar/object';
 * const myObject = {
 *    hello: 'world',
 *    cat: 'Nelson'
 * };
 * __map(myObject, ({value, prop}) => {
 *    return prop === 'hello' ? 'universe' : value;
 * });
 * {
 *    hello: 'universe',
 *    cat: 'Nelson'
 * }
 *
 * @since       2.0.0
 * @author  Olivier Bossel <olivier.bossel@gmail.com> (https://lotsof.dev)
 */

interface IMapObjProcessorArg {
  value: any;
  key: string;
  prop: string;
  i: number;
  idx: number;
}

export default function __map(
  object: any,
  processor: (item: IMapObjProcessorArg) => any,
): any {
  for (let i = 0; i < Object.keys(object).length; i++) {
    const prop = Object.keys(object)[i];
    const res = processor({
      value: object[prop],
      key: prop,
      prop,
      i,
      idx: i,
    });
    if (res === -1) delete object[prop];
    else object[prop] = res;
  }
  return object;
}
