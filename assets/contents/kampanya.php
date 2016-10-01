<div class="closemark">
	X
</div>
<div class="stump">
	Yakında!
	<div id="getting-started"></div>
</div>
<div class="picture">
</div>
<div class="kampanya">
	<div class="ings row">
			<div class="col-md-8">
				<center>
					<h2>
						The Buffalo Burger Menu
					</h2>
				</center>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
				</p>
			</div>
			<div class="col-md-4">
				<center>
				<div class="price">
						<h3>
							Fiyat:
						</h3>
						<p class="crossed">
							18.99 TL
						</p>
						<p>
							8.99 TL
						</p>
				</div>
				<div class="addtocard">
					Sepete Ekle
				</div>
			</center>
			</div>
	</div>
</div>
<script src="assets/js/jquery.countdown.min.js" type="text/javascript"></script>
<script type="text/javascript">
	$("#getting-started").countdown("2016/10/01", function(event) {
		$(this).text(
			event.strftime('%D Gün %H:%M:%S')
		);
	});
</script>
