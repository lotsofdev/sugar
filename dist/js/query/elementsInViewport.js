// @ts-nocheck
import __isInViewport from '../is/isInViewport';
export default function __elementsInViewport(settings = {}) {
    var _a, _b;
    // extend settings
    settings = Object.assign({ rootNode: document.body, threshold: 10 }, settings);
    const $elementsInViewport = [];
    // get all elements
    const $elms = Array.from((_b = (_a = settings.rootNode) === null || _a === void 0 ? void 0 : _a.querySelectorAll('*:not(html,body,head,script,style,template)')) !== null && _b !== void 0 ? _b : []);
    // loop on each elements until some are not in the viewport, then stop
    let currentThreshold = 0;
    for (let [i, $elm] of $elms.entries()) {
        if (currentThreshold >= settings.threshold) {
            break;
        }
        if (!__isInViewport($elm)) {
            currentThreshold++;
            continue;
        }
        $elementsInViewport.push($elm);
    }
    // return the elements
    return $elementsInViewport;
}
//# sourceMappingURL=elementsInViewport.js.map