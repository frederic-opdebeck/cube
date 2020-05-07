<?php  
session_start();
require 'conf.php';

require_once 'tools.php';

try {
    $bdd = new PDO('mysql:host='.$dsn['serveur'].';dbname='.$dsn['dbase'].';charset=utf8', $dsn['user'], $dsn['pass']);
    $bdd->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);	
}
catch(Exception $e) {
        die('Erreur : '.$e->getMessage());
}


if (isset($_GET['action']) and $_GET['action']=='logout') {
    $_SESSION['login'] = FALSE;
    unset($_SESSION['user']);
    header('location:index.php');
}
?>