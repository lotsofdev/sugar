import __uniqid from '../../../js/string/uniqid.js';

/**
 * @name                injectStyle
 * @namespace           js.dom.inject
 * @type                Function
 * @platform            js
 * @status              stable
 *
 * Inject a passed style string in the DOM
 *
 * @param         {String}          style         The style to inject in DOM
 * @param           {Partial<IInjectStyleSettings>}     [settings=null]         Some settings to configure your injection
 * @return                          {HTMLStyleElement}      The injected HTMLStyleElement node
 *
 * @setting         {String}        id          An id for the injected style tag
 * @setting         {HTMLElement}   [rootNode=undefined]        A node in which to inject the style
 *
 * @snippet         __injectStyle($1)
 *
 * @todo        tests
 *
 * @example       js
 * import { __injectStyle } from '@coffeekraken/sugar/dom';
 *  __injectStyle('a { color: red; }');
 *
 * @since       2.0.0
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://coffeekraken.io)
 */

export interface IInjectStyleSettings {
  id: string;
  rootNode: HTMLElement;
}

export default function __injectStyle(
  style: any,
  settings?: Partial<IInjectStyleSettings>,
) {
  const finalSettings = <IInjectStyleSettings>{
    id: `injected-style-${__uniqid()}`,
    rootNode: undefined,
    ...(settings ?? {}),
  };

  if (document.querySelector(`#${finalSettings.id}`)) return;

  const $tag = document.createElement('style');
  $tag.type = 'text/css';
  $tag.setAttribute('id', finalSettings.id);
  $tag.innerHTML = style;

  if (finalSettings.rootNode) {
    finalSettings.rootNode.appendChild($tag);
  } else {
    const $firstLink = document.querySelector('head link[rel="stylesheet"]');
    if ($firstLink) {
      $firstLink.parentElement?.insertBefore($tag, $firstLink);
    } else {
      document.head.appendChild($tag);
    }
  }
  return $tag;
}
