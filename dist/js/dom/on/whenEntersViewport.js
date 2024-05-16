var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// @ts-nocheck
import __isInViewport from '../is/isInViewport';
export default function __whenEntersViewport(elm, settings = {}) {
    function getRootMargin() {
        return [
            `${Math.round(window.innerHeight * 0.15 * -1)}px`,
            `${Math.round(window.innerWidth * 0.15 * -1)}px`,
            `${Math.round(window.innerHeight * 0.15 * -1)}px`,
            `${Math.round(window.innerWidth * 0.15 * -1)}px`,
        ].join(' ');
    }
    settings = Object.assign({}, settings);
    let observer, resizeTimeout;
    return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
        var _a;
        const options = {
            root: null, // relative to document viewport
            rootMargin: (_a = settings.offset) !== null && _a !== void 0 ? _a : getRootMargin(), // margin around root. Values are similar to css property. Unitless values not allowed
            threshold: 0, // visible amount of item shown in relation to root
        };
        if (__isInViewport(elm)) {
            return resolve(elm);
        }
        function onChange(changes, observer) {
            changes.forEach((change) => {
                var _a;
                if (change.intersectionRatio > 0) {
                    (_a = observer.disconnect) === null || _a === void 0 ? void 0 : _a.call(observer);
                    resolve(elm);
                }
            });
        }
        observer = new IntersectionObserver(onChange, options);
        observer.observe(elm);
        window.addEventListener('resize', (e) => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                var _a, _b;
                (_a = observer.disconnect) === null || _a === void 0 ? void 0 : _a.call(observer);
                options.rootMargin = (_b = settings.offset) !== null && _b !== void 0 ? _b : getRootMargin();
                observer = new IntersectionObserver(onChange, options);
                observer.observe(elm);
            }, 500);
        });
    }));
}
//# sourceMappingURL=whenEntersViewport.js.map