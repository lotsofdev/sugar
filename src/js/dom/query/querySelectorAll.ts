import __isInViewport from '../../is/isInViewport.js';
import __isVisible from '../../is/isVisible.js';
import __closestNotVisible from './closestNotVisible.js';

/**
 * @name            querySelectorAll
 * @namespace       js.dom.query
 * @type            Function
 * @platform        js
 * @status          stable
 *
 * Enhanced proxy of the Element.querySelectorAll function that let you specify
 * if you want elements that are visible, or even that are in the viewport
 *
 * @feature       Specify if you want nodes that are only inside or outside the viewport
 * @feature       Specify if you want nodes that are only visible or invisible
 *
 * @setting       {Boolean}       [visible=null]        Specify if you want only the visible nodes
 * @setting       {Boolean}       [inViewport=null]     Specify if you want only the nodes that are in the viewport
 * @setting       {HTMLElement}     [rootNode=document.body]      Specify the root node from where you want to query
 *
 * @param 		{String} 				selector 			The css selector to search
 * @param 		{Object} 				settings	 		The settings of the query
 * @return 		{Array}<HTMLElement> 						The founded elements
 *
 * @todo      tests
 *
 * @snippet         __querySelectorAll($1)
 *
 * @example 	js
 * import { __querySelectorAll } from '@coffeekraken/sugar/dom';
 * // simple query
 * const elms = __querySelectorAll('.a-cool-css-selector');
 *
 * // get elements that are in the viewport
 * const elms = __querySelectorAll('.a-cool-css-selector', {
 * 		inViewport : true
 * });
 *
 * @since           2.0.0
 * @author         Olivier Bossel <olivier.bossel@gmail.com> (https://coffeekraken.io)
 */

export interface IQuerySelectorAllSettings {
  visible: boolean | null;
  inViewport: boolean | null;
  rootNode: HTMLElement;
}

export default function __querySelectorAll(
  selector: string,
  settings: Partial<IQuerySelectorAllSettings> = {},
): HTMLElement[] {
  // extend settings
  const finalSettings: IQuerySelectorAllSettings = {
    visible: null,
    inViewport: null,
    rootNode: document.body,
    ...settings,
  };

  // results array
  const results = [];

  // grab the element into the dom
  const elms = finalSettings.rootNode.querySelectorAll(selector);

  // loop on the found elements
  [].forEach.call(elms, ($elm) => {
    // check settings
    if (settings.visible === false) {
      if (__isVisible($elm) || __closestNotVisible($elm)) return;
    } else if (settings.visible === true) {
      if (!__isVisible($elm) || !__closestNotVisible($elm)) return;
    }
    if (settings.inViewport === false) {
      if (__isInViewport($elm)) return;
    } else if (settings.inViewport === true) {
      if (!__isInViewport($elm)) return;
    }

    // add the element to the result array
    results.push($elm);
  });

  // return the elements
  return results;
}
