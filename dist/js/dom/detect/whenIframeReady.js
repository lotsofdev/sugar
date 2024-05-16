// @ts-nocheck
export default function __whenIframeReady($iframe, settings) {
    return new Promise((resolve) => {
        var _a, _b;
        if ((_b = (_a = $iframe.contentWindow) === null || _a === void 0 ? void 0 : _a.document) === null || _b === void 0 ? void 0 : _b.body) {
            return resolve($iframe);
        }
        let int = setInterval(() => {
            var _a, _b;
            if ((_b = (_a = $iframe.contentWindow) === null || _a === void 0 ? void 0 : _a.document) === null || _b === void 0 ? void 0 : _b.body) {
                clearInterval(int);
                resolve(null);
            }
        }, 10);
    });
}
//# sourceMappingURL=whenIframeReady.js.map