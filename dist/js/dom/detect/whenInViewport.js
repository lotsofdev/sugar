// @ts-nocheck
import __SPromise from '@coffeekraken/s-promise';
import __uniqid from '../../string/uniqid';
export default function __whenInViewport($elm, settings = {}) {
    settings = Object.assign({ offset: '10px', once: true, whenIn: null, whenOut: null }, settings);
    let observer;
    // generate a uniqid for this listener
    const id = __uniqid();
    const pro = new __SPromise(({ resolve, emit }) => {
        const options = {
            root: null, // relative to document viewport
            rootMargin: settings.offset, // margin around root. Values are similar to css property. Unitless values not allowed
            threshold: 0, // visible amount of item shown in relation to root
        };
        // store status for all listeners
        if (!$elm._whenInViewportStatus) {
            $elm._whenInViewportStatus = {};
        }
        function onChange(changes) {
            changes.forEach((change) => {
                var _a, _b;
                if (change.intersectionRatio === 0) {
                    // prevent from triggering multiple times the callback
                    // for this listener if already invisible
                    if (!$elm._whenInViewportStatus[id]) {
                        return;
                    }
                    // set the listener status on the element
                    $elm._whenInViewportStatus[id] = false;
                    // process callbacks
                    (_a = settings.whenOut) === null || _a === void 0 ? void 0 : _a.call(settings, $elm);
                    // event
                    emit('out', $elm);
                }
                else {
                    // "once" settings support
                    if (settings.once) {
                        observer.disconnect();
                    }
                    // prevent from triggering multiple times the callback
                    // for this listener if already visible
                    if ($elm._whenInViewportStatus[id]) {
                        return;
                    }
                    // set the listener status on the element
                    $elm._whenInViewportStatus[id] = true;
                    // process callbacks
                    (_b = settings.whenIn) === null || _b === void 0 ? void 0 : _b.call(settings, $elm);
                    // event
                    emit('in', $elm);
                    // resolve the promise only if the "once"
                    // setting is true
                    if (settings.once) {
                        resolve($elm);
                    }
                }
            });
        }
        observer = new IntersectionObserver(onChange, options);
        observer.observe($elm);
    });
    pro.on('cancel', () => {
        observer === null || observer === void 0 ? void 0 : observer.disconnect();
    });
    return pro;
}
//# sourceMappingURL=whenInViewport.js.map