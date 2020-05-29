<?php  
session_start();
require 'config.php';
require_once 'tools.php';
//initialisation des class
function classAutoload($className) {
    $path = array('./model/');
    $extension = '.class.php';
    // $className = strtolower($className);
    $className = str_replace('\\', '/', $className);

    foreach($path as $chemin) {
        $fullPath = $chemin . $className . $extension;
        if(file_exists($fullPath)) {
            require_once($fullPath);
        }
    } 
}
spl_autoload_register('classAutoload');
?>
