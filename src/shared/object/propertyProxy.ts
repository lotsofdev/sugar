// @ts-nocheck

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
 * @author         Olivier Bossel <olivier.bossel@gmail.com> (https://coffeekraken.io)
 */

interface IPropertyProxyDescriptor {
  get: (value: any) => any;
  set: (value: any) => any;
  configurable: boolean;
  enumarable: boolean;
}

export default function __propertyProxy(
  obj: any,
  property: string,
  descriptor: IPropertyProxyDescriptor,
  applySetterAtStart: boolean = false,
): void {
  // handle property like "something.cool"
  const objPath = property.split('.').slice(0, -1).join('.');
  if (objPath) {
    property = property.split('.').pop();
    obj = __get(obj, objPath);
  }

  // store the current value
  let val = __get(obj, property);
  const currentDescriptor = Object.getOwnPropertyDescriptor(
    obj.prototype || obj,
    property,
  );

  // custom setter check
  const _set = (value) => {
    if (descriptor.set) {
      value = descriptor.set(value);
    }

    // descriptor
    if (currentDescriptor && currentDescriptor.set) {
      const ret = currentDescriptor.set(value);
      if (ret) {
        val = ret;
      } else {
        val = currentDescriptor.get();
      }
    } else {
      val = value;
    }
  };

  // apply the setter if needed
  if (applySetterAtStart) _set(val);

  // make sure we have the good descriptor
  const d = Object.getOwnPropertyDescriptor(obj, property);
  Object.defineProperty(obj, property, {
    get: () => {
      let _val = val;
      if (descriptor.get) {
        _val = descriptor.get(_val);
      }
      if (currentDescriptor && currentDescriptor.get) {
        _val = currentDescriptor.get();
      }
      return _val;
    },
    set: (v) => {
      // const oldValue = val;
      // internal set to use the good setter
      _set(v);
      // notify of new update
      // this.notify(objPath, val, oldValue);
    },
    configurable:
      descriptor.configurable !== undefined
        ? descriptor.configurable
        : currentDescriptor && currentDescriptor.configurable !== undefined
        ? currentDescriptor.configurable
        : false,
    enumarable:
      descriptor.enumarable !== undefined
        ? descriptor.enumarable
        : currentDescriptor && currentDescriptor.enumarable !== undefined
        ? currentDescriptor.enumarable
        : true,
    // writable : currentDescriptor && currentDescriptor.writable !== undefined ? currentDescriptor.writable : true
  });

  // return the value
  return val;
}
