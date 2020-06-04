<?php
if(isset($_FILES['userFile'])) {
            $dossier = 'img/';
            $fichier = basename($_FILES['userFile']['name']);
            $taille_maxi = 5000000;
            $taille = filesize($_FILES['userFile']['tmp_name']);
            $extensions = array('.png', '.gif', '.jpg', '.jpeg',null); // permet de ne pas uploader
            $extension = strrchr($_FILES['userFile']['name'], '.'); 
            //Début des vérifications de sécurité...
            if(!in_array($extension, $extensions)) //Si l'extension n'est pas dans le tableau
            {
                $erreur = '<p class="erreur">Vous devez uploader un fichier de type : png, gif, jpg ou jpeg</p>';
            }
            if($taille>$taille_maxi)
            {
                $erreur = '<p class="erreur">Le fichier est trop gros : il doit faire moins de 5Mo. 
                         La résolution maximale conseillée est d\'environ 2000x1200 px</p>';
            }
            if($fichier === ''){
                $erreur = '<p class="erreur">Aucun fighier sélectionné pour l\'upload</p>';
            }
            if(!isset($erreur)) //S'il n'y a pas d'erreur, on upload
            {
                //On formate le nom du fichier ici...
                $fichier = strtr($fichier, 
                    'ÀÁÂÃÄÅÇÈÉÊËÌÍÎÏÒÓÔÕÖÙÚÛÜÝàáâãäåçèéêëìíîïðòóôõöùúûüýÿ', 
                    'AAAAAACEEEEIIIIOOOOOUUUUYaaaaaaceeeeiiiioooooouuuuyy');
                $fichier = preg_replace('/([^.a-z0-9]+)/i', '-', $fichier);
                if(move_uploaded_file($_FILES['userFile']['tmp_name'], $dossier . $fichier)) //Si la fonction renvoie TRUE, c'est que ça a fonctionné...
                {
                    $succesUpload = '<p class="erreur">Upload de " '.$fichier.' " effectué avec succès !</p>';
                    // Affiche l'image :
                    $afficheImg = '
                    <img src="./img/'.$fichier.'" id="imagePreview" alt="image en cours de traitement">
                    <script src="./js/affichImage.js"></script>';
                }
                else //Sinon (la fonction renvoie FALSE).
                {
                    $erreur = '<p class="erreur">Echec de l\'upload !</p>';
                }
            }
            // else
            // {
            //     echo $erreur;
            // }
        }
?>