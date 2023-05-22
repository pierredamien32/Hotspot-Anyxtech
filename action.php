<?php

    $nbre1 = $_POST['nbre1'];
    $nbre2 = $_POST['nbre2'];
    
    if(!empty($nbre1) && !empty($nbre1) ){
        echo "$nbre1 + $nbre2 nombres donne : ".$nbre1+$nbre2 ;
    }else{
        echo "L'un des deux champs sont vide";
    }

    // echo "Hello world";