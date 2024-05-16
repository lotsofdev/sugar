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
import __SPromise from '@coffeekraken/s-promise';
import __fastdom from 'fastdom';
import __deepMerge from '../../../shared/object/deepMerge';
import __uniqid from '../../string/uniqid';
import __when from '../detect/when';
export default function __querySelectorLive(selector, cb = null, settings = {}, _isFirstLevel = true) {
    var _a, _b, _c, _d, _e, _f;
    let _emit, _pipe, noScopeSelector, observer, firstSelected = false, canceled = false, uid = __uniqid();
    const selectedNodes = [];
    // extend settings
    settings = __deepMerge({
        rootNode: document,
        once: true,
        afterFirst: null,
        scopes: true,
        firstOnly: false,
        attributes: [],
        when: undefined,
    }, settings);
    // settings.scopes = false;
    const innerPromises = [];
    // process selectors when scopes are true
    if (settings.scopes) {
        noScopeSelector = selector
            .split(',')
            .map((sel) => {
            return `${sel.trim()}:not([s-scope] ${sel.trim()})`;
        })
            .join(',');
    }
    const pro = new __SPromise(({ resolve, reject, emit, pipe }) => {
        _emit = emit;
        _pipe = pipe;
    });
    function isCanceled() {
        return selectedNodes.length && canceled && _isFirstLevel;
    }
    if (isCanceled()) {
        return;
    }
    function handleNode(node, sel) {
        if (isCanceled()) {
            return;
        }
        // emit our node
        _emit === null || _emit === void 0 ? void 0 : _emit('node', {
            node,
            cancel() {
                pro.cancel();
            },
        });
        // callback with our node
        cb === null || cb === void 0 ? void 0 : cb(node, {
            cancel() {
                pro.cancel();
            },
        });
        // handle firstOnly setting
        if (settings.firstOnly) {
            pro.cancel();
        }
        // mark our node as selected at least 1 time
        if (!selectedNodes.includes(node)) {
            selectedNodes.push(node);
        }
    }
    function processNode(node, sel) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!node.matches || isCanceled()) {
                return;
            }
            // if the node match and has not already been emitted
            if (node.matches(selector) &&
                (!settings.once || !selectedNodes.includes(node))) {
                // handle the "when" setting
                if (settings.when) {
                    yield __when(node, settings.when);
                    if (isCanceled()) {
                        return;
                    }
                    handleNode(node, sel);
                }
                else {
                    handleNode(node, sel);
                }
            }
            // search inside our node
            findAndProcess(node, sel);
        });
    }
    function findAndProcess($root, sel) {
        if (!$root.querySelectorAll || isCanceled()) {
            return;
        }
        const nodes = Array.from($root === null || $root === void 0 ? void 0 : $root.querySelectorAll(sel));
        nodes.forEach((node) => {
            processNode(node, sel);
        });
    }
    if (settings.scopes &&
        (settings.rootNode === document ||
            !((_b = (_a = settings.rootNode) === null || _a === void 0 ? void 0 : _a.hasAttribute) === null || _b === void 0 ? void 0 : _b.call(_a, 's-scope')))) {
        let isAfterCalledByScopeId = {};
        // search for scopes and handle nested nodes
        innerPromises.push(__querySelectorLive('[s-scope]', ($scope) => __awaiter(this, void 0, void 0, function* () {
            // get or generate a new id
            const scopeId = $scope.id || `s-scope-${__uniqid()}`;
            if ($scope.id !== scopeId) {
                $scope.setAttribute('id', scopeId);
            }
            if (isCanceled()) {
                return;
            }
            yield __when($scope, 'nearViewport');
            if (isCanceled()) {
                return;
            }
            innerPromises.push(__querySelectorLive(selector, ($elm) => {
                // findAndProcess($scope, selector);
                processNode($elm, selector);
            }, Object.assign({}, settings, {
                rootNode: $scope,
                scopes: false,
                afterFirst() {
                    if (isAfterCalledByScopeId[scopeId] &&
                        $scope._sQuerySelectorLiveScopeDirty) {
                        return;
                    }
                    $scope._sQuerySelectorLiveScopeDirty = true;
                    isAfterCalledByScopeId[scopeId] = true;
                    __fastdom.mutate(() => {
                        $scope.classList.add('ready');
                        $scope.setAttribute('ready', 'true');
                    });
                },
            }), true));
        }), Object.assign({}, settings, {
            firstOnly: false,
            scopes: false,
        }), false));
        // handle things not in a scope
        innerPromises.push(__querySelectorLive(noScopeSelector, ($elm) => {
            // findAndProcess($scope, selector);
            processNode($elm, selector);
        }, Object.assign({}, settings, {
            scopes: false,
        }), false));
        // after first callback
        (_c = settings.afterFirst) === null || _c === void 0 ? void 0 : _c.call(settings);
    }
    else {
        observer = new MutationObserver((mutations, obs) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName) {
                    processNode(mutation.target, selector);
                }
                if (mutation.addedNodes) {
                    mutation.addedNodes.forEach((node) => {
                        processNode(node, selector);
                    });
                }
            });
        });
        let observeSettings = {
            childList: true,
            subtree: true,
        };
        selector
            .split(',')
            .map((l) => l.trim())
            .forEach((sel) => {
            const attrMatches = sel.match(/\[[^\]]+\]/gm);
            if (attrMatches === null || attrMatches === void 0 ? void 0 : attrMatches.length) {
                attrMatches.forEach((attrStr) => {
                    var _a, _b;
                    const attrName = attrStr
                        .split('=')[0]
                        .replace(/^\[/, '')
                        .replace(/\]$/, '');
                    if (!((_a = settings.attributes) === null || _a === void 0 ? void 0 : _a.includes(attrName))) {
                        (_b = settings.attributes) === null || _b === void 0 ? void 0 : _b.push(attrName);
                    }
                });
            }
        });
        if ((_d = settings.attributes) === null || _d === void 0 ? void 0 : _d.length) {
            observeSettings = Object.assign(Object.assign({}, observeSettings), { attributes: (_e = settings.attributes) === null || _e === void 0 ? void 0 : _e.length, attributeFilter: settings.attributes.length
                    ? settings.attributes
                    : null });
        }
        observer.observe(settings.rootNode, observeSettings);
        // first query
        findAndProcess(settings.rootNode, selector);
        // after first callback
        (_f = settings.afterFirst) === null || _f === void 0 ? void 0 : _f.call(settings);
    }
    // handle cancel
    pro.on('cancel', () => {
        canceled = true;
        innerPromises.forEach((promise) => {
            promise.cancel();
        });
        observer === null || observer === void 0 ? void 0 : observer.disconnect();
    });
    return pro;
}
//# sourceMappingURL=querySelectorLive.js.map