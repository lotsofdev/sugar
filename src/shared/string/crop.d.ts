/**
 * @name                    crop
 * @namespace               shared.string
 * @type                    Function
 * @platform                js
 * @platform                node
 * @status                  stable
 *
 * Allows you to crop a string at a certain length (this length take care of the croping characters like "...")
 *
 * @param               {String}                  text                      The text to crop
 * @param               {Number}                  length                    The text length to have after the croping process
 * @param               {Object}                  [settings={}]             An object of settings described bellow:
 * - chars (...) {String}: The characters to use to signal the crop
 * - splitWords (false) {Boolean}: Specify if you want to split words or not. If not, the function will make sure the final text does not exceeds the wanted length
 * @return              {String}                                            The cropped text
 *
 * @setting        {String}          [chars=...]         The characters to use to signal the crop
 * @setting        {Boolean}         [splitWords=false]         Specify if you want to split words or not. If not, the function will make sure the final text does not exceeds the wanted length
 *
 * @todo      tests
 *
 * @snippet         __crop($1, $2)
 *
 * @example         js
 * import { __crop } from '@lotsof/sugar/string';
 * __crop('Hello World', 10); // => Hello w...
 *
 * @since       2.0.0
 * @author 	Olivier Bossel <olivier.bossel@gmail.com> (https://lotsof.dev)
 */
interface ICropSettings {
    chars?: string;
    splitWords?: boolean;
}
export default function __crop(text: string, length: number, settings?: ICropSettings): string;
export {};
