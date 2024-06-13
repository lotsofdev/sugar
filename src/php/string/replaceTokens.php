<?php

namespace Sugar\string;

/**
 * @name            replaceTokens
 * @namespace            php.string
 * @type            Function
 * @platform        php
 * @status          beta
 *
 * This function take care of replacing some tokens like "%serverIp", "%clientIp", from the passed
 * string using the passed tokens array to replace.
 * Some built-in tokens are available like "%localIp", "%externalIp"
 * Here's the list of supported tokens: (this list can be updated with new tokens)
 * - %localIp: The server ip in local network
 * - %externalIp: The server external ip
 *
 * @param       {String}        $string         The string to process
 * @param       {Array}        [$tokens=[]]    The tokens to replace
 * @return      {String}                        The processed string
 *
 * @snippet             \Sugar\string\replaceTokens($1, $2);
 *
 * @example         php
 * Sugar\string\replaceTokens('Hello $hello %externalIp, how are you?', [
 *  'hello' => 'world'
 * ]); // => Hello world 156.436.56.75, how are you?
 *
 * @since       2.0.0
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://lotsof.dev)
 */

function replaceTokens($string, $tokens = [])
{
    $builtInTokens = [
        'localIp' => \Sugar\network\ipAddress('local'),
        'externalIp' => \Sugar\network\ipAddress('external'),
    ];
    $tokens = array_merge((array) $tokens, $builtInTokens);
    foreach ($tokens as $key => $value) {
        $string = str_replace('%' . $key, $value, $string);
    }
    return $string;
}
