/**
 * @name            isModuleSystem
 * @namespace       shared.is
 * @type            Function
 * @platform        js
 * @platform        node
 * @status          stable
 *
 * Check if the current module system the code runs on is one of the passed system names like "esm" or "cjs".
 *
 * @param       {('esm'|'cjs')[]}    systemNames    An array of system names to check against
 * @return      {Boolean}           true if the current system is one of the passed system names, false otherwise
 *
 * @todo        tests
 *
 * @snippet         __isModuleSystem($1)
 *
 * @example       js
 * import { __isModuleSystem } from '@lotsof/sugar/is';
 * __isModuleSystem('esm'); // => true
 * __isModuleSystem('cjs'); // => false
 *
 * @since     2.0.0
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://lotsof.dev)
 */
export default function __isModuleSystem(systemNames: ('esm' | 'cjs')[]): boolean;
