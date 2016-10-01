<?php 
session_start();
include('assets/php/connection.php');
if(isset($_GET['logout'])){
	session_destroy();
	header('Location: index.php');
}
if(isset($_SESSION['userid'])){
	$userid = mysqli_real_escape_string($link,$_SESSION['userid']);
	$query = "SELECT * FROM carts WHERE userid = '$userid'";
	$results = mysqli_query($link,$query);
	$checkcart = mysqli_num_rows($results);
	}
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
	<title></title>
	<!-- Custom -->
	<link href="assets/css/main.css" rel="stylesheet">
	<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
	<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
	<!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>
<body>
	<div class="container nav-cont">
		<div class="login">
			<div class="sign-up <?php if(isset($_SESSION['userid'])){echo "hide";}; ?>">
				Kaydol
				<div class="sign-up-form">
					<form action="" method="POST" role="form">
						<input type="text" placeholder="Adınız">
						<input type="text" placeholder="Soyadınız">
						<input type="number" placeholder="Telefon Numaranız">
						<input type="email" placeholder="E-mail">
						<input type="password" placeholder="Şifre">
						<textarea name="" id="" cols="30" rows="10" placeholder="Adresiniz"></textarea>
						<div class="btn">Kaydol</div>
					</form>
				</div>
			</div>
			<div class="sign-in <?php if(isset($_SESSION['userid'])){echo "hide";}; ?>">
				<span>Giriş</span>
				<div class="sign-in-form">
					<form action="" method="POST" role="form">
						<input type="email" placeholder="E-mail">
						<input type="password" placeholder="Şifre">
						<div class="btn">Giriş Yap</div>
					</form>
				</div>
			</div>
			<div class="logged-in <?php if(!isset($_SESSION['userid'])){echo "hide";}; ?>">
				<span class="uname"><?php if(isset($_SESSION['userid'])){echo $_SESSION['username'] ." ". $_SESSION['usersurname'].'<i class="fa fa-shopping-cart" aria-hidden="true"></i> <span class="checkcart">'.$checkcart.'</span>';}; ?></span>
				<div class="usercart">
					<h4>Sepetim</h4>
					<ul class="my-cart">
						<?php
						if(isset($_SESSION['userid'])){
							include('assets/php/connection.php');
							$userid = $_SESSION['userid'];
							$query = "SELECT * FROM carts WHERE userid = '$userid'";
							$results = mysqli_query($link,$query);
							$checkcart = mysqli_num_rows($results);
							$total = 0;
							if($checkcart > 0){
								while($row = mysqli_fetch_assoc($results)){
									echo "<li><div class='removep'>X </div>".$row['pname']."<span>".$row['price']."TL</span></li>";
									$total = $total + $row['price'];
								}
								echo "</ul>";
								echo '<div class="total"><span>Toplam: <span class="tprice">'.$total.'</span>TL</span></div>';
								echo '<div class="buttons"><div class="btn">Sipariş Ver</div><div class="btn">Hesabım</div></div>';
							} else {
								echo "<li class='text-center'>Sepetiniz de Ürün Bulunmamaktadır...</li>";
								echo '</ul><div class="buttons"><div class="btn">Hesabım</div></div>';
							}
						}
						?>
				</div>
			</div>
			<div class="logout-btn <?php if(!isset($_SESSION['userid'])){echo "hide";}; ?>"><a href="index.php?logout=1"><i class="fa fa-sign-out" aria-hidden="true"></i></a></div>
		</div>
		<div class="cards">
		<div class="holder"><span class="hide">p1</span><img src="assets\img\cards\1.jpg" alt="">
		</div>
		<div class="holder"><span class="hide">p2</span><img src="assets\img\cards\2.jpg" alt="">
		</div>
		<div class="holder"><span class="hide">p3</span><img src="assets\img\cards\3.jpg" alt="">
		</div>
		<div class="holder"><span class="hide">p4</span><img src="assets\img\cards\4.jpg" alt="">
		</div>
		<div class="holder"><span class="hide">p5</span><img src="assets\img\cards\5.jpg" alt="">
		</div>
		<div class="holder"><span class="hide">p6</span><img src="assets\img\cards\6.jpg" alt="">
		</div>
		<div class="holder"><span class="hide">p7</span><img src="assets\img\cards\7.jpg" alt="">
		</div>
		<div class="holder"><span class="hide">p8</span><img src="assets\img\cards\8.jpg" alt="">
		</div>
		<div class="holder"><span class="hide">p9</span><img src="assets\img\cards\9.jpg" alt="">
		</div>
		<div class="holder"><span class="hide">p10</span><img src="assets\img\cards\10.jpg" alt="">
		</div>
		</div>
		<nav class="ribbon">
			<div class="mynav">
				<div class="navleft">
					<ul>
						<li>
							<div class="homep tpop"><span class="hide">hakkimizda</span>Hakkımızda</div>
						</li>
						<li>
							<div class="tpop"><span class="hide">galeri</span>
							Galeri</div>
						</li>
						<li>
							<div class="tpop"><span class="hide">menuler</span>Menüler</div>
						</li>
					</ul>
				</div>
				<div class="navcenter">
					<div class="head-logo">
						<img src="assets/img/logo.gif" alt="">
						<ul>
							<li>İ</li>
							<li>S</li>
							<li>T</li>
							<li>İ</li>
							<li>K</li>
							<li>L</li>
							<li>A</li>
							<li>L</li>
							<li> </li>
							<li>B</li>
							<li>Ü</li>
							<li>F</li>
							<li>E</li>
						</ul>
					</div>
				</div>
				<div class="navright">
					<ul>
						<li>
							<div class="tpop"><span class="hide">icecekler</span>İçecekler</div>
						</li>
						<li>
							<div class="tpop"><span class="hide">kampanya</span>Kampanyalar</div>
						</li>
						<li>
							<div class="tpop"><span class="hide">iletisim</span>İletişim</div>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	</div>
	<div class="mypopup">
		<div class="pop-back ">
			<div class="1p"></div>
			<div class="2p"></div>
			<div class="3p"></div>
			<div class="4p"></div>
			<div class="5p"></div>
			<div class="6p"></div>
			<div class="7p"></div>
			<div class="8p"></div>
		</div>
		<div class="content">

		</div>
	</div>
	<script src="assets/js/jquery.min.js"></script>
	<script src="assets/js/bootstarp/bootstrap.min.js"></script>
	<script src="assets/js/custom.js" type="text/javascript"></script>
</body>

</html>
