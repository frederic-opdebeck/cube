<?php
session_start();
include('model/Bdd.class.php');
function getGUID(){
    if (function_exists('com_create_guid')){
        return com_create_guid();
    }else{
        mt_srand((double)microtime()*10000);//optional for php 4.2.0 and up.
        $charid = strtoupper(md5(uniqid(rand(), true)));
        $hyphen = chr(45);// "-"
        $uuid = chr(123)// "{"
            .substr($charid, 0, 8).$hyphen
            .substr($charid, 8, 4).$hyphen
            .substr($charid,12, 4).$hyphen
            .substr($charid,16, 4).$hyphen
            .substr($charid,20,12)
            .chr(125);// "}"
        return $uuid;
    }
}

$connect =0;

if(isset($_SESSION['login'])) {
    $connect = 1;
}
else {
    $connect = 0;
    echo 'Vous devez être connecté pour pouvoir enregistrer le questionnaire';
}

if(isset($_POST['json']) && $connect===1) {
    // echo $_POST['json'];
    $fichier = 'save.json';
    $key = getGUID();
    
    echo $key;
    mkdir('./saveJson/'.$key);
    $fp = fopen('./saveJson/'.$key.'/'.$fichier, 'a+');
    fseek($fp, 0);
    fputs($fp, $_POST['json']);
    $bdd = new Bdd;
    $req = $bdd->bdd->prepare('SELECT id FROM user WHERE login=:login');
    $req->bindValue(':login', $_SESSION['login']);
    $req->execute();
    $result = $req->fetch(PDO::FETCH_ASSOC);

    $req2 = $bdd->bdd->prepare('INSERT INTO guid(guid, id_user) VALUES (:guid, :id_user)');
    $req2->bindValue(':guid', $key);
    $req2->bindValue(':id_user', $result['id']);
    $req2->execute();
    
    echo 'Votre questionnaire a été enregistré avec succès.';
}

?>