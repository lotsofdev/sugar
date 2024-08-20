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
 *
 * @param       {String}        key         The key to listen for
 * @param       {Function}      callback    The callback to call when the hotkey is pressed
 * @param       {THotkeySettings}      [settings={}]       Some settings to configure your hotkey
 * @return      {THotkeyApi}                          An object with a cancel method that you can call to cancel the hotkey
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
  $elm: HTMLElement;
  preventDefault: boolean;
};

export type THotkeyApi = {
  cancel: Function;
};

export default function __hotkey(
  key: string,
  callback: Function,
  settings?: THotkeySettings,
): THotkeyApi {
  const finalSettings: THotkeySettings = {
    $elm: document.body,
    preventDefault: true,
    ...(settings ?? {}),
  };

  const keys = key.split('+'),
    finalKey = keys.pop();

  const _handler = (e) => {
    // handle the final key
    if (e.key !== finalKey) {
      return;
    }

    // handle the other keys (ctrl, shift, etc...)
    if (keys.length) {
      for (const k of keys) {
        if (!e[`${k}Key`]) {
          return;
        }
      }
    }

    // prevent default if needed
    if (finalSettings.preventDefault) {
      e.preventDefault();
    }

    // call the callback
    callback(e);
  };

  finalSettings.$elm.addEventListener('keyup', _handler);

  return {
    cancel: () => {
      finalSettings.$elm.removeEventListener('keyup', _handler);
    },
  };
}
