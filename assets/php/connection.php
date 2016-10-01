<?php 
	$link = mysqli_connect("localhost", "root", "", "fastfood");
	if(mysqli_connect_error()){
		die ("Error on connection");
	}
	mysqli_query($link, "SET NAMES utf8");
?>