import __fs from 'fs';
import __ensureDirSync from './ensureDirSync.js';
import __moveSync from './moveSync.js';
import __unlinkSync from './unlinkSync.js';
export default function __renameSync(src, newName, settings) {
    const finalSettings = Object.assign({ override: true }, (settings !== null && settings !== void 0 ? settings : {}));
    const parts = src.split('/');
    let ext = '';
    // remove the file name
    const currentName = parts.pop();
    const currentNameParts = currentName.split('.');
    const currentNameWithoutExt = currentNameParts.shift();
    const currentExt = currentNameParts.join('.');
    // handle the case where the new name has an extension
    if (newName.includes('.')) {
        ext = src.split('.').pop();
    }
    else {
        ext = currentExt;
    }
    const newPath = parts.join('/') + '/' + newName + (ext ? '.' + ext : '');
    // if want to override and file exists,
    // remove it
    if (finalSettings.override && __fs.existsSync(newPath)) {
        __unlinkSync(newPath);
    }
    // make sure we have the folder to write in
    __ensureDirSync(newPath);
    // move the file to his new destination
    __moveSync(src, newPath);
}
//# sourceMappingURL=renameSync.js.map