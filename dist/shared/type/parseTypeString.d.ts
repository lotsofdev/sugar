/**
 * @name            parseTypeString
 * @namespace       shared.type
 * @type            Function
 * @platform        js
 * @platform        node
 * @status          beta
 *
 * This method simply parse the passed typeString like "string | number", or "string & path", etc... and return
 * an object defining this type string
 *
 * @param     {String}        typeString      The type string to parse
 * @return    {ITypeStringObject[]}             An array of object(s) describing the type string passed
 *
 * @snippet         __parseTypeString($1)
 *
 * @example       js
 * import { __parseTypeString } from '@coffeekraken/sugar/type';
 * __parseTypeString('string|number');
 * //[{
 * //   type: 'string',
 * //   of: undefined,
 * //}, {
 * //   type: 'number',
 * //   of: undefined,
 * //}]
 *
 * @since       2.0.0
 * @author    Olivier Bossel <olivier.bossel@gmail.com>
 */
export interface ITypeStringObject {
    type: string;
    of: string[] | undefined;
    value?: any;
}
export interface IParseTypeStringSingleResultObj {
}
export default function __parseTypeString(typeString: string): ITypeStringObject[];
