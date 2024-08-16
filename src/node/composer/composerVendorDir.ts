import __fs from 'fs';
import __packageRootDir from '../package/packageRootDir.js';

/**
 * @name                    composerVendorDir
 * @namespace               node.composer
 * @type                    Function
 * @platform                node
 * @status                  beta
 *
 * This function simply returns the "vendor" directory path
 *
 * @param       {TComposerVendorDirSettings}      [settings={}]       Some settings to configure your process
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
export type TComposerVendorDirSettings = {
  cwd: string;
  monorepo: boolean;
  checkExistence: boolean;
};

export default function composerVendorDir(
  settings?: Partial<TComposerVendorDirSettings>,
): any {
  const set = <TComposerVendorDirSettings>{
    cwd: process.cwd(),
    monorepo: false,
    checkExistence: true,
    ...(settings ?? {}),
  };

  let vendorDir = `${__packageRootDir(set.cwd, {
    highest: set.monorepo,
  })}/vendor`;

  if (set.checkExistence && !__fs.existsSync(vendorDir)) {
    throw new Error(
      `The composer vendors directory "<yellow>${vendorDir}</yellow>" does not exists...`,
    );
  }

  return vendorDir;
}
