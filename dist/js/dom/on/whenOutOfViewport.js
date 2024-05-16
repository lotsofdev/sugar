// @ts-nocheck
export default function __whenOutOfViewport(elm, settings = {}) {
    return new Promise((resolve, reject) => {
        settings = Object.assign({ offset: '10px' }, settings);
        let isInViewport = false;
        const _cb = () => {
            if (!isInViewport) {
                observer.disconnect();
                resolve(elm);
            }
        };
        const observer = new IntersectionObserver((entries, observer) => {
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
        observer.observe(elm);
    });
}
//# sourceMappingURL=whenOutOfViewport.js.map