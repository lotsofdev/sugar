/**
 * @name                        deleteProperty
 * @namespace                   shared.object
 * @type                        Function
 * @platform                    js
 * @platform                    node
 * @status                      stable
 *
 * Delete an object property using a dotPath like "something.else"
 *
 * @param         {Object}          object            The object on which you want to delete the property
 * @param         {String}          dotPath           The dotpath to the property you want to delete
 *
 * @todo      tests
 *
 * @snippet         __deleteProperty($1, $2)
 *
 * @example         js
 * import { __deleteProperty } from '@lotsof/sugar/object';
 * const myObject = {
 *    hello: 'world',
 *    plop: 'yop'
 * };
 * __deleteProperty(myObject, 'plop');
 *
 * @since     2.0.0
 * @author  Olivier Bossel <olivier.bossel@gmail.com> (https://lotsof.dev)
 */
export default function __deleteProperty(object: any, dotPath: string): any;
