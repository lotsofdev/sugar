/**
 * @name                    composerVendorDir
 * @namespace               node.composer
 * @type                    Function
 * @platform                node
 * @status                  beta
 *
 * This function simply returns the "vendor" directory path
 *
 * @param       {IComposerVendorDirSettings}      [settings={}]       Some settings to configure your process
 * @return      {String}                      The package path
 *
 * @setting     {String}        [cwd=process.cwd()]        The directory in which you want to start the research
 * @setting     {Boolean}       [monorepo=false]         Specify if you are in a monorepo context
 * @setting     {Boolean}       [checkExistence=true]    Specify if you want to check if the vendor dir exists
 *
 * @snippet         __composerVendorDir($1)
 *
 * @example         js
 * import { __composerVendorDir } from '@lotsof/sugar/composer`;
 * __composerVendorDir('lodash');
 *
 * @since       2.0.0
 * @author         Olivier Bossel <olivier.bossel@gmail.com> (https://lotsof.dev)
 */
export interface IComposerVendorDirSettings {
    cwd: string;
    monorepo: boolean;
    checkExistence: boolean;
}
export default function composerVendorDir(settings?: Partial<IComposerVendorDirSettings>): any;
