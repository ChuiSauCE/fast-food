<?php
session_start();
include('connection.php');
	if(isset($_POST['pname'])){
		$pname = mysqli_real_escape_string($link,$_POST['pname']);
		$price = mysqli_real_escape_string($link,$_POST['price']);
		$userid = mysqli_real_escape_string($link,$_SESSION['userid']);
		$query = "INSERT INTO carts (userid, pname, price, time) VALUES ('$userid', '$pname', '$price', null)";
		if(mysqli_query($link,$query)){
			$query = "SELECT * FROM carts WHERE userid = '$userid'";
			$results = mysqli_query($link,$query);
			$checkcart = mysqli_num_rows($results);
			$output['checkcart'] = $checkcart;
			if($checkcart > 0){
				while($row = mysqli_fetch_assoc($results)){
					$output['price'][] = $row['price'];
					$output['pname'][] = $row['pname'];
				}
			}
		print json_encode($output);
		}
	}
?>