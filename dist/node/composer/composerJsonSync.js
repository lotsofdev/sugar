import __fs from 'fs';
import __composerPath from './composerPath.js';
/**
 * @name                    composerJsonSync
 * @namespace               node.composer
 * @type                    Function
 * @platform                node
 * @status                  beta
 *
 * This function simply take a package name as parameter, and return the corresponding
 * composer.json JSON content
 *
 * @param       {String}        [nameOrPath=process.cwd()]        the package name or path wanted
 * @param       {IPackageJson}      [settings={}]       Some settings to configure your process
 * @return      {JSON}                      The package.json content
 *
 * @snippet         __composerJsonSync($1)
 *
 * @example         js
 * import { __composerJsonSync } from '@lotsof/sugar/composer`;
 * __composerJsonSync('lodash');
 *
 * @todo        Implement a cache strategy to avoid making same process again and again
 *
 * @since       2.0.0
 * @author         Olivier Bossel <olivier.bossel@gmail.com> (https://lotsof.dev)
 */
export default function composerJsonSync(nameOrPath, settings) {
    if (nameOrPath.match(/^\//)) {
        if (!__fs.existsSync(`${nameOrPath}/composer.json`)) {
            return;
        }
        return JSON.parse(__fs.readFileSync(`${nameOrPath}/composer.json`).toString());
    }
    // get package path from name
    const path = __composerPath(nameOrPath, settings);
    if (path) {
        const json = JSON.parse(__fs.readFileSync(`${path}/composer.json`, 'utf8').toString());
        return json;
    }
    return {};
}
//# sourceMappingURL=composerJsonSync.js.map