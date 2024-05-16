import __uniqid from '../../string/uniqid.js';

/**
 * @name                whenInViewport
 * @namespace           js.dom.detect
 * @type                Function
 * @platform            js
 * @status              beta
 * @async
 *
 * Monitor an HTMLElement to be notified when it is in the viewport
 *
 * @feature       Promise based API
 * @feature       Some settings available to tweak the behavior
 *
 * @setting     {String}      [offset='10px']         An offset to detect sooner or later the element entering in the viewport
 *
 * @param 		{HTMLElement} 				elm 					The element to monitor
 * @param 		{Partial<IWhenInViewportSettings>} 					[settings={}] 		Some settings to tweak the detection behavior
 * @return 		(SPromise<HTMLElement>) 											The promise that will be resolved when the element is in the viewport
 *
 * @snippet         __whenInViewport($1)
 * __whenInViewport($1).then(\$elm => {
 *      $2
 * });
 *
 * @todo      tests
 *
 * @example 	js
 * import { __whenInViewport } from '@coffeekraken/sugar/dom'
 * const promise = __whenInViewport(myCoolHTMLElement).then((elm) => {
 * 		// do something with your element that has entered the viewport...
 * });
 * // when you want to stop listening
 * promise.cancel();
 *
 * @since           2.0.0
 * @author         Olivier Bossel <olivier.bossel@gmail.com> (https://coffeekraken.io)
 */

export interface IWhenInViewportSettings {
  offset: string;
  whenIn: Function | undefined;
  whenOut: Function | undefined;
  once: boolean;
}

const __whenInViewportStatuses = new WeakMap();

export default function __whenInViewport(
  $elm: HTMLElement,
  settings?: Partial<IWhenInViewportSettings>,
): Promise<HTMLElement> {
  const finalSettings: IWhenInViewportSettings = {
    offset: '10px',
    once: true,
    whenIn: undefined,
    whenOut: undefined,
    ...(settings ?? {}),
  };

  let observer;

  function getRootMargin(): string {
    return [
      `${Math.round(window.innerHeight * 0.15 * -1)}px`,
      `${Math.round(window.innerWidth * 0.15 * -1)}px`,
      `${Math.round(window.innerHeight * 0.15 * -1)}px`,
      `${Math.round(window.innerWidth * 0.15 * -1)}px`,
    ].join(' ');
  }

  // generate a uniqid for this listener
  const id = __uniqid();

  const rootMargin = finalSettings.offset
    ? `${finalSettings.offset}`
    : getRootMargin();

  const pro = new Promise((resolve) => {
    const options = {
      root: null, // relative to document viewport
      rootMargin,
      threshold: 0, // visible amount of item shown in relation to root
    };

    // store status for all listeners
    let statuses = __whenInViewportStatuses.get($elm) ?? {};
    __whenInViewportStatuses.set($elm, statuses);

    function onChange(changes) {
      changes.forEach((change) => {
        if (change.intersectionRatio === 0) {
          // prevent from triggering multiple times the callback
          // for this listener if already invisible
          if (!statuses[id]) {
            return;
          }

          // set the listener status on the element
          statuses[id] = false;

          // process callbacks
          finalSettings.whenOut?.($elm);
        } else {
          // "once" finalSettings support
          if (finalSettings.once) {
            observer.disconnect();
          }

          // prevent from triggering multiple times the callback
          // for this listener if already visible
          if (statuses[id]) {
            return;
          }

          // set the listener status on the element
          statuses[id] = true;

          // process callbacks
          finalSettings.whenIn?.($elm);

          // resolve the promise only if the "once"
          // setting is true
          if (finalSettings.once) {
            resolve($elm);
          }
        }
      });
    }

    observer = new IntersectionObserver(onChange, options);
    observer.observe($elm);
  });

  pro.finally(() => {
    observer?.disconnect();
  });

  return pro as Promise<HTMLElement>;
}
