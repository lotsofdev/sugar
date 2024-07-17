import __isPath from '../../shared/is/isPath.js';
export default function __folderPath(path, settings) {
    const finalSettings = Object.assign({ checkExistence: false }, (settings !== null && settings !== void 0 ? settings : {}));
    if (finalSettings.checkExistence) {
        if (!__isPath(path))
            return '';
    }
    const parts = path.split('/');
    if (parts.length <= 1) {
        return '';
    }
    return parts.slice(0, -1).join('/');
}
//# sourceMappingURL=folderPath.js.map