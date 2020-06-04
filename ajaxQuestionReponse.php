<?php
include('model/Bdd.class.php');

if(isset($_POST['id_question'])) {
    $bdd = new Bdd;
    $req = $bdd->bdd->prepare('SELECT question FROM questions WHERE id=:id');
    $req->bindValue(':id', $_POST['id_question']);
    $req->execute();

    $donnees = $req->fetchAll(PDO::FETCH_ASSOC);
    echo $donnees[0]['question'];
}
?>