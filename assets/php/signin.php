<?php
session_start();
include('connection.php');
if(isset($_POST['email'])){
	$email = mysqli_real_escape_string($link,$_POST['email']);
	$password = mysqli_real_escape_string($link,$_POST['password']);
	$query = "SELECT * FROM users WHERE email = '$email' AND password = '$password'";
	$results = mysqli_query($link, $query);
	$checkuser = mysqli_num_rows($results);
	if($checkuser > 0){
		$row = mysqli_fetch_assoc($results);
		$userid = $row['id'];
		$_SESSION['userid'] = $row['id'];
		$_SESSION['username'] = $row['name'];
		$_SESSION['usersurname'] = $row['surname'];
		$output['user']['name'] = $_SESSION['username'];
		$output['user']['surname'] = $_SESSION['usersurname'];
		$query = "SELECT * FROM carts WHERE userid = '$userid'";
		$results = mysqli_query($link, $query);
		$checkcart = mysqli_num_rows($results);
		$output['checkcart'] = $checkcart;
		if($checkcart > 0){
			while($row = mysqli_fetch_assoc($results)){
				$output['pname'][] = $row['pname'];
				$output['price'][] = $row['price'];
			}
		}
		print json_encode($output);
	} else {
		$output['0'] = "Ups!";
		print json_encode($output);
}
}