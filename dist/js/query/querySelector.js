// @ts-nocheck
import __isInViewport from '../is/isInViewport';
import __isVisible from '../is/isVisible';
import __closestNotVisible from './closestNotVisible';
export default function __querySelector(selector, settings = {}) {
    // extend settings
    settings = Object.assign({ visible: null, inViewport: null, rootNode: document.body }, settings);
    // grab the element into the dom
    const elm = settings.rootNode.querySelector(selector);
    // if no element, stop here
    if (!elm)
        return null;
    // check settings
    if (settings.visible === false) {
        if (__isVisible(elm) || __closestNotVisible(elm))
            return null;
    }
    else if (settings.visible === true) {
        if (!__isVisible(elm) || !__closestNotVisible(elm))
            return null;
    }
    if (settings.inViewport === false) {
        if (__isInViewport(elm))
            return null;
    }
    else if (settings.inViewport === true) {
        if (!__isInViewport(elm))
            return null;
    }
    // return the element
    return elm;
}
//# sourceMappingURL=querySelector.js.map