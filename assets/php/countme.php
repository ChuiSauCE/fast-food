<?php
session_start();
include('connection.php');
if(isset($_POST['check'])){
	$userid = mysqli_real_escape_string($link,$_SESSION['userid']);
	$query = "SELECT * FROM carts WHERE userid = '$userid'";
	$results = mysqli_query($link,$query);
	$checkcart = mysqli_num_rows($results);
	echo ' <i class="fa fa-shopping-cart" aria-hidden="true"></i> '.$checkcart;
	}
?>