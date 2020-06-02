<?php
require_once('./include/init.php');
require_once('./user/register.php');
require_once('./user/userConnect.php');
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/style.css">
    <link rel="stylesheet" href="./css/base.css">
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"/>
    <script src="https://unpkg.com/leaflet@1.6.0/dist/leaflet.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://ignf.github.io/geoportal-access-lib/latest/dist/GpServices.js"></script>
    <script src="./node_modules/geoportal-extensions-leaflet/dist/GpPluginLeaflet.js"></script>
    <link rel="stylesheet" href="./node_modules/geoportal-extensions-leaflet/dist/GpPluginLeaflet.css">
    <title>Document</title>
</head>
<body>
<?php
echo '<header>';
if(!isset($_SESSION['login']) && !isset($_GET['register'])){
    echo '<div class="register"><a href="./index.php?register">register</a></div>';
    echo '
    <div id="userConnect">
        <form action="index.php" method="POST">
            <label name="login">Identifiant</label>
            <input type="text" id="login" name="login">
            <label name="password">Mot de passe</label>
            <input type="password" id="password" name="password">
            <input type="submit" value="Se connecter" name="submit">
        </form>
    </div>
    ';
}
elseif(isset($_SESSION['login'])) {
    echo 'Bonjour'.$_SESSION['login'];
    echo '
    <form action="index.php" method="POST">
    <input type="submit" name="disconnect" value="Se déconnecter">
    </form>';
}

if(!isset($_SESSION['login'])&& isset($_GET['register'])){
    echo '
    <div id="register">
        <form action="index.php" method="POST">
            <label name="registerLogin">Identifiant</label>
            <input type="text" id="registerLogin" name="registerLogin">
            <label name="registerPassword">Mot de passe</label>
            <input type="password" id="registerPassword" name="registerPassword">
            <label name="registerVerifPassword">Veuillez vérifier votre mot de pass</label>
            <input type="password" id="registerVerifPassword" name="registerVerifPassword">
            <label name="registerEmail">Email</label>
            <input type="email" id="registerEmail" name="registerEmail">
            <label name="registerNom">Nom</label>
            <input type="text" id="registerNom" name="registerNom">
            <label name="registerPrenom">Prénom</label>
            <input type="text" id="registerPrenom" name="registerPrenom">
            <input type="submit" id="submit2" name="submit2">
        </form>
    </div>
    ';
    echo '
    <a href="index.php">Retourner sur la page d\'acceuil</a>';
}
elseif(isset($_SESSION['login'])&& isset($_GET['register'])) {
    header('Location:index.php');
}
if(isset($_POST['disconnect'])) {
    session_destroy();
    header('Location: index.php');
}
echo '</header>';
?>
    <section class="contenu">
        <div id="container">
            <div id="questionReponses" class="classquichange">
                <h2 id="question"></h2>
                <div id="chargement"></div>
                <div id="mapid"></div>
            </div>
        </div>
        <section class="recap">
            <table class="recapListe">

            </table>

        </section>
    </section>
</body>
<script type="text/javascript" src="./js/script.js"></script>
</html>