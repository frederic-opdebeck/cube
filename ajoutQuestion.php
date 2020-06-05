<?php
require('include/header.php');
if (!(isset($_SESSION['login']) && ($_SESSION['login'] === 'hasanenadminalaa'))){
    header('Location:index.php' );
}
// Rappel des variables de session dispo
// $_SESSION['the_kestion'] : text de la question
// $_SESSION['id_the_kestion'] : id de la question
// $_SESSION['qAvantApres'] : ajout avant ou apres cette question
// 1- Aller chercher id question (avant ou apres)
echo
'question : '.$_SESSION['the_kestion'].'<br>'.
'id question : '.$_SESSION['id_the_kestion'].'<br>'.
'avant apres : '.$_SESSION['qAvantApres'].'<br>'
;

?>