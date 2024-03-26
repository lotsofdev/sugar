import * as __fs from 'fs';
/**
 * @name            isSymlink
 * @namespace       node.is
 * @type            Function
 * @platform        node
 * @status          stable
 *
 * This function check if the passed string path is a sySlink or not
 *
 * @param     {String}        path        The path to check
 * @return    {Boolean}                   true if is a sySlink, false if not
 *
 * @todo      tests
 *
 * @snippet         __isSymlink($1)
 *
 * @example     js
 * import { __isSymlink } from '@coffeekraken/sugar/is.js';
 * __isSymlink('something/cool');
 *
 * @todo        Tests
 *
 * @since       2.0.0
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://coffeekraken.io)
 */
export default function __isSymlink(path) {
    return __fs.existsSync(path) && __fs.lstatSync(path).isSymbolicLink();
}
//# sourceMappingURL=isSymlink.js.map