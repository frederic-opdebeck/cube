<?php
/* liste des fonctions :
is_log()

print_lf($t)
printr($t)

valid_date($sup,$inf='')
change_mois($t,$type,$sep)

sup_car ($t) inv_date($d,$sep,$long=0)
last_car($t)
vire_espace($t)
decoupe_chaine($string, $start, $length, $endStr = '...')
decoupe_url($t) inverse_date($t,$sep)

cryptageMotDePasse($mot_de_passe, $secure_salt) SecureSalt()

charge_fichier($path, $file)
ouvrir_fichier($file, $path, $mode) ferme_fichier($id_fichier)
copy_fichier($file, $path)
copie_image($gl,$path,$name,$mw,$mh,$type)

save_log($g,$p,$file)
save_debug($txt,$file)
aht($t)
*/


function is_log() {
	if (isset($_SESSION['login']) && $_SESSION['login']===TRUE) {
	} else {
		header('location:index.php');
	}	
}	
	

// VERIFIE SI UNE DATE EST SUPERIEUR A L'AUTRE
function valid_date($sup,$inf='') {
	if (!isset($inf) or $inf == 0) {
		$inf = date('Y-m-d');
	}

	$defaultTimeZone="Europe/Paris";
	if (date_default_timezone_get()!=$defaultTimeZone) date_default_timezone_set($defaultTimeZone);
	
	// DECOUPE DE LA DATE INF
	// VERIFIE date complete yyyy-mm-jj hh:mm:ss
	if (strpos($inf, " ")===false) {
		$tinf = explode ("-", $inf);
		$tinfheure = array(date("H"),date("i"),date("s"));
	}else {
		$z = explode(" ",$inf);
		$tinf = explode ("-", $z[0]);
		$tinfheure = explode (":", $z[1]);
	}

	// DECOUPE DE LA DATE SUP
	// VERIFIE date complete yyyy-mm-jj hh:mm:ss
	if (strpos($sup, " ")===false) {
		$tsup = explode ("-", $sup);
		$tsupheure = array(date("H"),date("i"),date("s"));
	}else {
		$z = explode(" ",$sup);
		$tsup = explode ("-", $z[0]);
		$tsupheure = explode (":", $z[1]);
	}

	$nowt = mktime($tinfheure[0],$tinfheure[1],$tinfheure[2], $tinf[1], $tinf[2], $tinf[0]);
	$supt = mktime($tsupheure[0],$tsupheure[1],$tsupheure[2], $tsup[1], $tsup[2], $tsup[0]);
	if ($supt >= $nowt) {
		return 1;
	} else {
		return 0;
	}	
}

/*------------------------------------------------------------------------------------*/
/* OLD FUNCTIONS A NETTOYER */
// SUPPRIME LE DERNIER CARACTERE D'UNE CHAINE
function sup_car ($t) {
	return (substr($t, 0, strlen($t)-1));
}
/*------------------------------------------------------------------------------------*/

//---------------------------------------------------------------
// RENVOI UNE DATE INVERSEE j-m-y -> y-m-j ou INVERSEMENT
function inv_date($d,$sep,$long=0) {
	if ($d!='') {
		// DATE SEUL
		if ($long == 0) {
			// RECHERCHE SI DATE + HEURE OU QUE DATE
			if (strpos($d,' ')===false) {
				$t = explode($sep, $d);
				return($t[2].$sep.$t[1].$sep.$t[0]);
			} else {
				$t0 = explode(' ', $d);
				$t = explode($sep, $t0[0]);
				return($t[2].$sep.$t[1].$sep.$t[0]);
			}
		}
		// DATE + HEURE
		if ($long == 1) {
			// RECHERCHE SI DATE + HEURE OU QUE DATE
			if (strpos($d,' ')===false) {
				$t = explode($sep, $d);
				return($t[2].$sep.$t[1].$sep.$t[0]);
			} else {
				$t0 = explode(' ', $d);
				$t = explode($sep, $t0[0]);
				return($t[2].$sep.$t[1].$sep.$t[0].' '.$t0[1]);
			}
		}
	} else {
		return($d);
	}
}
/*---------------------------------------------------------------*/

/*---------------------------------------------------------------*/
// CRYPT LE MOT DE PASSE
function cryptageMotDePasse($mot_de_passe, $secure_salt) {
	return sha1($secure_salt.sha1($mot_de_passe));
}
/*---------------------------------------------------------------*/

/*---------------------------------------------------------------*/
// genere un secure salt
function SecureSalt() 	{
	return substr(sha1(uniqid(rand(),true)),0,40);
}
/*---------------------------------------------------------------*/


/*---------------------------------------------------------------*/
// CHARGE L'INTEGRALITE DU FICHIER
function charge_fichier($path, $file) {
	$id_t = ouvrir_fichier($file, $path, "r");

	$car = "";	
	while (!feof($id_t)) {
		$car .= fgetc($id_t);
	}	

	ferme_fichier($id_t);
	return ($car);
}
/*---------------------------------------------------------------*/

/*---------------------------------------------------------------*/
// OUVRE LE FICHIER
function ouvrir_fichier($file, $path, $mode) {
		 if (!$id_fichier=fopen($path . $file, $mode)) echo("Erreur d'ouverture du fichier");
		 else return ($id_fichier);
}
/*---------------------------------------------------------------*/

/*---------------------------------------------------------------*/
// FERME LE FICHIER
function ferme_fichier($id_fichier) {
		 fclose($id_fichier);
}
/*---------------------------------------------------------------*/

/*---------------------------------------------------------------*/
// COPY UN FICHIER
function copy_fichier($file, $path) {
		 if (!$id_erreur=copy("vide.htm", $path . $file . ".htm")) echo("Erreur d'ouverture du fichier");
		 else return(1);
}
/*---------------------------------------------------------------*/

/*******************************************************************************/
// COPIE LES IMAGES
/*******************************************************************************/
function copie_image($gl,$path,$name,$mw,$mh,$type) {
	global $msg;
	$msg = '';
	
	$jpg_quality = 100;

	$tmp_name = $gl['tmp_name'];

	$type_f = '';	
	if ($gl['type'] == 'image/jpeg' or $gl['type'] == 'image/pjpeg') { $type_f = "jpg"; 	}
	if ($gl['type'] == 'image/gif') { $type_f = "gif"; }
	if ($gl['type'] == 'image/png') { $type_f = "png"; }
	
	// MAUVAIS TYPE -> RENVOI
	if ($type_f == '') { $msg = "Mauvais type de fichier, impossible de copier l'image."; return;}

	// IMAGE SIMPLE REDIMENSIONNE A mw et mh	
	if ($type == 'simple') {
	
		// VERIF DE LA TAILLE
		$size = GetImageSize($tmp_name);
		$ow = $size[0];
		$oh = $size[1];
		if ($ow > $mw or $oh > $mh) {
			// REDIMENSIONNE 
			// CALCUL LES RATIOS
			$rw = $mw/$ow;
			$rh = $mh/$oh;
			
			if ($rw<=$rh) {
				// W > H;
				$ratio = $rw;
			} else {
				// H > W;
				$ratio = $rh;
			}
			// CALCUL LES NOUVELLES DIMENSIONS
			$nw = round($ow*$ratio);
			$nh = round($oh*$ratio);
			// CREATION DE LA NOUVELLE IMAGE
			if ($type_f == 'jpg') {
				$img = imagecreatefromjpeg($tmp_name);
				$img_dest = imagecreatetruecolor($nw,$nh);
				//COPIE
				$copy = imagecopyresampled($img_dest,$img,0,0,0,0,$nw,$nh,$ow,$oh);
				imagejpeg($img_dest,$path.$name.".".$type_f);//, $jpg_quality);
			}
			if ($type_f == 'gif') {
				$img = imagecreatefromgif($tmp_name);
				$img_dest = imagecreatetruecolor($nw,$nh);
				//COPIE
				$copy = imagecopyresampled($img_dest,$img,0,0,0,0,$nw,$nh,$ow,$oh);
				imagegif($img_dest,$path.$name.".".$type_f);
			}
			if ($type_f == 'png') {
				$img = imagecreatefrompng($tmp_name);
				$img_dest = imagecreatetruecolor($nw,$nh);
				//COPIE
				$copy = imagecopyresampled($img_dest,$img,0,0,0,0,$nw,$nh,$ow,$oh);
				imagepng($img_dest,$path.$name.".".$type_f);
			}
			// DESTRUCTION
			imagedestroy($img_dest);
			return $type_f;
		} else {
			// COPIE SIMPLE (LA TAILLE EST DEJA BONNE)
			if (!@copy($tmp_name, $path.$name.".".$type_f)) {
				$msg = "Impossible de copier l'image.";
				return;
			} else {
				return $type_f;
			}
		}
	}

	// COPY SANS CONTROLE
/*	if ($type == 'unique') {	
		if (!@copy($tmp_name, $path.$name.".".$type_f)) {
			$msg = "Impossible de copier l'image.";
			return;
		} else {
			return $type_f;
		}
	}
*/	
	// COPY SANS CONTROLE
	if ($type == 'unique') {	
		if (!@copy($tmp_name, $path.$name)) {
			$msg = "Impossible de copier l'image.";
			return;
		} else {
			return $type_f;
		}
	}
	
}
/*******************************************************************************/


/*---------------------------------------------------------------*/
// PRINT + RETOUR CHARIOT
function print_lf($t) {
		 print($t . "<br>");
}
/*---------------------------------------------------------------*/

/*---------------------------------------------------------------*/
// SUPPRIME LES ESPACES DANS LA CHAINE
function vire_espace ($t) {
	$chaine = "";

	for ($i=0; $i < strlen($t); $i++) {
		$c = substr($t, $i, 1);
		if ($c != " ") {
			$chaine .= $c;
		}
	}
	return ($chaine);
}
/*---------------------------------------------------------------*/


function decoupe_chaine($string, $start, $length, $endStr = '...'){
	// si la taille de la chaine est inférieure ou égale à celle
	// attendue on la retourne telle qu'elle
	if( strlen( $string ) <= $length ) return $string;
	// autrement on continue
 
	// permet de couper la phrase aux caractères définis tout
	// en prenant en compte la taille de votre $endStr et en 
	// re-précisant l'encodage du contenu récupéré
	$str = mb_substr( $string, $start, $length - strlen( $endStr ) + 1, 'UTF-8');
	// retourne la chaîne coupée avant la dernière espace rencontrée
	// à laquelle s'ajoute notre $endStr
	return substr( $str, 0, strrpos( $str,' ') ).$endStr;
}    

/*---------------------------------------------------------------*/
// DECOUPE L'URL -> renvoi le fichier 
function decoupe_url($t) {
//	return($t);
	$z = strrpos($t, '/');
	if ($z != '') {
		$t = substr($t, $z+1, strlen($t));
		// RECHERCHE DU DERNIER ?
		$z = strrpos($t, '?');
		if ($z != '') {
			return(substr($t, 0,$z));
		} else {
			return($t);
		}
	} else {
		return($t);
	}
}
/*---------------------------------------------------------------*/



/*---------------------------------------------------------------*/
//---------------------------------------------------------------
// RENVOI UNE DATE Y-m-j EN j-m-Y et inversement séparé pas sep
//---------------------------------------------------------------
function inverse_date($t,$sep) {
	$z = explode($sep,$t);
	return($z[2].$sep.$z[1].$sep.$z[0]);
}
//---------------------------------------------------------------


//---------------------------------------------------------------
// print_r + mise en form 
function printr($t) {
	echo "<pre>";
	print_r($t);
	echo "</pre>";
}
/*---------------------------------------------------------------*/

//---------------------------------------------------------------
// EN REGISTRE DES DONNEES DANS UN FICHIER TEXTE
function change_mois($t,$type,$sep) {
	global $en_mois, $fr_mois;

	if ($type == 'texte') {
		for ($i=0;$i<count($en_mois);$i++) {
			$t = str_replace($en_mois[$i],$fr_mois[$i],$t);
		}
	}
	if ($type == 'chiffre') {
		$z = explode($sep,$t);
		$t = $z[0].' '.$fr_mois[$z[1]-1].' '.$z[2];
	}
	return ($t);

}
/*---------------------------------------------------------------*/

/* SUPPRIME LE DERNIER CARACTERE */
function last_car($t) {
	if (strlen($t)>0) {
		$t = substr($t, 0, strlen($t)-1);
	}
	return $t;
}

//---------------------------------------------------------------
// EN REGISTRE DES DONNEES DANS UN FICHIER TEXTE
function save_log($g,$p,$file) {
	$txt = '';
	$txt .= "GET\n";
	foreach ($g as $key => $string_value)	{
		$txt .= $key." = ".$string_value."\n";
	}
	$txt .= "POST\n";
	foreach ($p as $key => $string_value)	{
		$txt .= $key." = ".$string_value."\n";
	}

// ECRITURE FICHIER
	// ENREGISTREMENT LOG
	if ($fp=fopen($file, "a")) {
		fwrite($fp, "\n---------------------------------------------------------\n");
		fwrite($fp, $txt);
		fwrite($fp, "\n---------------------------------------------------------\n\n");
		fclose($fp);
	} else {
		echo "Erreur d'ouverture de ".$file;
	}
}
//---------------------------------------------------------------

//---------------------------------------------------------------
// EN REGISTRE DES DONNEES DANS UN FICHIER TEXTE
function save_debug($txt,$file) {

// ECRITURE FICHIER
	// ENREGISTREMENT LOG
	if ($fp=fopen($file, "a")) {
		fwrite($fp, "\n---------------------------------------------------------\n");
		fwrite($fp, $txt);
		fwrite($fp, "\n---------------------------------------------------------\n\n");
		fclose($fp);
	} else {
		echo "Erreur d'ouverture de ".$file;
	}
}
//---------------------------------------------------------------

function aht($t) {
	return $t;
}



?>
