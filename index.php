<?php require('include/header.php'); 
if(isset($_GET['profil'])&&isset($_SESSION['login'])) {
    include('include/user/profil.php');
}
else {
    echo '
    <section class="contenu">
        <div id="container">
            <div id="questionReponses" class="classquichange">
                <h2 id="question"></h2>
                <img id="images" src="" alt="">
                <div id="chargement"></div>
                <div id="mapid"></div>
            </div>
        </div>
        <div class="recap">
            <table class="recapListe">
    
            </table>
        </div>
    </section>
    ';  
}
?>
<!--modal image -->
<div class="modal fade" id="exampleModal2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <div class="d-flex justify-content-center">
                <?php
                if(!isset($_SESSION['login'])){
                    echo '
                    <div id="register">
                        <form action="index.php" method="POST">
                            <div>
                                <label name="registerLogin">Identifiant <span class="erreur">*</span>
                                <input type="text" id="registerLogin" name="registerLogin" required></label>
                                <label name="registerPassword">Mot de passe <span class="erreur">*</span>
                                <input type="password" id="registerPassword" name="registerPassword" required></label>
                                <label name="registerVerifPassword">Veuillez resaisir votre mot de pass <span class="erreur">*</span>
                                <input type="password" id="registerVerifPassword" name="registerVerifPassword" required></label>
                                <label name="registerEmail">Email <span class="erreur">*</span>
                                <input type="email" id="registerEmail" name="registerEmail" required></label>
                                <label name="registerNom">Nom <span class="erreur">*</span>
                                <input type="text" id="registerNom" name="registerNom" required></label>
                                <label name="registerPrenom">Prénom <span class="erreur">*</span>
                                <input type="text" id="registerPrenom" name="registerPrenom" required></label>
                            </div>
                            <div>
                                <label name="registercomplement1">Complement 1
                                <input type="text" id="registercomplement1" name="registercomplement1"> </label>
                                <label name="registercomplement2">Complement 2
                                <input type="text" id="registercomplement2" name="registercomplement2"> </label>
                                <label name="registerNumero">Numero 
                                <input type="number" id="registerNumero" name="registerNumero"></label>
                                <label name="registerVoie">Nom de la voie <span class="erreur">*</span>
                                <input type="text" id="registerVoie" name="registerVoie" required> </label>
                                <label name="registerVille">Ville <span class="erreur">*</span>
                                <input type="text" id="registerVille" name="registerVille" required> </label>
                                <label name="registerCp">Code postale  <span class="erreur">*</span>
                                <input type="text" id="registerCp" name="registerCp" required></label>
                            </div>
                            <div>
                                <p class="erreur"><span class="erreur">*</span> Champs obligatoires</p>
                                <input type="submit" id="submit2" name="submit2">
                            </div>
                        </form>
                    </div>
                    ';
                    echo '
                    <div><a href="index.php">Retourner sur la page d\'acceuil</a></div>';
        
                    }
                ?>
            </div>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
        </div>
    </div>
</div>
  <!-- end modal image -->
<!-- Pour bootstrap, désolé pour jquery mais je suis obligé :s -->
    <script src="./js/jquery-3.5.1.min.js"></script>
    <script src="./js/popper.min.js"></script>
    <script src="./js/bootstrap.min.js"></script>
<!-- end bootstrap -->
</body>
<?php
if(!isset($_GET['profil'])) {
    echo '<script type="text/javascript" src="./js/script.js"></script>';
}
?>
</html>