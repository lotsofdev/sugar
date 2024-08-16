/**
 * @name            viewportEvents
 * @namespace       js.dom.event
 * @type            Function
 * @platform        js
 * @status          stable
 * @async
 *
 * Monitor when the passed element enter or exit the viewport
 *
 * @param 		{HTMLElement} 						$elm  		The element to monitor
 * @param       {Partial<TViewportEventsSettings>}      [$settings={}]      Some settings to configure your detector
 * @return 		{HTMLElement} 		                    The passed HTMLElement
 *
 * @setting         {String}        [offset='10px']             An offset to detect the in/out earlier or later
 * @setting         {Boolean}       [once=false]                Specify if you want to event to be dispatched only once
 *
 * @event       viewport.in               Dispatched when the passed element enters the viewport
 * @event       viewport.out               Dispatched when the passed element exits the viewport
 *
 * @snippet         __viewportEvents($1)
 * __viewportEvents($1).addEventListener('viewport.enter', (e) => {
 *      $2
 * });
 *
 * @todo      tests
 *
 * @example  	js
 * import { __viewportEvents } from '@lotsof/sugar/dom';
 * __viewportEvents($1).addEventListener('viewport.enter', (e) => {
 *      // do something
 * });
 *
 * @since           2.0.0
 * @author         Olivier Bossel <olivier.bossel@gmail.com> (https://lotsof.dev)
 */
export type TViewportEventsSettings = {
  offset: number | string;
  once: boolean;
};

const _viewportEventsInited = new WeakMap();

export default function __viewportEvents(
  $elm: HTMLElement,
  settings?: Partial<TViewportEventsSettings>,
): HTMLElement {
  let observer,
    status = 'out';

  if (_viewportEventsInited.has($elm)) {
    return $elm;
  }
  _viewportEventsInited.set($elm, true);

  const finalSettings: TViewportEventsSettings = {
    offset: 25,
    once: false,
    ...(settings ?? {}),
  };

  observer = new IntersectionObserver(
    (entries, observer) => {
      if (!entries.length) return;
      const entry = entries.pop();
      if (!entry) return;
      if (entry.intersectionRatio > 0) {
        if (status === 'in') {
          return;
        }
        status = 'in';
        $elm.dispatchEvent(
          new CustomEvent('viewport.in', {
            bubbles: true,
          }),
        );
        if (finalSettings?.once) {
          observer.disconnect();
        }
      } else {
        if (status === 'out') {
          return;
        }
        status = 'out';
        $elm.dispatchEvent(
          new CustomEvent('viewport.out', {
            bubbles: true,
          }),
        );
      }
    },
    {
      root: null, // viewport
      rootMargin:
        typeof finalSettings.offset === 'string'
          ? finalSettings.offset
          : `${finalSettings.offset}px`,
      threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
    },
  );

  observer.observe($elm);

  return $elm;
}
