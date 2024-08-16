/**
 * @name             onSwipe
 * @namespace        js.dom.detect
 * @type             Function
 * @platform         js
 * @status           stable
 * @async
 *
 * Detect swipes gestures on touch devices.
 *
 * @feature     Multi directional swipe detection (left, up, right, down)
 * @feature     Threshold setting
 *
 * @setting     {Number}      [threshold=100]       The minimum distance the user has to swipe before detection
 *
 * @param       {HTMLElement}         elm         The HTMLElement on which to detect the swipe
 * @param       {Function}            cb          The function to call on swipe. The callback function has as parameter an object that containthe swipe direction like left, right, up and down
 * @param       {Partial<TOnSwipeSettings>}     [settings={}]           Some settings to configure your swipe detection
 *
 * @setting       {Number}              [threshold=100]       The swipe threshold
 *
 * @snippet         __onSwipe($1, $2)
 * __onSwipe($1, swipe => {
 *      $2
 * });
 *
 * @todo        enhance the typing of the callback
 * @todo      tests
 *
 * @example 	js
 * import { __onSwipe } from '@lotsof/sugar/dom'
 * __onSwipe(myCoolElm, (swipe) => {
 * 	// check the swipe direction
 * 	if (swipe.left) {
 * 		// do something...
 * 	}
 * 	// support : left, right, up, down
 * 	// etc...
 * }, {
 * 	threshold : 50
 * });
 *
 * @see 		https://gist.github.com/SleepWalker/da5636b1abcbaff48c4d
 * @since           2.0.0
 * @author         Olivier Bossel <olivier.bossel@gmail.com> (https://lotsof.dev)
 */

export type TOnSwipeSettings = {
  threshold: number;
};

export type TOnSwipeResult = {
  distanceX: number;
  distanceY: number;
  left: boolean;
  right: boolean;
  up: boolean;
  down: boolean;
};

export default function __onSwipe(
  elm: HTMLElement,
  cb: Function,
  settings: Partial<TOnSwipeSettings> = {},
): void {
  const finalSettings: TOnSwipeSettings = {
    threshold: 100,
    ...settings,
  };

  let touchstartX = 0;
  let touchstartY = 0;
  let touchendX = 0;
  let touchendY = 0;
  const gesuredZone = elm;
  gesuredZone.addEventListener(
    'touchstart',
    function (event) {
      touchstartX = event.changedTouches[0].screenX;
      touchstartY = event.changedTouches[0].screenY;
    },
    false,
  );

  gesuredZone.addEventListener(
    'touchend',
    function (event) {
      touchendX = event.changedTouches[0].screenX;
      touchendY = event.changedTouches[0].screenY;
      handleGesure();
    },
    false,
  );

  function handleGesure() {
    const swipeNfo: TOnSwipeResult = {
      distanceX: Math.abs(touchendX - touchstartX),
      distanceY: Math.abs(touchendY - touchstartY),
      left: false,
      right: false,
      up: false,
      down: false,
    };
    if (touchendX + finalSettings.threshold < touchstartX) {
      swipeNfo.left = true;
    }
    if (touchendX - finalSettings.threshold > touchstartX) {
      swipeNfo.right = true;
    }
    if (touchendY + finalSettings.threshold < touchstartY) {
      swipeNfo.up = true;
    }
    if (touchendY - finalSettings.threshold > touchstartY) {
      swipeNfo.down = true;
    }
    if (swipeNfo.left || swipeNfo.right || swipeNfo.down || swipeNfo.up) {
      cb(swipeNfo);
    }
  }
}
