import __fs from 'fs-extra';

/**
 * @name            unlinkSync
 * @namespace       node.fs
 * @type            Function
 * @platform        node
 * @status          stable
 *
 * Removes a file or directory. The directory can have contents. If the path does not exist, silently does nothing. Like rm -rf (sync)
 *
 * @param       {String}              path           The file/directory path to delete
 *
 * @todo      tests
 *
 * @snippet         __unlinkSync($1)
 *
 * @example       js
 * import { __unlinkSync } from '@coffeekraken/sugar/fs.js';
 *  __unlinkSync('my/cool/file.json');
 *
 * @see             https://github.com/jprichardson/node-fs-extra
 * @since         2.0.0
 * @author         Olivier Bossel <olivier.bossel@gmail.com> (https://coffeekraken.io)
 */
export default function __unlinkSync(path: string): void {
  __fs.removeSync(path);
}
