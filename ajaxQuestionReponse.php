<?php
include('model/Bdd.class.php');

if(isset($_POST['id_question'])) {
    $bdd = new Bdd;
    $req = $bdd->bdd->prepare('SELECT questions.question, reponses.reponse FROM questions INNER JOIN reponses on questions.id = reponses.id_questions WHERE questions.id=:id');
    $req->bindValue(':id', $_POST['id_question']);
    $req->execute();

    $req2 = $bdd->bdd->prepare('SELECT questions.question, img.nom FROM questions INNER JOIN img on questions.id=img.id_questions WHERE questions.id=:id');
    $req2->bindValue(':id', $_POST['id_question']);
    $req2->execute();

    $donnees = $req->fetchAll(PDO::FETCH_ASSOC);
    $donnees2 = $req2->fetchAll(PDO::FETCH_ASSOC);

    $donnees3 = [ 0 => ['question' => $donnees[0]['question'], 'reponse' => [], 'nom' => []]];

    for($i=0;$i<count($donnees);$i++) {
        array_push($donnees3[0]['reponse'], $donnees[$i]['reponse']);
    }

    for($i=0;$i<count($donnees2);$i++) {
        array_push($donnees3[0]['nom'], $donnees2[$i]['nom']);
    }
    
    $json = json_encode($donnees3);
    echo $json;
}
?>