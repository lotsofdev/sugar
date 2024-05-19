import { ITypeStringObject } from '../../shared/type/parseTypeString.js';
/**
 * @name            resolveTypeString
 * @namespace       node.type
 * @type            Function
 * @platform        node
 * @status          beta
 * @async
 *
 * This method simply parse the passed typeString like "string | number", or "string & path", etc... and return
 * an object defining the resolved type with interface if defined, etc...
 *
 * @param     {String}        typeString      The type string to parse
 * @param       {Partial<IResolveTypeStringSettings>}       [settings={}]     A setting object to configure your resolve process
 * @return    {Promise<IResolveTypeStringResult>}             A promise resolved once the type string has been resolved
 *
 * @setting         {String}       [cwd=process.cwd()]          The cwd to use to resolve the type string when they are path
 *
 * @snippet         __resolveTypeString($1)
 *
 * @example       js
 * import { __resolveTypeString } from '@lotsof/sugar/type';
 * __resolveTypeString('string');
 * // {
 * //    types: [{
 * //       type: 'string',
 * //       of: undefined,
 * //       value: undefined
 * //    }],
 * // }
 *
 * @since       2.0.0
 * @author    Olivier Bossel <olivier.bossel@gmail.com>
 */
export interface IResolveTypeStringResult {
    types: ITypeStringObject[];
    raw: string;
}
export interface IResolveTypeStringSettings {
    cwd: string;
}
export default function __resolveTypeString(typeString: string, settings?: Partial<IResolveTypeStringSettings>): Promise<IResolveTypeStringResult>;
