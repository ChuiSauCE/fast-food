<?php session_start(); ?>
<div class="closemark">
	X
</div>
<div class="icecekler">
	<div class="brands">
		<div class="active-b"></div>
		<div>
			<img src="assets/img/brands/1.png" height='50px' alt="1">
		</div>
		<div>
			<img src="assets/img/brands/2.png" height='50px' alt="2">
		</div>
		<div>
			<img src="assets/img/brands/3.gif" height='50px' alt="3">
		</div>
		<div>
			<img src="assets/img/brands/4.png" height='50px' alt="4">
		</div>
		<div>
			<img src="assets/img/brands/5.png" height='50px' alt="5">
		</div>
		<div>
			<img src="assets/img/brands/6.png" height='50px' alt="6">
		</div>
	</div>
	<div class="bottle">
		<img src="assets/img/brands/11.png" width="400px" alt="" />
	</div>
	<div class="order">
		<select id="type" name="" id="">
			<option value="11" selected>Coca-Cola</option>
			<option value="12">Coca-Cola Zero</option>
			<option value="13">Coca-Cola Light</option>
		</select>
		<br>
		<div class="adet-box">
			<input type="number" value="1"><span>Adet</span>
		</div>
		<p class="price">5 TL</p>
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
	</div>
</div>
<script>
$(document).ready(function () {
	$('.adet-box input').on('change',function(){
	var quantity = $(this).val();
	var Total=  quantity * 5;
	$('p.price').text(Total + 'TL');
	});
	$('.adet-box input').on('keyup',function(){
		var quantity = $(this).val();
	  var Total=  quantity * 5;
		$('p.price').text(Total + 'TL');
	});
	$('div.brands>div').on('mouseenter',function(){
		var activeb = $(this).siblings('.active-b');
		var order = $(this).index();
		if(order == 1){
			$(activeb).css({left : '40px', width : '160px'});
		}
		if(order == 2){
			$(activeb).css({left : '233px', width : '59px'})
		}
		if(order == 3){
			$(activeb).css({left : '320px', width : '110px'})
		}
		if(order == 4){
			$(activeb).css({left : '460px', width : '57px'})
		}
		if(order == 5){
			$(activeb).css({left : '545px', width : '90px'})
		}
		if(order == 6){
			$(activeb).css({left : '660px', width : '102px'})
		}
	});
	$('#type').on('change', function(){
		 var type = $(this).val();
		 var iurl = "assets/img/brands/"+ type +".png"
		 $('.bottle img').fadeOut(function(){
			 $(this).attr("src",iurl).fadeIn();
		 });
	});
	$('.brands img').on('click', function(){
		var bnum = $(this).attr('alt');
		var iurl = "assets/img/brands/"+ bnum +"1.png"
		if(bnum == 1){
			$('#type').html('<option value="11" selected>Coca-Cola</option>');
			$('#type').append('<option value="12">Coca-Cola Zero</option>');
			$('#type').append('<option value="13">Coca-Cola Light</option>');
		}
		if(bnum == 2){
			$('#type').html('<option value="21" selected>Fanta</option>');
		}
		if(bnum == 3){
			$('#type').html('<option value="31" selected>Sprite</option>');
		}
		if(bnum == 4){
			$('#type').html('<option value="41" selected>Ayran</option>');
		}
		if(bnum == 5){
			$('#type').html('<option value="51" selected>Su</option>');
		}
		if(bnum == 6){
			$('#type').html('<option value="61" selected>Vişne</option>');
			$('#type').append('<option value="62">Kayısı</option>');
			$('#type').append('<option value="63">Portakal</option>');
			$('#type').append('<option value="64">Elma</option>');
			$('#type').append('<option value="65">Karışık</option>');
		}
		$('.bottle img').fadeOut(function(){
			$(this).attr("src",iurl).fadeIn();
		});
	});
});
</script>
