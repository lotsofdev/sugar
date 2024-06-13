<?php

namespace Sugar\ar;

/**
 * @name            get
 * @namespace       php.array
 * @type            Function
 * @platform        php
 * @status          beta
 *
 * This function allows you to get a value from the passed object using the passed dotpath
 *
 * @param       {Object}        $array         The object from which to get the value
 * @param       {String}        $dotpath        The dotpath to get in the object
 * @param       {String}        [$separator='.']        The dotpath separator
 * @return      {Any}                           The getted value
 *
 * @snippet         \Sugar\ar\get($1, $2);
 *
 * @example         php
 * $obj = [
 *   "hello" => [
 *      "world" => "plop"
 *   ]
 * ];
 * \Sugar\ar\get($obj, 'hello.world'); // "plop"
 *
 * @since       2.0.0
 * @author 	                Olivier Bossel <olivier.bossel@gmail.com> (https://lotsof.dev)
 */
function get($array, $dotpath, $separator = '.')
{
    if (is_object($array)) {
        $array = (array) $array;
    } elseif (is_array($array)) {
    } else {
        throw new Error(
            'The "get" function accepts only object and array as source...'
        );
    }

    // starts with "^"
    if (str_starts_with($dotpath, '^')) {
        $returnArray = [];
        foreach (array_keys($array) as $key) {
            if (str_starts_with($key, ltrim($dotpath, '^'))) {
                $returnArray[$key] = $array[$key];
            }
        }
        return $returnArray;
    }

    // ends with "$"
    if (str_ends_with($dotpath, '$')) {
        $returnArray = [];
        foreach (array_keys($array) as $key) {
            if (str_ends_with($key, rtrim($dotpath, '$'))) {
                $returnArray[$key] = $array[$key];
            }
        }
        return $returnArray;
    }

    // usual get
    $keys = explode($separator, $dotpath);
    $value = (array) $array;
    $i = 0;
    foreach ($keys as $key) {
        $value = $value[$key];
        if ($i < count($keys) - 1 && is_object($value)) {
            $value = (array) $value;
        }
        $i++;
    }
    return $value;
}
