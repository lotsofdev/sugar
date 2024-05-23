/**
 * @name                        extractValues
 * @namespace                   shared.object
 * @type                        Function
 * @platform                    js
 * @platform                    node
 * @status                      stable
 *
 * This function allows you to extract some values from an object by either passing
 * an array of keys to extract, or a function that will be called for each properties of the object and that will have to return true to extract the value
 *
 * @param               {Object}                        object                The object to extract values from
 * @param               {String[]|Function}             filter                The filter properties array or function to use to extract the values
 * @return              {Object}                                      The object with extracted values
 *
 * @setting             {Boolean}           [deep=true]            Specify if you want to extract values deeply in the object
 *
 * @todo      tests
 *
 * @example           js
 * import { __extractValues } from '@lotsof/sugar/object';
 * __extractValues ({
 *    coco: 'hello',
 *    sub: {
 *      property: 'world'
 *    }
 * }, ({key, value}) => key === 'property);
 * // { coco: 'hello', sub: 'value' }
 *
 * @since         2.0.0
 * @author  Olivier Bossel <olivier.bossel@gmail.com> (https://coffeekraken.io)
 */
export interface IExtractValuesSettings {
    deep: boolean;
}
export interface IExtractValuesFilter {
    (item: IDeepFilterItem): undefined | boolean;
}
export interface IDeepFilterItem {
    key: string;
    value: any;
    isObject: boolean;
}
export default function __extractValues(object: any, filter: IExtractValuesFilter, settings?: Partial<IExtractValuesSettings>): any;
