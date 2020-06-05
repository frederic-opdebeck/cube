<?php  
require_once('init.php');
require_once('user/register.php');
require_once('user/userConnect.php');
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/base.css">
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"/>
    <link rel="stylesheet" href="./css/style.css">
    <script src="https://unpkg.com/leaflet@1.6.0/dist/leaflet.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="./js/GpServices.js"></script>
    <script src="./node_modules/geoportal-extensions-leaflet/dist/GpPluginLeaflet.js"></script>
    <link rel="stylesheet" href="./node_modules/geoportal-extensions-leaflet/dist/GpPluginLeaflet.css">
    <title>Document</title>
</head>
<body>
<?php 
echo '
<header>
    <nav>
';
        if(!isset($_SESSION['login']) && !isset($_GET['register'])){
            echo "<div class='register'><a href='./index.php?register'>S'inscrire</a></div>";
            echo '<div id="userConnect">';

            echo '
                <form action="index.php" method="POST">
                    <label name="login">Identifiant 
                    <input type="text" id="login" name="login"></label>
                    <label name="password">Mot de passe 
                    <input type="password" id="password" name="password"></label>
                    <input type="submit" value="Se connecter" name="submit">
                </form>
            </div>
            ';
            if(!isset($_SESSION['login'])){
                echo "<p style='color:red;margin-right:35px;'>Attention, vous devez être connecté pour enregistrer vos questionnaires</p>";}
            
            if(isset($_SESSION['msgAboutConnexion'])){
                echo '<label class="erreur">'.$_SESSION['msgAboutConnexion'].'</label>';
            };
        }
        elseif(isset($_SESSION['login'])) {
            echo '
            <form action="index.php" method="POST">
            <input type="submit" name="disconnect" value="Se déconnecter">
            </form>';
            echo '<label>Bonjour '.$_SESSION['login'].'</label>';
        }
        
        if(!isset($_SESSION['login'])&& isset($_GET['register'])){
            echo '
            <div id="register">
                <form action="index.php" method="POST">
                    <div>
                        <label name="registerLogin">Identifiant
                        <input type="text" id="registerLogin" name="registerLogin"></label>
                        <label name="registerPassword">Mot de passe
                        <input type="password" id="registerPassword" name="registerPassword"></label>
                        <label name="registerVerifPassword">Veuillez resaisir votre mot de pass
                        <input type="password" id="registerVerifPassword" name="registerVerifPassword"></label>
                        <label name="registerEmail">Email
                        <input type="email" id="registerEmail" name="registerEmail"></label>
                        <label name="registerNom">Nom
                        <input type="text" id="registerNom" name="registerNom"></label>
                        <label name="registerPrenom">Prénom
                        <input type="text" id="registerPrenom" name="registerPrenom"></label>
                    </div>
                    <div>
                        <label name="registercomplement1">Complement 1
                        <input type="text" id="registercomplement1" name="registercomplement1"> </label>
                        <label name="registercomplement2">Complement 2
                        <input type="text" id="registercomplement2" name="registercomplement2"> </label>
                        <label name="registerNumero">Numero 
                        <input type="text" id="registerNumero" name="registerNumero"></label>
                        <label name="registerVoie">Nom de la voie
                        <input type="text" id="registerVoie" name="registerVoie"> </label>
                        <label name="registerVille">Ville
                        <input type="text" id="registerVille" name="registerVille"> </label>
                        <label name="registerCp">Code postale 
                        <input type="text" id="registerCp" name="registerCp"></label>
                    </div>
                    <div>
                        <input type="submit" id="submit2" name="submit2">
                    </div>
                </form>
            </div>
            ';
            echo '
            <div><a href="index.php">Retourner sur la page d\'acceuil</a></div>';
        }
        elseif(isset($_SESSION['login'])&& isset($_GET['register'])) {
            header('Location:index.php');
        }
        if(isset($_POST['disconnect'])) {
            session_destroy();
            header('Location: index.php');
        }
echo '
    </nav>
</header>';
?>
