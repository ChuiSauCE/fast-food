<?php
session_start();
?>
<div class="closemark"> X </div>
<div class="picture"> </div>
<div class="ings row">
	<div class="col-md-8">
		<center class="pname">
			<h2>The Buffalo Burger</h2></center>
		<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
	</div>
	<div class="col-md-4">
		<center>
			<div class="price">
				<h3>Fiyat:</h3>
				<p>8.99 TL</p>
			</div>
			<div class="buttons">
				<?php
				if(isset($_SESSION['userid'])){ ?>
				<div class="addtocart">Sepete Ekle</div>
				<div class="adding hide"><i class="fa fa-spinner fa-pulse fa-2x fa-fw"></i><span class="sr-only">Loading...</span></div>
				<div class="added hide">Ürün Sepete Eklendi!</div>
				<?php } else { ?>
				<div class="cantadd">Alışveriş Yapmak İçin Lütfen Üye Olunuz...</div>
				<?php
				}
				?>
			</div>
		</center>
	</div>
</div>