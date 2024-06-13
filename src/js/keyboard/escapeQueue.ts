import __uniqid from '../string/uniqid.js';

/**
 * @name 		            escaoeQueue
 * @namespace           js.keyboard
 * @type                Function
 * @platform            js
 * @status              stable
 *
 * This funciton allows you to register actions to execute when user press the escape key.
 * It will take care of executing the last registered action first, then the others...
 * This function returns a SPromise instance on which you can call the `cancel` method to unregister your
 * action in the queue.
 *
 * @param           {Function}          [callback=null]            The callback to call on pressing escape
 * @param         {Object}      [settings={}]    An option object to configure your hotkey. Here's the list of available settings:
 * @return      {SPromise}                       An SPromise instance that will be resolved when the user has pressed the escape key and that it's yout turn in the queue
 *
 * @setting         {HTMLElement}       [rootNode=document]         Specify where to add the listener
 * @setting         {String}            [id=null]                   Specify an id. If specified, will before unqueue the previous item with the same id and add it again
 *
 * @todo      tests
 *
 * @snippet         __escapeQueue($1).then(() => {
 *      $2
 * });
 *
 * @example    js
 * import { __escapeQueue } from '@lotsof/sugar/keyboard'
 * const promise = __escapeQueue();
 * promise.then(() => {
 *      // do something...
 * });
 *
 * // if you want to cancel your subscription
 * promise.cancel();
 *
 * @see         https://www.npmjs.com/package/hotkeys-js
 * @since       2.0.0
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://lotsof.dev)
 */

export interface IEscapeQueueSettings {
  id?: string;
  rootNode?: HTMLElement | Document | HTMLElement[] | Document[];
}

export interface IEscapeQueueApi {
  cancel: Function;
}

export interface IEscapeQueueItem {
  id: string;
  callback?: Function;
  resolve: Function;
}

export interface IEscapeQueueResult extends Promise<void> {
  cancel: Function;
}

const _escapeQueue: IEscapeQueueItem[] = [];
const _escapeQueueMap = new WeakMap();
let _isEscaping = false;

class CancelablePromise extends Promise<void> {
  cancel() {}
}

export default function escapeQueue(
  callback?: Function,
  settings?: IEscapeQueueSettings,
): IEscapeQueueResult {
  const pro = new CancelablePromise((resolve) => {
    const finalSettings: IEscapeQueueSettings = {
      rootNode: document,
      ...(settings ?? {}),
    };

    // @ts-ignore
    const roots: HTMLElement[] | Document[] = Array.isArray(
      finalSettings.rootNode,
    )
      ? finalSettings.rootNode
      : [finalSettings.rootNode];

    roots.forEach(($root) => {
      // make sure we only register 1 by rootNode
      if (_escapeQueueMap.has($root)) return;
      _escapeQueueMap.set($root, true);

      $root.addEventListener('keydown', (e) => {
        if (e.key !== 'Escape' || !_escapeQueue.length || _isEscaping) {
          return;
        }

        // make sure to not escape multiple times
        // at once
        _isEscaping = true;
        setTimeout(() => {
          _isEscaping = false;
        });

        const queueItem = <IEscapeQueueItem>_escapeQueue.pop();
        queueItem.callback?.();
        queueItem.resolve();
      });
    });

    // create the queue item to register
    const queueItem: IEscapeQueueItem = {
      id: finalSettings.id ?? __uniqid(),
      callback,
      resolve,
    };

    setTimeout(() => {
      pro.cancel = () => {
        _escapeQueue.splice(_escapeQueue.indexOf(queueItem, 1));
        Promise.resolve(pro);
      };
    });

    if (finalSettings.id) {
      const existing = <IEscapeQueueItem>(
        _escapeQueue.find((i) => i.id === finalSettings.id)
      );
      if (existing) {
        existing.callback = callback;
        existing.resolve = resolve;
      } else {
        _escapeQueue.push(queueItem);
      }
    } else {
      // add to the queue
      _escapeQueue.push(queueItem);
    }
  });

  return pro;
}
