// @ts-nocheck
import __SPromise from '@coffeekraken/s-promise';
import __uniqid from '../../string/uniqid';
export default function __whenVisible($elm, settings) {
    const pro = new __SPromise(({ resolve, reject, emit }) => {
        const finalSettings = Object.assign({ whenVisible: null, whenInvisible: null, once: true }, (settings !== null && settings !== void 0 ? settings : {}));
        // store status for all listeners
        if (!$elm._whenVisibleStatus) {
            $elm._whenVisibleStatus = {};
        }
        // variables
        let isSelfVisible = false, areParentsVisible = false, closestNotVisible = null, selfObserver = null, parentObserver = null;
        // generate a uniqid for this listener
        const id = __uniqid();
        var observer = new IntersectionObserver(function (entries) {
            var _a, _b;
            if (entries[0]['intersectionRatio'] == 0) {
                // prevent from triggering multiple times the callback
                // for this listener if already invisible
                if (!$elm._whenVisibleStatus[id]) {
                    return;
                }
                // set the listener status on the element
                $elm._whenVisibleStatus[id] = false;
                // process callbacks
                (_a = finalSettings.whenInvisible) === null || _a === void 0 ? void 0 : _a.call(finalSettings, $elm);
                // event
                emit('invisible', $elm);
            }
            else {
                // "once" settings support
                if (finalSettings.once) {
                    observer.disconnect();
                }
                // prevent from triggering multiple times the callback
                // for this listener if already visible
                if ($elm._whenVisibleStatus[id]) {
                    return;
                }
                // set the listener status on the element
                $elm._whenVisibleStatus[id] = true;
                // process callbacks
                (_b = finalSettings.whenVisible) === null || _b === void 0 ? void 0 : _b.call(finalSettings, $elm);
                // event
                emit('visible', $elm);
                // resolve the promise only if the "once"
                // setting is true
                if (finalSettings.once) {
                    resolve($elm);
                }
            }
        });
        observer.observe($elm);
        pro.on('cancel', () => {
            observer === null || observer === void 0 ? void 0 : observer.disconnect();
        });
        return pro;
    });
}
//# sourceMappingURL=whenVisible.js.map