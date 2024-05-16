// @ts-nocheck
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import __parse from '../../../shared/string/parse';
import __observeAttributes from '../observe/observeAttributes';
export default function __whenAttribute(elm, attrName, settings) {
    return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
        const finalSettings = Object.assign({ check: undefined }, (settings !== null && settings !== void 0 ? settings : {}));
        if (elm.hasAttribute(attrName)) {
            const value = __parse(elm.getAttribute(attrName));
            if (finalSettings.check && finalSettings.check(value, value)) {
                resolve(value);
                return;
            }
            else if (!finalSettings.check) {
                resolve(value);
                return;
            }
        }
        const obs = __observeAttributes(elm);
        obs.on('attribute', (mutation) => {
            if (mutation.attributeName === attrName) {
                const value = __parse(mutation.target.getAttribute(mutation.attributeName));
                if (finalSettings.check &&
                    finalSettings.check(value, mutation.oldValue)) {
                    resolve(value);
                    obs.cancel();
                }
                else if (!finalSettings.check) {
                    resolve(value);
                    obs.cancel();
                }
            }
        });
    }));
}
//# sourceMappingURL=whenAttribute.js.map