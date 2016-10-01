<?php
include('connection.php');
if($_POST['name']){
	$name = mysqli_real_escape_string($link,$_POST['name']);
	$surname = mysqli_real_escape_string($link,$_POST['surname']);
	$email = mysqli_real_escape_string($link,$_POST['email']);
	$password = mysqli_real_escape_string($link,$_POST['password']);
	$phone = mysqli_real_escape_string($link,$_POST['phone']);
	$address = mysqli_real_escape_string($link,$_POST['address']);
	$query = "INSERT INTO users (name, surname, email, password,phone, address, time) VALUES ('$name','$surname','$email','$password','$phone','$address', null)";
	if(mysqli_query($link,$query)){
		echo "Good";
	} else {
		echo mysqli_error($link);
	}
}
?>