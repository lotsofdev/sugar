/**
 * @name                testEnv
 * @namespace           shared.is
 * @type                Function
 * @platform            js
 * @platform            node
 * @status              stable
 *
 * Check if the current environment is in a test process or not
 *
 * @return      {Boolean}         true if in environment environment, false if not
 *
 * @todo      tests
 *
 * @snippet         __isTestEnv()
 *
 * @example       js
 * import { __isTestEnv } from '@lotsof/sugar/is';
 * __isTestEnv(); // => true
 *
 * @since     2.0.0
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://lotsof.dev)
 */
export default function __isTestEnv(): boolean;
