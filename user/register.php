<?php
if(isset($_POST['submit2'])) {
    if($_POST['registerPassword']===$_POST['registerVerifPassword']) {
        $pass_hache = password_hash($_POST['registerPassword'], PASSWORD_DEFAULT);
        if(!empty($_POST['registerLogin']) && !empty($_POST['registerPassword']) && !empty($_POST['registerVerifPassword']) && !empty($_POST['registerEmail']) && !empty($_POST['registerNom']) && !empty($_POST['registerPrenom'])) {
            $bdd = new Bdd;
            $req = $bdd->bdd->prepare('INSERT INTO user(login, pass, email, nom, prenom) VALUES (:login, :pass, :email, :nom, :prenom)');
            $req->bindValue(':login', $_POST['registerLogin']);
            $req->bindValue(':pass', $pass_hache);
            $req->bindValue(':email', $_POST['registerEmail']);
            $req->bindValue(':nom', $_POST['registerNom']);
            $req->bindValue(':prenom', $_POST['registerPrenom']);
            $req->execute();
        }
    } else{
        echo 'Vous devez saisir deux fois le même mot de passse ';
    }
}
?>