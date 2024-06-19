/**
 * @name                    packageDir
 * @namespace               node.package
 * @type                    Function
 * @platform                node
 * @status                  beta
 *
 * This function simply take a package name as parameter, and return the corresponding
 * package direcory path
 *
 * @param       {String}        [nameOrPath=process.cwd()]        the package name or path wanted
 * @param       {IPackageDirSettings}     [settings={}]       Some settings to configure your process
 * @return      {String}                      The package path
 *
 * @setting     {String}        [cwd=process.cwd()]        The directory in which you want to start the research
 * @setting     {Boolean}       [monorepo=false]         Specify if you are in a monorepo context
 * @setting     {Boolean}       [checkExistence=true]    Specify if you want to check if the vendor dir exists
 *
 * @snippet         __packageDir($1, $2)
 *
 * @example         js
 * import { __packageDir } from '@lotsof/sugar/package`;
 * __packageDir('lodash');
 *
 * @todo        Implement a cache strategy to avoid making same process again and again
 *
 * @since       2.0.0
 * @author         Olivier Bossel <olivier.bossel@gmail.com> (https://lotsof.dev)
 */
export interface IPackageDirSettings {
    cwd: string;
    monorepo: boolean;
    checkExistence: boolean;
}
export default function packageDir(nameOrPath: string, settings: Partial<IPackageDirSettings>): any;
