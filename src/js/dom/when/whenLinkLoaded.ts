/**
 * @name            whenLinkLoaded
 * @namespace       js.dom.detect
 * @type            Function
 * @platform        js
 * @status          stable
 *
 * Wait until the passed HTMLLinkElement is fully loaded
 *
 * @feature       Promise based API
 *
 * @param 		{HTMLLinkElement} 			link  		The link tag to check the loading state
 * @return 		{Promise} 								The promise that will be resolved
 *
 * @todo      tests
 *
 * @snippet         __whenLinkLoaded($1)
 * __whenLinkLoaded($1).then(\$elm => {
 *      $2
 * });
 *
 * @example  	js
 * import { __whenLinkLoaded } from '@lotsof/sugar/dom'
 * __whenLinkLoaded(myCoolHTMLLinlElement).then($link => {
 * 		// do something when the link is loaded
 * });
 *
 * @since           2.0.0
 * @author         Olivier Bossel <olivier.bossel@gmail.com> (https://lotsof.dev)
 */
function alreadyLoaded(link: HTMLLinkElement): boolean {
  const href = link.href;
  let result = false;
  for (let i = 0; i < document.styleSheets.length; i++) {
    if (
      document.styleSheets[i].href &&
      document.styleSheets[i].href?.match(href)
    ) {
      // the css is already loaded
      result = true;
    } else if (i == document.styleSheets.length - 1) {
      // Fallback. There is no request for the css file.
    }
  }
  return result;
}

export default function __whenLinkLoaded(
  $link: HTMLLinkElement,
  cb?: Function,
): Promise<HTMLLinkElement> {
  return new Promise((resolve, reject) => {
    // check if image is already loaded
    if (alreadyLoaded($link)) {
      // resolve promise
      resolve($link);
      // call the cb if exist
      cb?.($link);
    } else {
      const img = document.createElement('img');

      // wait until loaded

      // we load the css into an image
      // when the image is in error more
      // that mean that the css is loaded
      img.addEventListener('error', (e) => {
        // resolve the promise
        resolve($link);
        // cb if exist
        cb?.($link);
      });

      // set url
      img.src = $link.href;
    }
  });
}
