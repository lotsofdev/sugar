import __fs from 'fs-extra';
/**
 * @name            copySync
 * @namespace       node.fs
 * @type            Function
 * @platform        node
 * @status          stable
 *
 * Copy a file or directory (sync)
 *
 * @param       {String}              src           The source path to copy
 * @param       {String}              dest          The destination path
 *
 * @snippet         __copySync($1, $2)
 *
 * @example       js
 * import { __copySync } from '@lotsof/sugar/fs';
 *  __copySync('my/cool/file.jpg', 'my/new/file.jpg');
 *
 * @see             https://github.com/jprichardson/node-fs-extra
 * @since         2.0.0
 * @author         Olivier Bossel <olivier.bossel@gmail.com> (https://lotsof.dev)
 */
export default function __copySync(src, dest) {
    __fs.copySync(src, dest);
}
//# sourceMappingURL=copySync.js.map