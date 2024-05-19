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
 * @param       {IGetExtendsStackSettings}    [settings={}]       Some settings to configure your process
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
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://coffeekraken.io)
 */
export interface IGetExtendsStackSettings {
    includeBaseClass?: boolean;
}
export interface IGetExtendsStackResult {
    [key: string]: any;
}
export interface IGetExtendsStack {
    (cls: any, settings?: IGetExtendsStackSettings): IGetExtendsStackResult;
}
declare const fn: IGetExtendsStack;
export default fn;
