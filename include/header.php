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
    <link rel="stylesheet" href="./css/bootstrap.min.css">
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"/>
    <link rel="stylesheet" href="./css/style.css">
    <script src="https://unpkg.com/leaflet@1.6.0/dist/leaflet.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="./js/GpServices.js"></script>
    <script src="./node_modules/geoportal-extensions-leaflet/dist/GpPluginLeaflet.js"></script>
    <link rel="stylesheet" href="./node_modules/geoportal-extensions-leaflet/dist/GpPluginLeaflet.css">
    <title>Cube</title>
</head>
<body>
<?php 
echo '
<header>
    <nav>
';
    if(!isset($_SESSION['login']) && !isset($_GET['register'])){
          
            echo   "<div id='userConnect'>
                        <form action='index.php' method='POST'>
                            <label name='login'>Identifiant 
                            <input type='text' id='login' name='login'></label>

                            <label name='password'>Mot de passe 
                            <input type='password' id='password' name='password'></label>

                            <input type='submit' value='Se connecter' name='submit'>
                        </form>
                        <button type='button' class='btn btn-secondary' data-toggle='modal' data-target='#exampleModal2'>
                        S'inscrire
                        </button>
                    </div>";

            if(!isset($_SESSION['login'])){
                echo "  <p style='color:red;margin-right:35px;'>
                            Attention, vous devez être connecté pour enregistrer vos questionnaires
                        </p>";
            }
            
            if(isset($_SESSION['msgAboutConnexion'])){
                echo '<label class="erreur">'.$_SESSION['msgAboutConnexion'].'</label>';
            }
        }
        elseif(isset($_SESSION['login']) && ($_SESSION['login'] !== 'admin' && $_SESSION['login'] !== 'hasanenadminalaa')) {
            $bdd = new Bdd;
            $req = $bdd->bdd->prepare('SELECT id FROM user WHERE login=:login');
            $req->bindValue(':login', $_SESSION['login']);
            $req->execute();
            
            $donnees = $req->fetch(PDO::FETCH_ASSOC);
            
            $req2 = $bdd->bdd->prepare('SELECT guid FROM guid WHERE id_user=:id');
            $req2->bindValue(':id', $donnees['id']);
            $req2->execute();
            
            $result = [];
            while($donnees2 = $req2->fetch(PDO::FETCH_ASSOC)) {
                array_push($result, $donnees2);
            }

            echo '<div id="profil">Vous avez '.count($result).' questionnnaire(s) enregistré(s) : <a id="mesQuestionnaires" href="index.php?profil">Mes&nbsp;questionnaires</a></div>';
            echo '
            <form action="index.php" method="POST">
                <label>Bonjour '.$_SESSION['login'].'
                <input type="submit" name="disconnect" value="Se déconnecter">';
            if ($_SESSION['login'] === 'admin' ){
                echo '<a href="/cube/questionnaire.php">Administrer le questionnaire</a>';
            }                
            echo '</label></form>';

        }
        elseif(isset($_SESSION['login']) && ($_SESSION['login'] === 'hasanenadminalaa' || $_SESSION['login'] === 'admin')) {
            $bdd = new Bdd;
            
            $req2 = $bdd->bdd->prepare('SELECT guid FROM guid');
            $req2->execute();
            
            $result = [];
            while($donnees2 = $req2->fetch(PDO::FETCH_ASSOC)) {
                array_push($result, $donnees2);
            }

            echo '<div id="profil">Vous avez '.count($result).' questionnnaire(s) enregistré(s) : <a id="mesQuestionnaires" href="index.php?profil">Mes&nbsp;questionnaires</a></div>';
            echo '
            <form action="index.php" method="POST">
                <label>Bonjour '.$_SESSION['login'].'
                <input type="submit" name="disconnect" value="Se déconnecter">';
            if ($_SESSION['login'] === 'admin' ){
                echo '<a href="/cube/questionnaire.php">Administrer le questionnaire</a>';
            }                
            echo '</label></form>';

        }
        
        
    if(isset($_POST['disconnect'])) {
            session_destroy();
            header('Location: index.php');
    }
echo '
    </nav>
</header>';
?>
