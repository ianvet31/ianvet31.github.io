<?php
    extract($_REQUEST);
    $file=fopen("book.txt","a");

    fwrite($file, $texter .);
    fclose($file);
    header("location: index.php");
 ?>
