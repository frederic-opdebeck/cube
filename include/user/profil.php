<?php

if(isset($_GET['profil'])&&isset($_SESSION['login'])) {
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
    echo '<div class="global">';
    for($i=0;$i<count($result);$i++) {
        
        $file = 'saveJson/'.$result[$i]['guid'].'/save.json'; 
        $data = file_get_contents($file); 
        $obj = json_decode($data); 
        // var_dump($obj);
        
            echo '<div class="resumeQuestionnaire">';
            echo '<h3 class="titreQ">Questionnaire '.($i+1).'</h3>';
            foreach($obj as $key =>$value) {
                echo '
                <div class="resumeQuestion">';
                foreach($value as $question => $reponse) {
                    echo '
                        
                           
                                <p>'.$reponse.'</p>
                            
                    ';

                }
                echo '</div>';
            }
            echo '</div>';
        
    }
    echo '</div>';
}

?>