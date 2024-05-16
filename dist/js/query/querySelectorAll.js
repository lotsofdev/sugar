// @ts-nocheck
import __isInViewport from '../is/isInViewport';
import __isVisible from '../is/isVisible';
import __closestNotVisible from './closestNotVisible';
export default function __querySelectorAll(selector, settings = {}) {
    // extend settings
    settings = Object.assign({ visible: null, inViewport: null, rootNode: document.body }, settings);
    // results array
    const results = [];
    // grab the element into the dom
    const elms = settings.rootNode.querySelectorAll(selector);
    // loop on the found elements
    [].forEach.call(elms, (elm) => {
        // check settings
        if (settings.visible === false) {
            if (__isVisible(elm) || __closestNotVisible(elm))
                return;
        }
        else if (settings.visible === true) {
            if (!__isVisible(elm) || !__closestNotVisible(elm))
                return;
        }
        if (settings.inViewport === false) {
            if (__isInViewport(elm))
                return;
        }
        else if (settings.inViewport === true) {
            if (!__isInViewport(elm))
                return;
        }
        // add the element to the result array
        results.push(elm);
    });
    // return the elements
    return results;
}
//# sourceMappingURL=querySelectorAll.js.map