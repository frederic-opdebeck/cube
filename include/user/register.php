<?php
if(isset($_POST['submit2'])) {
    if($_POST['registerPassword']===$_POST['registerVerifPassword']) {
        $pass_hache = password_hash($_POST['registerPassword'], PASSWORD_DEFAULT);
        if(!empty($_POST['registerLogin']) && !empty($_POST['registerPassword'])
        && !empty($_POST['registerVerifPassword']) && !empty($_POST['registerEmail'])
        && !empty($_POST['registerNom']) && !empty($_POST['registerPrenom'])
        && !empty($_POST['registerVoie'])
        && !empty($_POST['registerVille']) && !empty($_POST['registerCp'])
        ) {
        
        if (empty($_POST['registerComplement1'])){
            $c1 = ' ';
        }else{
            $c1 = $_POST['registerComplement1'];
        }
        if (empty($_POST['registerComplement2'])){
            $c2 = ' ';
        }else{
            $c2 = $_POST['registerComplement2'];
        }
        if (empty($_POST['registerNumero'])){
            $num = ' ';
        }else{
            $num = $_POST['registerNumero'];
        }
            $bdd = new Bdd;
            $req = $bdd->bdd->prepare('INSERT INTO user(login, pass, email, nom, prenom,complement1,complement2,numero,voie,ville,cp) VALUES (:login, :pass, :email, :nom, :prenom,:complement1,:complement2,:numero,:voie,:ville,:cp)');
            $req->bindValue(':login', $_POST['registerLogin']);
            $req->bindValue(':pass', $pass_hache);
            $req->bindValue(':email', $_POST['registerEmail']);
            $req->bindValue(':nom', $_POST['registerNom']);
            $req->bindValue(':prenom', $_POST['registerPrenom']);

            $req->bindValue(':complement1', $c1);
            $req->bindValue(':complement2', $c2);
            $req->bindValue(':numero', $num);

            $req->bindValue(':voie', $_POST['registerVoie']);
            $req->bindValue(':ville', $_POST['registerVille']);
            $req->bindValue(':cp', $_POST['registerCp']);
            $req->execute();
            echo "<script>alert(\'Inscription validée\')</script>";
        }
    } else{
        $_SESSION['msgAboutConnexion'] = 'Vous devez saisir deux fois le même mot de passse ';
    }
}
?>