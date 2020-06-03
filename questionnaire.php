<?php require('include/header.php'); 
        $bdd = new Bdd;
        $req = $bdd->bdd->prepare('SELECT id,question,type FROM questions ORDER BY ID');

        $req->execute();
        $questions_select = $req->fetchAll(PDO::FETCH_ASSOC);
        // printr($questions_select[0]['question']);

if (isset($_POST)){

    if(isset($_POST['kestion'])) {
        if(!empty($_POST['kestion'])) {
            $bdd = new Bdd;
            $req = $bdd->bdd->prepare('SELECT question FROM questions WHERE id=:id');
            $req->bindValue(':id', $_POST['kestion']);
            $req->execute();
            $the_kestion = $req->fetch(PDO::FETCH_ASSOC);
           
            $bdd = new Bdd;
            $req = $bdd->bdd->prepare('SELECT id,reponse FROM reponses WHERE id_questions=:id');
            $req->bindValue(':id', $_POST['kestion']);
            $req->execute();

            $reponses_a_la_question = $req->fetchAll(PDO::FETCH_ASSOC);
        }
    }
}
?>


<section class="questionnaire">
    <form action="questionnaire.php" method='post'>
        <label for="kestion-select">Choisir la question à modifier :</label>
            <select name="kestion" id="kestion-select">
                <?php foreach ($questions_select  as $question){ ?>
                    <option value="<?php echo $question['id']; ?>">
                        <?php echo "Question n° ".$question['id']." : ".$question['question']; ?>
                    </option>
                <?php } ?>
            </select">
        
        <input type="submit" value="Valider">
    </form>

    <form action="questionnaire.php" method='post'>
        <label for="kestion">Voici la question que vous avez choisi de modifier : 
            <input type="text" id='kestion' value="<?php echo $the_kestion['question']; ?>">
        </label>
        <label for="kestion-select">Voici ces réponses associées que vous pouvez modifiées: </label>
            <div>

            <?php foreach ($reponses_a_la_question  as $reponse){ ?>
                <input type='text' name="<?php echo $reponse['id']; ?>" value="<?php echo $reponse['reponse']; ?>">
            <?php } ?>
            </div>
        

        <input type="submit" value="Envoyer">
    </form>
</section>

<!-- <script src="js/script.js"></script> -->
</body>
</html>
