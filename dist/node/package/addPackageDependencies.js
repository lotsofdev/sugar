import __fs from 'fs';
import __readJsonSync from '../fs/readJsonSync.js';
import __writeJsonSync from '../fs/writeJsonSync.js';
import __packageRootDir from './packageRootDir.js';
import * as __semver from 'semver';
import __childProcess from 'child_process';
export default function __addPackageDependencies(deps, settings) {
    settings = Object.assign({ cwd: process.cwd(), dev: false, global: false, install: false }, (settings !== null && settings !== void 0 ? settings : {}));
    return new Promise((resolve, reject) => {
        // get the package.json file path
        const packageJsonPath = `${__packageRootDir(settings.cwd)}/package.json`;
        if (!__fs.existsSync(packageJsonPath)) {
            throw new Error(`No package.json file found at "<yellow>${packageJsonPath}</yellow>"`);
        }
        // read the current package.json file
        const packageJson = __readJsonSync(packageJsonPath);
        const depProp = settings.dev
            ? 'devDependencies'
            : settings.global
                ? 'globalDependencies'
                : 'dependencies';
        // loop on the deps to add
        for (let [name, version] of Object.entries(deps)) {
            // make sure requested stack exists
            if (!packageJson[depProp]) {
                packageJson[depProp] = {};
            }
            // if the dependency des not exists, add it
            if (!packageJson[depProp][name]) {
                packageJson[depProp][name] = version;
                continue;
            }
            // if override
            if (settings.override) {
                packageJson[depProp][name] = version;
                continue;
            }
            const componentVersion = __semver.minVersion(version), projectVersion = __semver.coerce(packageJson[depProp][name]);
            // check if the dependency satifdy the semver range
            if (componentVersion.major < projectVersion.major) {
                throw new Error(`The dependency "<yellow>${name}</yellow>"@<magenta>${version}</magenta> that you want to add already exists in the package.json and does not satisfy the version <magenta>${packageJson[depProp][name]}</magenta> required by the project...`);
            }
        }
        // write the new package.json file
        __writeJsonSync(packageJsonPath, packageJson);
        // check if we need to install the dependencies
        if (settings.install) {
            __childProcess.execSync('npm install', {
                cwd: __packageRootDir(settings.cwd),
                stdio: 'inherit',
            });
        }
        // resolve the promise with the new package.json content
        resolve(packageJson);
    });
}
//# sourceMappingURL=addPackageDependencies.js.map