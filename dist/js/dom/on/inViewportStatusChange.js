// @ts-nocheck
import __SPromise from '@coffeekraken/s-promise';
export default function __inViewportStatusChange($elm, settings) {
    let status = 'out', observer, isInViewport = false;
    settings = Object.assign({ offset: '10px' }, (settings !== null && settings !== void 0 ? settings : {}));
    return new __SPromise(({ emit }) => {
        const _cb = () => {
            if (!isInViewport && status === 'in') {
                status = 'out';
                emit('leave', $elm);
            }
            else if (isInViewport && status === 'out') {
                status = 'in';
                emit('enter', $elm);
            }
        };
        observer = new IntersectionObserver((entries, observer) => {
            if (!entries.length)
                return;
            const entry = entries[0];
            if (entry.intersectionRatio > 0) {
                isInViewport = true;
            }
            else {
                isInViewport = false;
            }
            _cb();
        }, {
            root: null, // viewport
            rootMargin: settings.offset,
            threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
        });
        observer.observe($elm);
    }).on('cancel', () => {
        var _a;
        (_a = observer.disconnect) === null || _a === void 0 ? void 0 : _a.call(observer);
    });
}
//# sourceMappingURL=inViewportStatusChange.js.map