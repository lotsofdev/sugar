/**
 * @name                        toPlainObject
 * @namespace                   shared.object
 * @type                        Function
 * @platform                    js
 * @platform                    node
 * @status                      stable
 *
 * This function take an object as parameter and return a new one that does not have getters, setters, etc...
 *
 * @param           {Object}            object
 * @param           {Object}            [settings={}]       Some settings to configure your process
 * @return          {Object}                              The new simple object
 *
 * @todo      tests
 *
 * @snippet         __toPlainObject($1)
 *
 * @example           js
 * import { __toPlainObject } from '@lotsof/sugar/object';
 * __toPlainObject({ something: 'cool' });
 *
 * @since       2.0.0
 * @author  Olivier Bossel <olivier.bossel@gmail.com> (https://coffeekraken.io)
 */
export interface IToPlainObjectSettings {
    deep: boolean;
}
export default function __toPlainObject(object: any, settings?: Partial<IToPlainObjectSettings>): any;
