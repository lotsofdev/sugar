/**
 * @name                unquote
 * @namespace           shared.string
 * @type                Function
 * @platform            js
 * @platform            node
 * @status              stable
 *
 * Remove the quotes of a string
 * Types of quotes removed :
 * - `"`, `'`, `”`, '`'
 *
 * @param    {String}    string    The string to process
 * @param    {IUnquoteSettings}    [settings={}]    Some settings to configure your unquoting process
 * @return    {String}    The unquoted string
 *
 * @todo      tests
 *
 * @snippet         __unquote($1)
 *
 * @example    js
 * import { __unquote } from '@lotsof/sugar/string'
 * __unquote("'Hello world'") // "Hello world"
 *
 * @since     2.0.0
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://lotsof.dev)
 */
export interface IUnquoteSettings {
    quotesToRemove: string[];
}
export default function __unquote(string: string, settings?: Partial<IUnquoteSettings>): string;
