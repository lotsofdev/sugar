import __fs from 'fs-extra';
/**
 * @name                emptyDirSync
 * @namespace           node.fs
 * @type                Function
 * @platform            node
 * @status              stable
 *
 * Empty a directory (sync)
 *
 * @param       {String}              dir           The directory path to empty
 *
 * @todo        tests
 *
 * @snippet         __emptyDirSync($1)
 *
 * @example       js
 * import { __emptyDirSync } from '@lotsof/sugar/fs';
 * __emptyDirSync('my/cool/directory');
 *
 * @see             https://github.com/jprichardson/node-fs-extra
 * @since           2.0.0
 * @author         Olivier Bossel <olivier.bossel@gmail.com> (https://lotsof.dev)
 */
export default function __emptyDirSync(dir) {
    __fs.emptyDirSync(dir);
}
//# sourceMappingURL=emptyDirSync.js.map