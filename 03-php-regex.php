<?php

$pattern = '/([A-z]\w*):("?)((\\\\?.)*?)\2 /';
$input = 'TestKey1:TestValue1 TestKey2:"a value" TestKey3:"a value with\"" Ab2c:teste ';

preg_match_all($pattern, $input, $matches, PREG_SET_ORDER, 0);

$resultArray = [];

foreach ($matches as $item) {
    $resultArray[$item[1]] = $item[3];
}

var_dump($resultArray);

