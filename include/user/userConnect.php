<?php
if(isset($_POST['submit'])) {
    if(!empty($_POST['login'])&&!empty($_POST['password'])) {
        $bdd = new Bdd;
        $req = $bdd->bdd->prepare('SELECT login, pass FROM user WHERE login=:login');
        $req->bindValue(':login', $_POST['login']);
        $req->execute();

        $result = $req->fetch(PDO::FETCH_ASSOC);

        $passwordCorrect = password_verify($_POST['password'], $result['pass']);

        if(!$result) {
            echo 'Mauvais login ou mot de passe ';
        }
        else {
            if($passwordCorrect) {
                $_SESSION['login'] = $result['login'];
                echo 'Vous êtes désormais connecté ';
            }
            else {
                echo 'Mauvais login ou mot de passe ';
            }
        }
    }
    else {
        echo 'Mauvais login ou mot de passe ';
    }
}
?>