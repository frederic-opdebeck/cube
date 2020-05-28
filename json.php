<?php
function getGUID(){
    if (function_exists('com_create_guid')){
        return com_create_guid();
    }else{
        mt_srand((double)microtime()*10000);//optional for php 4.2.0 and up.
        $charid = strtoupper(md5(uniqid(rand(), true)));
        $hyphen = chr(45);// "-"
        $uuid = chr(123)// "{"
            .substr($charid, 0, 8).$hyphen
            .substr($charid, 8, 4).$hyphen
            .substr($charid,12, 4).$hyphen
            .substr($charid,16, 4).$hyphen
            .substr($charid,20,12)
            .chr(125);// "}"
        return $uuid;
    }
}
if(isset($_POST['json'])) {
    // echo $_POST['json'];
    $fichier = 'save.json';
    $key = getGUID();
    
    echo $key;
    mkdir($_SERVER["DOCUMENT_ROOT"].'/cube/saveJson/'.$key);
    $fp = fopen($_SERVER["DOCUMENT_ROOT"].'/cube/saveJson/'.$key.'/'.$fichier, 'a+');
    fseek($fp, 0);
    fputs($fp, $_POST['json']);
}
?>