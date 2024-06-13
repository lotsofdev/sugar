/**
 * @name            idCompliant
 * @namespace       shared.string
 * @type            Function
 * @platform        js
 * @platform        node
 * @status          stable
 *
 * This function take a string and return a version of it that you can safely use
 * in html id for example. It replace spaces with '-' as well as all the special characters
 * with their simple version like "à" will be replaces by "a"
 *
 * @param       {String}        string         The string to process
 * @return      {String}                        The processed string
 *
 * @snippet         __idCompliant($1)
 *
 * @todo      tests
 *
 * @example         php
 * import { __idCompliant } from '@lotsof/sugar/string';
 * __idCompliant('Hello world'); // => hello-world
 *
 * @since       2.0.0
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://lotsof.dev)
 */
export interface IIdCompliantSettings {
    exclude: string[];
}
export default function __idCompliant(str: string, settings?: IIdCompliantSettings): string;
