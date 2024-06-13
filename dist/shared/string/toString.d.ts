/**
 * @name            toString
 * @namespace       shared.string
 * @type            Function
 * @platform        js
 * @platform        node
 * @status          stable
 *
 * Convert passed value to a string
 *
 * @param    {Mixed}    value                           The value to convert to string
 * @param     {Object}      [settings={}]             An object of settings to configure your toString process:
 * @return    {String}                                  The resulting string
 *
 * @setting        {Boolean}        [beautify=true]        Specify if you want to beautify the output like objects, arrays, etc...
 * @setting        {Boolean}        [verbose=true]        Specify if you want to output verbose information like stack trace, etc...
 *
 * @todo      tests
 *
 * @snippet         __toString($1)
 *
 * @example    js
 * import { __toString } from '@lotsof/sugar/string'
 * __toString({
 * 	id:'hello'
 * }) // '{"id":"hello"}'
 *
 * @since     2.0.0
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://lotsof.dev)
 */
interface IToStringSettings {
    beautify?: boolean;
    verbose?: boolean;
}
declare function fn(value: any, settings?: IToStringSettings): string;
export default fn;
