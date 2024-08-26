/**
 * @name 		        hotkey
 * @namespace           js.keyboard
 * @type                Function
 * @platform            js
 * @status              stable
 *
 * This function allows you to register a hotkey on the passed element.
 * You can specify the hotkey using the following syntax:
 * - ctrl+a
 * - shift+ctrl+a
 * - a
 * This function take care of avoiding to call your callback when the active element
 * is an input, a textarea or an editable content with the "contenteditable" attribute,
 * unless:
 * - the "meta" or "ctrl" key is used in the hotkey.
 * - the pressed key is the "escape" key.
 *
 *
 * @param       {String}        key         The key to listen for
 * @param       {Function}      callback    The callback to call when the hotkey is pressed
 * @param       {THotkeySettings}      [settings={}]       Some settings to configure your hotkey
 * @return      {THotkeyApi}                          An object with a cancel method that you can call to cancel the hotkey
 *
 * @setting    {HTMLElement}       [ctx=document.body]       The context in which to listen for the hotkey
 * @setting    {Boolean}           [preventDefault=true]    Specify if you want to prevent the default behavior of the hotkey
 *
 * @todo      tests
 *
 * @snippet         __hotkey($1, () => {
 *      $2
 * });
 *
 * @example    js
 * import { __hotkey } from '@lotsof/sugar/keyboard'
 * const hotkeyApi = __hotkey('ctrl+a', (e) => {
 *  console.log('Hotkey pressed');
 * });
 *
 * // if you want to cancel the hotkey
 * hotkeyApi.cancel();
 *
 * @since       2.0.0
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://lotsof.dev)
 */
export type THotkeySettings = {
    ctx: HTMLElement | Document;
    preventDefault: boolean;
};
export type THotkeyApi = {
    cancel: Function;
};
export default function __hotkey(key: string, callback: Function, settings?: Partial<THotkeySettings>): THotkeyApi;
