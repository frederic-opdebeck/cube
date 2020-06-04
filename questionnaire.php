<?php 
require('include/header.php'); 


        $bdd = new Bdd;
        $req = $bdd->bdd->prepare('SELECT id,question,type FROM questions ORDER BY ID');
        $req->execute();
        $questions_select = $req->fetchAll(PDO::FETCH_ASSOC);

if (isset($_POST)){

    if(isset($_POST['kestion']) && isset($_POST['choix_kestion']) 
    && $_POST['choix_kestion'] === 'choix_kestion') {
        if(!empty($_POST['kestion'])) {

            $bdd = new Bdd;
            $req = $bdd->bdd->prepare('SELECT question FROM questions WHERE id=:id');
            $req->bindValue(':id', $_POST['kestion']);
            $req->execute();

            $_SESSION['the_kestion']= $req->fetch(PDO::FETCH_ASSOC)['question'];
            $_SESSION['id_the_kestion'] = $_POST['kestion'];

            $bdd = new Bdd;
            $req = $bdd->bdd->prepare('SELECT id,reponse FROM reponses WHERE id_questions=:id');
            $req->bindValue(':id', $_POST['kestion']);
            $req->execute();

            $_SESSION['reponses_a_la_question'] = $req->fetchAll(PDO::FETCH_ASSOC);
        }
    }
    if(isset($_POST['modif_text']) && $_POST['modif_text'] === 'modif_text') {

            $bdd = new Bdd;
            $req = $bdd->bdd->prepare("UPDATE questions SET question=:question WHERE id=:id");
            $req->bindValue(':question', $_POST['the_kestion']);
            $req->bindValue(':id'      , $_SESSION['id_the_kestion']);
            $req->execute();

            $_SESSION['the_kestion'] = $_POST['the_kestion'];

            
            for ($i=0;$i<count($_SESSION['reponses_a_la_question']);$i++){
                $j=$i+2;
                $_SESSION['reponses_a_la_question'][$i]['reponse'] = array_values($_POST)[$j];

                $bdd = new Bdd;
                $req = $bdd->bdd->prepare("UPDATE reponses SET reponse=:reponse WHERE id=:id");
                $req->bindValue(':reponse', array_values($_POST)[$j]);
                $req->bindValue(':id', $_SESSION['reponses_a_la_question'][$i]['id']);
                $req->execute();
            }

                require('include/downloadFile_from_inputFile.php');
                // ce fichier ressort ces deux constantes et un msg d'erreur que l'on peut appeler :
                // echo $succesUpload;
                // echo $afficheImg;
                // echo $erreur;

            // header('Location:questionnaire.php' );  
    }
}
?>

<section class="questionnaire">
    <form action="questionnaire.php" method='post'>
        <input id="choix_kestion" name="choix_kestion" type="hidden" value="choix_kestion">
        <select name="kestion" id="kestion-select">
            <option> -- Choisir la quesiton à modifier -- </option>
            <?php foreach ($questions_select  as $question){ ?>
                <option value="<?php echo $question['id']; ?>" >
                    <?php echo "Question n° ".$question['id']." : ".$question['question']; ?>
                </option>
            <?php } ?>
        </select">
        
        <input type="submit" value="Valider">
    </form>

    <form action="questionnaire.php" method='post' enctype="multipart/form-data">
        <input id="modif_text" name="modif_text" type="hidden" value="modif_text">
        <label for="kestion">Voici la question que vous avez choisi de modifier : 
            <input type="text" name="the_kestion" id='kestion' value="<?php echo $_SESSION['the_kestion']; ?>">
        </label>
        <label>Voici ces réponses associées que vous pouvez modifiées: </label>
        <div>
            <?php foreach ($_SESSION['reponses_a_la_question']  as $reponse){ ?>
                <input type='text' name="<?php echo $reponse['id']; ?>" value="<?php echo $reponse['reponse']; ?>">
            <?php } ?>
        </div>
        <label>Envoyez ce fichier : 
        <input name="userFile" type="file" accept="image/png, image/jpeg"/></label>
        <?php if (isset($succesUpload) && isset($afficheImg)){
            echo $succesUpload;
            echo $afficheImg;
        }else { if (isset($erreur)) {echo $erreur;}?>
            <input type="submit" value="Envoyer">
        <?php } ?>
       

    </form>


</section>

</body>
</html>
