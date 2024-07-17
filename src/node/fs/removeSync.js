import __fs from 'fs-extra';
/**
 * @name            removeSync
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
 * @snippet         __removeSync($1)
 *
 * @example       js
 * import { __removeSync } from '@lotsof/sugar/fs';
 *  __removeSync('my/cool/file.json');
 *
 * @see             https://github.com/jprichardson/node-fs-extra
 * @since         2.0.0
 * @author         Olivier Bossel <olivier.bossel@gmail.com> (https://lotsof.dev)
 */
export default function __removeSync(path) {
    __fs.removeSync(path);
}
//# sourceMappingURL=removeSync.js.map