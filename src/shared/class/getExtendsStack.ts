import __isClass from '../is/isClass.js';

/**
 * @name            getExtendsStack
 * @namespace       shared.class
 * @type            Function
 * @platform        js
 * @platform        node
 * @status          beta
 *
 * This function take a class as parameter and return an array of all the class names used to extends this one...
 *
 * @param       {Class}         cls         The class to get the stack of
 * @param       {TGetExtendsStackSettings}    [settings={}]       Some settings to configure your process
 * @return      {Object}                     An object of all the parent classes
 *
 * @setting     {Boolean}     [includeBaseClass=false]      Specify if you want to include the base class in the stack or not
 *
 * @todo      tests
 *
 * @snippet         __getExtendsStack($1)
 *
 * @example         js
 * import { __getExtendsStack } from '@lotsof/sugar/class';
 * class Coco extends Error {}
 * class Plop extends Coco {}
 * __getExtendsStack(Plop); // => {Coco: [class ...], Error: [class ...]};
 *
 * @since       2.0.0
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://lotsof.dev)
 */

export type TGetExtendsStackSettings = {
  includeBaseClass?: boolean;
};
export type TGetExtendsStackResult = {
  [key: string]: any;
};
export type TGetExtendsStack = {
  (cls: any, settings?: TGetExtendsStackSettings): TGetExtendsStackResult;
};

const fn: TGetExtendsStack = function (
  cls: any,
  settings: TGetExtendsStackSettings = {},
) {
  const stack = {};

  if (!__isClass(cls)) {
    cls = cls.constructor;
  }

  if (settings.includeBaseClass === true) {
    stack[cls.name] = cls;
  }

  let baseClass = cls;

  while (baseClass) {
    const newBaseClass = Object.getPrototypeOf(baseClass);
    if (newBaseClass && newBaseClass !== Object && newBaseClass.name) {
      stack[newBaseClass.name] = newBaseClass;
      baseClass = newBaseClass;
    } else {
      break;
    }
  }

  return stack;
};
export default fn;
