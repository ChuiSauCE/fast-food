<div class="closemark">
	X
</div>
<div class="picture">
	<style>
		html,
		body {
			height: 100%;
			margin: 0;
			padding: 0;
		}

		#map {
			height: 100%;
		}
	</style>
	<div id="map"></div>
</div>
<div class="hakkimizda">
	<center>
		<h2>
			İstiklal Büfe
		</h2>
		<p>Lorem ipsum dolor sit amet sed do incididunt ut laore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
<div class="row">
	<div class="col-md-6">
		<p><span class="littit"><i class="fa fa-map-signs" aria-hidden="true"></i> Adres:</span><br> Kayışdağı Yolu Caddesi No:9, İçerenköy Mahallesi, 34752 Ataşehir/İstanbul, Türkiye</p>
	</div>
	<div class="col-md-6">
		<p><span class="littit"><i class="fa fa-phone" aria-hidden="true"></i> Telefon:</span></p><p class="phone">+90 216 574 2411</p>
	</div>
</div>
	</center>
</div>
<script>
	var image = 'assets/img/marker.png'
	var map;

	function initMap() {
		var myLatLng = {
			lat: 40.970409,
			lng: 29.116985
		};
		map = new google.maps.Map(document.getElementById('map'), {
			center: myLatLng,
			zoom: 17
		});
		var marker = new google.maps.Marker({
			position: myLatLng,
			map: map,
			icon: image,
			title: 'Hello World!'
		});
	}
</script>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCi2Wy2JSCh7dGRtJv_yfRedOxx_lxrBL0&callback=initMap" async defer></script>
