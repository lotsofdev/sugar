<?php

namespace Sugar\Array;

/**
 * @name            filter
 * @namespace       php.array
 * @type            Function
 * @platform        php
 * @status          beta
 *
 * This function allows you filter some array items either by:
 * - `^...`: The keys that starts with the passed string
 * - `...$`: The keys that ends with the passed string
 * - `function($key, $value) { retur true; }`: A function that must return true or false
 *
 * @snippet        \Sugar\Array\filter($1, $2);
 * \Sugar\Array\filter($1, function(\$key, \$value) {
 *      $0
 * });
 *
 * @param       {Object}        $array         The object to filter
 * @param       {String|Function}       $filter         The filter to use
 * @return      {Object}                        The filtered object
 *
 * @example         php
 * $obj = [
 *   "hello" => 'world',
 *   "yop" => 'plop',
 *   "helloPlop" => true
 * ];
 * \Sugar\Array\filter($obj, '^hel'); // ["hello" => 'world', "helloPlop" => true]
 * \Sugar\Array\filter($obj, function($key, $value) {
 *   return false;
 * }); // []
 *
 * @since       2.0.0
 * @author 	                Olivier Bossel <olivier.bossel@gmail.com> (https://lotsof.dev)
 */
function filter($array, $filter)
{
    return (array) \Sugar\Object\filter($array, $filter);
}
