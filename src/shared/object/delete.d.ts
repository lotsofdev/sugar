/**
 * @name                    delete
 * @namespace               shared.object
 * @type                    Function
 * @platform                js
 * @platform                node
 * @status                  stable
 *
 * Delete an object/array property by passing a dotpath to the element you want to remove.
 *
 * @param               {Object}                 obj                The object in which to set the value
 * @param               {String|String[]}                dotpath                The dotted object/array path to delete
 *
 * @todo      tests
 *
 * @snippet         __get($1, $2)
 *
 * @example             js
 * import { __delete } from '@lotsof/sugar/object';
 * __delete(myObject, 'my.cool.value');
 * __delete(myObject, 'my.cool.value.0');
 *
 * @since     2.0.0
 * @author  Olivier Bossel <olivier.bossel@gmail.com> (https://lotsof.dev)
 */
export default function __delete(object: any, dotpath: string | string[]): void;
