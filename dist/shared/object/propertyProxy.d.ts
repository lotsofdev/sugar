/**
 * @name                propertyProxy
 * @namespace           shared.object
 * @type                Function
 * @platform            js
 * @platform            node
 * @status              beta
 * @private
 *
 * Create a proxy for and object property.
 * This gives you the possibility to process the data of the property
 * when it is getted or setted.
 *
 * @param 		{Object} 		obj 			The object on which to create the proxy
 * @param 		{String} 		property 		The property name that will be proxied
 * @param 		{Object} 		descriptor 		A descriptor object that contains at least a get or a set method, or both
 * @param 		{Boolean} 		[applySetterAtStart=false] 	If need to apply the descriptor setter directly on the current value or not
 *
 * @todo      tests
 *
 * @example 	js
 * import { __propertyProxy } from '@lotsof/sugar/object';
 * const myObject = {
 * 		title : 'World'
 * };
 * // create the proxy
 * __propertyProxy(myObject, 'title', {
 * 		get : (value) => {
 * 			return `Hello ${value}`;
 * 		},
 * 		set : (value) => {
 * 			return `Youhou ${value}`;
 * 		}
 * });
 * console.log(myObject.title) => 'Hello World';
 * myObject.title = 'Universe';
 * console.log(myObject.title) => 'Hello Youhou Universe';
 *
 * @since         2.0.0
 * @author         Olivier Bossel <olivier.bossel@gmail.com> (https://lotsof.dev)
 */
interface IPropertyProxyDescriptor {
    get: (value: any) => any;
    set: (value: any) => any;
    configurable: boolean;
    enumarable: boolean;
}
export default function __propertyProxy(obj: any, property: string, descriptor: IPropertyProxyDescriptor, applySetterAtStart?: boolean): void;
export {};
