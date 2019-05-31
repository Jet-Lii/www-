<?php
	 $link = mysql_connect('127.0.0.1', 'root', '123');
			if (!$link) {
			die('Not connected : ' . mysql_error());
			}
			// make foo the current db
			$db_selected = mysql_select_db('mytest', $link);
			if (!$db_selected) {
			die ('Can\'t use foo : ' . mysql_error());
			}
			$result = mysql_query("SELECT COUNT(*) FROM SoilStation");

			while($row = mysql_fetch_array($result))
			{
				echo $row[0];
			}

?>
