/**
 * @name                    nodeModulesDir
 * @namespace               node.package
 * @type                    Function
 * @platform                node
 * @status                  beta
 *
 * This function simply returns the "node_modules" directory path
 *
 * @param       {InodeModulesDirSettings}      [settings={}]       Some settings to configure your process
 * @return      {String}                      The package path
 *
 * @setting     {String}        [cwd=process.cwd()]        The directory in which you want to start the research
 * @setting     {Boolean}       [monorepo=false]         Specify if you are in a monorepo context
 * @setting     {Boolean}       [checkExistence=true]    Specify if you want to check if the vendor dir exists
 *
 * @snippet         __nodeModulesDir($1)
 *
 * @example         js
 * import { __nodeModulesDir } from '@lotsof/sugar/composer`;
 * __nodeModulesDir('lodash');
 *
 * @since       2.0.0
 * @author         Olivier Bossel <olivier.bossel@gmail.com> (https://lotsof.dev)
 */
export interface InodeModulesDirSettings {
    cwd: string;
    monorepo: boolean;
    checkExistence: boolean;
}
export default function nodeModulesDir(settings?: Partial<InodeModulesDirSettings>): any;
