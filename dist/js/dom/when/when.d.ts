import type { IWhenEntersViewportSettings } from '../when/whenEntersViewport.js';
import type { IWhenInteractSettings } from '../when/whenInteract.js';
import type { IWhenInViewportSettings } from '../when/whenInViewport.js';
import type { IWhenNearViewportSettings } from '../when/whenNearViewport.js';
import type { IWhenOutOfViewportSettings } from '../when/whenOutOfViewport.js';
import type { IWhenStyleSheetsReadySettings } from '../when/whenStylesheetsReady.js';
import type { IWhenVisibleSettings } from '../when/whenVisible.js';
/**
 * @name            when
 * @namespace       js.dom.detect
 * @type            Function
 * @platform          js
 * @status        stable
 * @async
 *
 * This function listen for passed `trigger(s)` on the passed `HTMLElement` and resolve the promise once one of them has reached his state.
 *
 * @param       {HTMLElement}           $elm        The element to listen on
 * @param       {String|String[]}       trigger     The trigger(s) to listen on
 * @param       {IwhenSettings}      [settings={}]       Some settings like offset, etc...
 * @return      {SPromise<HTMLElement>}                 A promise resolved when all the triggers are fulfilled
 *
 * @setting         {Partial<IWhenInViewportSettings>}          [whenInViewport={}]            Some settings for the whenInViewport function
 * @setting         {Partial<IWhenNearViewportSettings>}        [whenNearViewport={}]           Some settings for the whenNearViewport function
 * @setting         {Partial<IWhenEntersViewportSettubgs>}      [whenEntersViewport={}]         Some settings for the whenEntersViewport function
 * @setting         {Partial<IWhenOutOfViewportSettings>}      [whenOutOfViewport={}]         Some settings for the whenOutOfViewport function
 * @setting         {Partial<IWhenInteractSettings>}      [whenInteract={}]         Some settings for the whenInteract function
 * @setting         {Partial<IWhenVisibleSettings>}      [whenVisible={}]         Some settings for the whenVisible function
 * @setting         {Partial<IWhenStyleSheetsReadySettings>}      [whenStylesheetsReady={}]         Some settings for the whenStylesheetsReady function
 *
 * @snippet         __when($1, $2, $3)
 * __when($1, $2).then(() => {
 *      $2
 * });
 *
 * @todo      tests
 *
 * @example         js
 * import { __when } from '@coffeekraken/sugar/dom';
 * __when($elm, 'inViewport', {
 *    whenInViewport: {
 *       offset: 50
 *    }
 * }).then(() => {
 *      // do something
 * });
 *
 * @since       2.0.0
 * @author         Olivier Bossel <olivier.bossel@gmail.com> (https://coffeekraken.io)
 */
export interface IwhenSettings {
    whenInViewport?: IWhenInViewportSettings;
    whenNearViewport?: IWhenNearViewportSettings;
    whenEntersViewport?: IWhenEntersViewportSettings;
    whenOutOfViewport?: IWhenOutOfViewportSettings;
    whenInteract?: IWhenInteractSettings;
    whenVisible?: IWhenVisibleSettings;
    whenStylesheetsReady?: IWhenStyleSheetsReadySettings;
}
export type TWhenTrigger<string> = ('direct' | 'directly' | 'inViewport' | 'nearViewport' | 'enterViewport' | 'outOfViewport' | 'interact' | 'visible' | 'domReady' | 'stylesheetsReady' | 'animationEnd')[];
export declare const WhenTriggers: string[];
export default function __when($elm: HTMLElement, trigger: TWhenTrigger[], settings?: IwhenSettings): Promise<any>;
