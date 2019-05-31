<?php
  $page = $_POST['page'];
  $x = ($page-1)*5;
  $link = mysql_connect('127.0.0.1', 'root', '123');
    if (!$link) {
    die('Not connected : ' . mysql_error());
    }
    // make foo the current db
    $db_selected = mysql_select_db('mytest', $link);
    if (!$db_selected) {
    die ('Can\'t use foo : ' . mysql_error());
    }
    $result = mysql_query("select * from WaterStation limit $x,5");

    if ($result) {
      $arrM = array();
      while($row = mysql_fetch_assoc($result)) {
        array_push($arrM,$row);
      }
      echo json_encode($arrM);
      $row=mysql_fetch_assoc($result);
    }
?>
