import __fs from 'fs';
import __composerPackageDir from './composerPackageDir.js';

/**
 * @name                    composerJsonSync
 * @namespace               node.composer
 * @type                    Function
 * @platform                node
 * @status                  beta
 *
 * This function simply take a package name (or "." for the current package) as parameter, and return the corresponding
 * composer.json JSON content
 *
 * @param       {String}        [nameOrPath=process.cwd()]        the package name or path wanted
 * @param       {IComposerVendorDirSettings}      [settings={}]       Some settings to configure your process
 * @return      {JSON}                      The composer.json content
 *
 * @setting     {String}        [cwd=process.cwd()]        The directory in which you want to start the research
 * @setting     {Boolean}       [monorepo=false]         Specify if you are in a monorepo context
 * @setting     {Boolean}       [checkExistence=true]    Specify if you want to check if the vendor dir exists
 *
 * @snippet         __composerJsonSync($1)
 *
 * @example         js
 * import { __composerJsonSync } from '@lotsof/sugar/composer`;
 * __composerJsonSync('lotsof/sugar');
 *
 * @todo        Implement a cache strategy to avoid making same process again and again
 *
 * @since       2.0.0
 * @author         Olivier Bossel <olivier.bossel@gmail.com> (https://lotsof.dev)
 */

export interface IComposerJsonSyncSettings {
  cwd: string;
  monorepo: boolean;
  checkExistence: boolean;
}

export default function composerJsonSync(
  nameOrPath: string,
  settings?: Partial<IComposerJsonSyncSettings>,
): any {
  settings = {
    cwd: process.cwd(),
    monorepo: false,
    checkExistence: true,
    ...(settings ?? {}),
  };

  const packageDir = __composerPackageDir(nameOrPath, settings);
  return JSON.parse(__fs.readFileSync(`${packageDir}/composer.json`, 'utf8'));
}
