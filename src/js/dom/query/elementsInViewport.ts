import __isInViewport from '../../is/isInViewport.js';

/**
 * @name            elementsInViewport
 * @namespace       js.dom.query
 * @type            Function
 * @platform        js
 * @status          stable
 *
 * Get all the elements that are in viewport
 *
 * @setting       {HTMLElement}     [rootNode=document.body]      Specify the root node from where you want to query
 *
 * @param 		{Object} 			settings	 		The settings of the query
 * @return 		{HTMLElement} 							The founded element
 *
 * @snippet         __elementInViewport($1)
 *
 * @todo      tests
 *
 * @example 	js
 * import { __elementsInViewport } from '@lotsof/sugar/dom';
 * const $elements = __elementsInViewport();
 *
 * @since           2.0.0
 * @author         Olivier Bossel <olivier.bossel@gmail.com> (https://lotsof.dev)
 */

export interface IElementsInViewportSettings {
  rootNode: HTMLElement;
  threshold: number;
}

export default function __elementsInViewport(
  settings: Partial<IElementsInViewportSettings> = {},
): HTMLElement[] {
  // extend settings
  const finalSettings: IElementsInViewportSettings = {
    rootNode: document.body,
    threshold: 10,
    ...settings,
  };

  const $elementsInViewport: HTMLElement[] = [];

  // get all elements
  const $elms = Array.from(
    settings.rootNode?.querySelectorAll(
      '*:not(html,body,head,script,style,template)',
    ) ?? [],
  );

  // loop on each elements until some are not in the viewport, then stop
  let currentThreshold = 0;
  for (let [i, $elm] of $elms.entries()) {
    if (currentThreshold >= finalSettings.threshold) {
      break;
    }
    if (!__isInViewport($elm as HTMLElement)) {
      currentThreshold++;
      continue;
    }
    $elementsInViewport.push($elm as HTMLElement);
  }

  // return the elements
  return $elementsInViewport;
}
