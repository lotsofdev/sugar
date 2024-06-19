/**
 * @name                    addPackageDependencies
 * @namespace               node.package
 * @type                    Function
 * @platform                node
 * @status                  beta
 * @async
 *
 * This function allows you to add some dependencies to a package.json file
 *
 * @param       {Object}        deps                    The dependencies to add
 * @param       {IAddPackageDependenciesSettings}     [settings={}]       Some settings to configure your process
 * @return      {Promise<any>}                      A promise with the package.json content as object
 *
 * @setting     {String}        [cwd=process.cwd()]        The directory in which you want to start the research
 * @setting     {Boolean}       [dev=false]               Specify if you want to add the dependencies to the devDependencies
 * @setting     {Boolean}       [global=false]            Specify if you want to add the dependencies to the global package.json
 * @setting     {Boolean}       [install=false]           Specify if you want to install the dependencies after adding them
 * @setting     {Boolean}       [override=false]          Specify if you want to override the dependencies if they already exists
 *
 * @snippet         __addPackageDependencies($1, $2)
 *
 * @example         js
 * import { __addPackageDependencies } from '@lotsof/sugar/package`;
 * __addPackageDependencies('lodash');
 *
 * @since       2.0.0
 * @author         Olivier Bossel <olivier.bossel@gmail.com> (https://lotsof.dev)
 */
export interface IAddPackageDependenciesSettings {
    cwd: string;
    dev: boolean;
    global: boolean;
    install: boolean;
    override: boolean;
}
export default function __addPackageDependencies(deps: Record<string, string>, settings: Partial<IAddPackageDependenciesSettings>): any;
