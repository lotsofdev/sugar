import __isPlainObject from '../is/isPlainObject';
export default function __toPlainObject(object, settings) {
    const finalSettings = Object.assign({ deep: true }, (settings !== null && settings !== void 0 ? settings : {}));
    function clean(obj) {
        const newObj = Object.assign({}, obj);
        for (let [key, value] of Object.entries(newObj)) {
            newObj[key] = value;
            if (finalSettings.deep && __isPlainObject(newObj[key])) {
                newObj[key] = clean(newObj[key]);
            }
        }
        return newObj;
    }
    const newObj = clean(object);
    return newObj;
}
//# sourceMappingURL=toPlainObject.js.map