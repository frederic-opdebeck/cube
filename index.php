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
</body>
<script type="text/javascript" src="./js/script.js"></script>
</html>