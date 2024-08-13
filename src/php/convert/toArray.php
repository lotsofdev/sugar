<?php

namespace Sugar\Convert;

/**
 * @name            toArray
 * @namespace       php.convert
 * @type            Function
 * @platform        php
 * @status          beta
 *
 * This function allows you to convert recursively an object to an associative array
 *
 * @param       {Object}         $object         The base object to convert to an array
 * @return      {Array}                         The resulting associative array
 *
 * @snippet         \Sugar\Convert\toArray($1);
 *
 * @example         php
 * \Sugar\Convert\toArray((object) [
 *    'prop1' => 'Hello',
 *    'prop2' => 'World'
 * ]);
 *
 * @since       2.0.0
 * @author         Olivier Bossel <olivier.bossel@gmail.com> (https://lotsof.dev)
 */
function toArray($obj)
{
    //only process if it's an object or array being passed to the function
    if (is_object($obj) || is_array($obj)) {
        $ret = (array) $obj;
        foreach ($ret as &$item) {
            //recursively process EACH element regardless of type
            $item = toArray($item);
        }
        return $ret;
    }
    //otherwise (i.e. for scalar values) return without modification
    else {
        return $obj;
    }
}
