// @ts-nocheck
import __WhenInteractSettingsInterface from './interface/WhenInteractSettingsInterface';
export default function __whenInteract(elm, settings) {
    return new Promise((resolve, reject) => {
        settings = (__WhenInteractSettingsInterface.apply(settings !== null && settings !== void 0 ? settings : {}));
        function interacted(interaction) {
            // resolving the promise
            resolve(interaction);
            elm.removeEventListener('pointerover', pointerover);
            elm.removeEventListener('pointerout', pointerout);
            elm.removeEventListener('pointerdown', pointerdown);
            elm.removeEventListener('touchstart', touchstart);
            elm.removeEventListener('touchend', touchend);
            elm.removeEventListener('focus', focus);
            elm.removeEventListener('focusin', focus);
        }
        function pointerover(e) {
            interacted('pointerover');
        }
        if (settings.pointerover) {
            elm.addEventListener('pointerover', pointerover);
        }
        function pointerout(e) {
            interacted('pointerout');
        }
        if (settings.pointerout) {
            elm.addEventListener('pointerout', pointerout);
        }
        function pointerdown(e) {
            interacted('pointerdown');
        }
        if (settings.pointerdown) {
            elm.addEventListener('pointerdown', pointerdown);
        }
        function touchstart(e) {
            interacted('touchstart');
        }
        if (settings.touchstart) {
            elm.addEventListener('touchstart', touchstart, {
                passive: true,
            });
        }
        function touchend(e) {
            interacted('touchend');
        }
        if (settings.touchend) {
            elm.addEventListener('touchend', touchend);
        }
        function focus(e) {
            interacted('focus');
        }
        if (settings.focus === true) {
            elm.addEventListener('focus', focus);
            elm.addEventListener('focusin', focus);
        }
    });
}
//# sourceMappingURL=whenInteract.js.map