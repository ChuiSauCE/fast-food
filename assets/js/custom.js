$(document).ready(function () {
	// ADD SLIDEDOWN ANIMATION TO DROPDOWN //
	$('.dropdown').on('show.bs.dropdown', function (e) {
		$(this).find('.dropdown-menu').first().stop(true, true).slideDown();
	});
	// ADD SLIDEUP ANIMATION TO DROPDOWN //
	$('.dropdown').on('hide.bs.dropdown', function (e) {
		$(this).find('.dropdown-menu').first().stop(true, true).slideUp();
	});
	// BOOTSTARP DROPDOWN HOVER //
	$('.dropdown').hover(function () {
		$(this).find('.dropdown-menu').first().stop(true, true).slideDown();
		$(this).addClass("open");
	}, function () {
		$(this).find('.dropdown-menu').first().stop(true, true).slideUp();
		$(this).removeClass("open");
	});
	var card1 = $(".nav-cont .holder:nth-child(1)");
	var card2 = $(".nav-cont .holder:nth-child(2)");
	var card3 = $(".nav-cont .holder:nth-child(3)");
	var card4 = $(".nav-cont .holder:nth-child(4)");
	var card5 = $(".nav-cont .holder:nth-child(5)");
	var card6 = $(".nav-cont .holder:nth-child(6)");
	var card7 = $(".nav-cont .holder:nth-child(7)");
	var card8 = $(".nav-cont .holder:nth-child(8)");
	var card9 = $(".nav-cont .holder:nth-child(9)");
	var card10 = $(".nav-cont .holder:nth-child(10)");
	var pos1 = 20 + (36 * 0);
	var pos2 = 20 + (36 * 1);
	var pos3 = 20 + (36 * 2);
	var pos4 = 20 + (36 * 3);
	var pos5 = 20 + (36 * 4);
	var pos6 = 20 + (36 * 5);
	var pos7 = 20 + (36 * 6);
	var pos8 = 20 + (36 * 7);
	var pos9 = 20 + (36 * 8);
	var pos10 = 20 + (36 * 9);
	$(card1).hover(function () {
		pos1 += 0;
		$(card1).css({
			'transform': 'rotate(' + pos1 + 'deg)'
		});
		pos2 = pos1 + 50;
		$(card2).css({
			'transform': 'rotate(' + pos2 + 'deg)'
		});
		pos3 = pos1 + 50 + (260 / 8 * 1);
		$(card3).css({
			'transform': 'rotate(' + pos3 + 'deg)'
		});
		pos4 = pos1 + 50 + (260 / 8 * 2);
		$(card4).css({
			'transform': 'rotate(' + pos4 + 'deg)'
		});
		pos5 = pos1 + 50 + (260 / 8 * 3);
		$(card5).css({
			'transform': 'rotate(' + pos5 + 'deg)'
		});
		pos6 = pos1 + 50 + (260 / 8 * 4);
		$(card6).css({
			'transform': 'rotate(' + pos6 + 'deg)'
		});
		pos7 = pos1 + 50 + (260 / 8 * 5);
		$(card7).css({
			'transform': 'rotate(' + pos7 + 'deg)'
		});
		pos8 = pos1 + 50 + (260 / 8 * 6);
		$(card8).css({
			'transform': 'rotate(' + pos8 + 'deg)'
		});
		pos9 = pos1 + 50 + (260 / 8 * 7);
		$(card9).css({
			'transform': 'rotate(' + pos9 + 'deg)'
		});
		pos10 = pos1 + 50 + (260 / 8 * 8);
		$(card10).css({
			'transform': 'rotate(' + pos10 + 'deg)'
		});
	});
	$(card2).hover(function () {
		pos1 = pos2 - 50 - (260 / 8 * 0);
		$(card1).css({
			'transform': 'rotate(' + pos1 + 'deg)'
		});
		pos2 += 0;
		$(card2).css({
			'transform': 'rotate(' + pos2 + 'deg)'
		});
		pos3 = pos2 + 50 + (260 / 8 * 0);
		$(card3).css({
			'transform': 'rotate(' + pos3 + 'deg)'
		});
		pos4 = pos2 + 50 + (260 / 8 * 1);
		$(card4).css({
			'transform': 'rotate(' + pos4 + 'deg)'
		});
		pos5 = pos2 + 50 + (260 / 8 * 2);
		$(card5).css({
			'transform': 'rotate(' + pos5 + 'deg)'
		});
		pos6 = pos2 + 50 + (260 / 8 * 3);
		$(card6).css({
			'transform': 'rotate(' + pos6 + 'deg)'
		});
		pos7 = pos2 + 50 + (260 / 8 * 4);
		$(card7).css({
			'transform': 'rotate(' + pos7 + 'deg)'
		});
		pos8 = pos2 + 50 + (260 / 8 * 5);
		$(card8).css({
			'transform': 'rotate(' + pos8 + 'deg)'
		});
		pos9 = pos2 + 50 + (260 / 8 * 6);
		$(card9).css({
			'transform': 'rotate(' + pos9 + 'deg)'
		});
		pos10 = pos2 + 50 + (260 / 8 * 7);
		$(card10).css({
			'transform': 'rotate(' + pos10 + 'deg)'
		});
	});
	$(card3).hover(function () {
		pos1 = pos3 - 50 - (260 / 8 * 1);
		$(card1).css({
			'transform': 'rotate(' + pos1 + 'deg)'
		});
		pos2 = pos3 - 50 - (260 / 8 * 0);
		$(card2).css({
			'transform': 'rotate(' + pos2 + 'deg)'
		});
		pos3 += 0;
		$(card3).css({
			'transform': 'rotate(' + pos3 + 'deg)'
		});
		pos4 = pos3 + 50 + (260 / 8 * 0);
		$(card4).css({
			'transform': 'rotate(' + pos4 + 'deg)'
		});
		pos5 = pos3 + 50 + (260 / 8 * 1);
		$(card5).css({
			'transform': 'rotate(' + pos5 + 'deg)'
		});
		pos6 = pos3 + 50 + (260 / 8 * 2);
		$(card6).css({
			'transform': 'rotate(' + pos6 + 'deg)'
		});
		pos7 = pos3 + 50 + (260 / 8 * 3);
		$(card7).css({
			'transform': 'rotate(' + pos7 + 'deg)'
		});
		pos8 = pos3 + 50 + (260 / 8 * 4);
		$(card8).css({
			'transform': 'rotate(' + pos8 + 'deg)'
		});
		pos9 = pos3 + 50 + (260 / 8 * 5);
		$(card9).css({
			'transform': 'rotate(' + pos9 + 'deg)'
		});
		pos10 = pos3 + 50 + (260 / 8 * 6);
		$(card10).css({
			'transform': 'rotate(' + pos10 + 'deg)'
		});
	});
	$(card4).hover(function () {
		pos1 = pos4 - 50 - (260 / 8 * 2);
		$(card1).css({
			'transform': 'rotate(' + pos1 + 'deg)'
		});
		pos2 = pos4 - 50 - (260 / 8 * 1);
		$(card2).css({
			'transform': 'rotate(' + pos2 + 'deg)'
		});
		pos3 = pos4 - 50 - (260 / 8 * 0);
		$(card3).css({
			'transform': 'rotate(' + pos3 + 'deg)'
		});
		pos4 += 0;
		$(card4).css({
			'transform': 'rotate(' + pos4 + 'deg)'
		});
		pos5 = pos4 + 50 + (260 / 8 * 0);
		$(card5).css({
			'transform': 'rotate(' + pos5 + 'deg)'
		});
		pos6 = pos4 + 50 + (260 / 8 * 1);
		$(card6).css({
			'transform': 'rotate(' + pos6 + 'deg)'
		});
		pos7 = pos4 + 50 + (260 / 8 * 2);
		$(card7).css({
			'transform': 'rotate(' + pos7 + 'deg)'
		});
		pos8 = pos4 + 50 + (260 / 8 * 3);
		$(card8).css({
			'transform': 'rotate(' + pos8 + 'deg)'
		});
		pos9 = pos4 + 50 + (260 / 8 * 4);
		$(card9).css({
			'transform': 'rotate(' + pos9 + 'deg)'
		});
		pos10 = pos4 + 50 + (260 / 8 * 5);
		$(card10).css({
			'transform': 'rotate(' + pos10 + 'deg)'
		});
	});
	$(card5).hover(function () {
		pos1 = pos5 - 50 - (260 / 8 * 3);
		$(card1).css({
			'transform': 'rotate(' + pos1 + 'deg)'
		});
		pos2 = pos5 - 50 - (260 / 8 * 2);
		$(card2).css({
			'transform': 'rotate(' + pos2 + 'deg)'
		});
		pos3 = pos5 - 50 - (260 / 8 * 1);
		$(card3).css({
			'transform': 'rotate(' + pos3 + 'deg)'
		});
		pos4 = pos5 - 50 - (260 / 8 * 0);
		$(card4).css({
			'transform': 'rotate(' + pos4 + 'deg)'
		});
		pos5 += 0;
		$(card5).css({
			'transform': 'rotate(' + pos5 + 'deg)'
		});
		pos6 = pos5 + 50 + (260 / 8 * 0);
		$(card6).css({
			'transform': 'rotate(' + pos6 + 'deg)'
		});
		pos7 = pos5 + 50 + (260 / 8 * 1);
		$(card7).css({
			'transform': 'rotate(' + pos7 + 'deg)'
		});
		pos8 = pos5 + 50 + (260 / 8 * 2);
		$(card8).css({
			'transform': 'rotate(' + pos8 + 'deg)'
		});
		pos9 = pos5 + 50 + (260 / 8 * 3);
		$(card9).css({
			'transform': 'rotate(' + pos9 + 'deg)'
		});
		pos10 = pos5 + 50 + (260 / 8 * 4);
		$(card10).css({
			'transform': 'rotate(' + pos10 + 'deg)'
		});
	});
	$(card6).hover(function () {
		pos1 = pos6 - 50 - (260 / 8 * 4);
		$(card1).css({
			'transform': 'rotate(' + pos1 + 'deg)'
		});
		pos2 = pos6 - 50 - (260 / 8 * 3);
		$(card2).css({
			'transform': 'rotate(' + pos2 + 'deg)'
		});
		pos3 = pos6 - 50 - (260 / 8 * 2);
		$(card3).css({
			'transform': 'rotate(' + pos3 + 'deg)'
		});
		pos4 = pos6 - 50 - (260 / 8 * 1);
		$(card4).css({
			'transform': 'rotate(' + pos4 + 'deg)'
		});
		pos5 = pos6 - 50 - (260 / 8 * 0);
		$(card5).css({
			'transform': 'rotate(' + pos5 + 'deg)'
		});
		pos6 += 0;
		$(card6).css({
			'transform': 'rotate(' + pos6 + 'deg)'
		});
		pos7 = pos6 + 50 + (260 / 8 * 0);
		$(card7).css({
			'transform': 'rotate(' + pos7 + 'deg)'
		});
		pos8 = pos6 + 50 + (260 / 8 * 1);
		$(card8).css({
			'transform': 'rotate(' + pos8 + 'deg)'
		});
		pos9 = pos6 + 50 + (260 / 8 * 2);
		$(card9).css({
			'transform': 'rotate(' + pos9 + 'deg)'
		});
		pos10 = pos6 + 50 + (260 / 8 * 3);
		$(card10).css({
			'transform': 'rotate(' + pos10 + 'deg)'
		});
	});
	$(card7).hover(function () {
		pos1 = pos7 - 50 - (260 / 8 * 5);
		$(card1).css({
			'transform': 'rotate(' + pos1 + 'deg)'
		});
		pos2 = pos7 - 50 - (260 / 8 * 4);
		$(card2).css({
			'transform': 'rotate(' + pos2 + 'deg)'
		});
		pos3 = pos7 - 50 - (260 / 8 * 3);
		$(card3).css({
			'transform': 'rotate(' + pos3 + 'deg)'
		});
		pos4 = pos7 - 50 - (260 / 8 * 2);
		$(card4).css({
			'transform': 'rotate(' + pos4 + 'deg)'
		});
		pos5 = pos7 - 50 - (260 / 8 * 1);
		$(card5).css({
			'transform': 'rotate(' + pos5 + 'deg)'
		});
		pos6 = pos7 - 50 - (260 / 8 * 0);
		$(card6).css({
			'transform': 'rotate(' + pos6 + 'deg)'
		});
		pos7 += 0;
		$(card7).css({
			'transform': 'rotate(' + pos7 + 'deg)'
		});
		pos8 = pos7 + 50 + (260 / 8 * 0);
		$(card8).css({
			'transform': 'rotate(' + pos8 + 'deg)'
		});
		pos9 = pos7 + 50 + (260 / 8 * 1);
		$(card9).css({
			'transform': 'rotate(' + pos9 + 'deg)'
		});
		pos10 = pos7 + 50 + (260 / 8 * 2);
		$(card10).css({
			'transform': 'rotate(' + pos10 + 'deg)'
		});
	});
	$(card8).hover(function () {
		pos1 = pos8 - 50 - (260 / 8 * 6);
		$(card1).css({
			'transform': 'rotate(' + pos1 + 'deg)'
		});
		pos2 = pos8 - 50 - (260 / 8 * 5);
		$(card2).css({
			'transform': 'rotate(' + pos2 + 'deg)'
		});
		pos3 = pos8 - 50 - (260 / 8 * 4);
		$(card3).css({
			'transform': 'rotate(' + pos3 + 'deg)'
		});
		pos4 = pos8 - 50 - (260 / 8 * 3);
		$(card4).css({
			'transform': 'rotate(' + pos4 + 'deg)'
		});
		pos5 = pos8 - 50 - (260 / 8 * 2);
		$(card5).css({
			'transform': 'rotate(' + pos5 + 'deg)'
		});
		pos6 = pos8 - 50 - (260 / 8 * 1);
		$(card6).css({
			'transform': 'rotate(' + pos6 + 'deg)'
		});
		pos7 = pos8 - 50 - (260 / 8 * 0);
		$(card7).css({
			'transform': 'rotate(' + pos7 + 'deg)'
		});
		pos8 += 0;
		$(card8).css({
			'transform': 'rotate(' + pos8 + 'deg)'
		});
		pos9 = pos8 + 50 + (260 / 8 * 0);
		$(card9).css({
			'transform': 'rotate(' + pos9 + 'deg)'
		});
		pos10 = pos8 + 50 + (260 / 8 * 1);
		$(card10).css({
			'transform': 'rotate(' + pos10 + 'deg)'
		});
	});
	$(card9).hover(function () {
		pos1 = pos9 - 50 - (260 / 8 * 7);
		$(card1).css({
			'transform': 'rotate(' + pos1 + 'deg)'
		});
		pos2 = pos9 - 50 - (260 / 8 * 6);
		$(card2).css({
			'transform': 'rotate(' + pos2 + 'deg)'
		});
		pos3 = pos9 - 50 - (260 / 8 * 5);
		$(card3).css({
			'transform': 'rotate(' + pos3 + 'deg)'
		});
		pos4 = pos9 - 50 - (260 / 8 * 4);
		$(card4).css({
			'transform': 'rotate(' + pos4 + 'deg)'
		});
		pos5 = pos9 - 50 - (260 / 8 * 3);
		$(card5).css({
			'transform': 'rotate(' + pos5 + 'deg)'
		});
		pos6 = pos9 - 50 - (260 / 8 * 2);
		$(card6).css({
			'transform': 'rotate(' + pos6 + 'deg)'
		});
		pos7 = pos9 - 50 - (260 / 8 * 1);
		$(card7).css({
			'transform': 'rotate(' + pos7 + 'deg)'
		});
		pos8 = pos9 - 50 - (260 / 8 * 0);
		$(card8).css({
			'transform': 'rotate(' + pos8 + 'deg)'
		});
		pos9 += 0;
		$(card9).css({
			'transform': 'rotate(' + pos9 + 'deg)'
		});
		pos10 = pos9 + 50 + (260 / 8 * 0);
		$(card10).css({
			'transform': 'rotate(' + pos10 + 'deg)'
		});
	});
	$(card10).hover(function () {
		pos1 = pos10 - 50 - (260 / 8 * 8);
		$(card1).css({
			'transform': 'rotate(' + pos1 + 'deg)'
		});
		pos2 = pos10 - 50 - (260 / 8 * 7);
		$(card2).css({
			'transform': 'rotate(' + pos2 + 'deg)'
		});
		pos3 = pos10 - 50 - (260 / 8 * 6);
		$(card3).css({
			'transform': 'rotate(' + pos3 + 'deg)'
		});
		pos4 = pos10 - 50 - (260 / 8 * 5);
		$(card4).css({
			'transform': 'rotate(' + pos4 + 'deg)'
		});
		pos5 = pos10 - 50 - (260 / 8 * 4);
		$(card5).css({
			'transform': 'rotate(' + pos5 + 'deg)'
		});
		pos6 = pos10 - 50 - (260 / 8 * 3);
		$(card6).css({
			'transform': 'rotate(' + pos6 + 'deg)'
		});
		pos7 = pos10 - 50 - (260 / 8 * 2);
		$(card7).css({
			'transform': 'rotate(' + pos7 + 'deg)'
		});
		pos8 = pos10 - 50 - (260 / 8 * 1);
		$(card8).css({
			'transform': 'rotate(' + pos8 + 'deg)'
		});
		pos9 = pos10 - 50 - (260 / 8 * 0);
		$(card9).css({
			'transform': 'rotate(' + pos9 + 'deg)'
		});
		pos10 += 0;
		$(card10).css({
			'transform': 'rotate(' + pos10 + 'deg)'
		});
	});
	$(".nav-cont .holder").mouseleave(function () {
		pos1 = 20 + (36 * 0);
		pos2 = 20 + (36 * 1);
		pos3 = 20 + (36 * 2);
		pos4 = 20 + (36 * 3);
		pos5 = 20 + (36 * 4);
		pos6 = 20 + (36 * 5);
		pos7 = 20 + (36 * 6);
		pos8 = 20 + (36 * 7);
		pos9 = 20 + (36 * 8);
		pos10 = 20 + (36 * 9);
		$(card1).css({
			'transform': 'rotate(' + pos1 + 'deg)'
		});
		$(card2).css({
			'transform': 'rotate(' + pos2 + 'deg)'
		});
		$(card3).css({
			'transform': 'rotate(' + pos3 + 'deg)'
		});
		$(card4).css({
			'transform': 'rotate(' + pos4 + 'deg)'
		});
		$(card5).css({
			'transform': 'rotate(' + pos5 + 'deg)'
		});
		$(card6).css({
			'transform': 'rotate(' + pos6 + 'deg)'
		});
		$(card7).css({
			'transform': 'rotate(' + pos7 + 'deg)'
		});
		$(card8).css({
			'transform': 'rotate(' + pos8 + 'deg)'
		});
		$(card9).css({
			'transform': 'rotate(' + pos9 + 'deg)'
		});
		$(card10).css({
			'transform': 'rotate(' + pos10 + 'deg)'
		});
	});
	// Bring the product
	$(".mynav .tpop, .cards .holder").click(function () {
		var pagestuff = $(this).children('span.hide').text();
		$.ajax({
			url: "assets/contents/" + pagestuff + ".php"
			, type: 'get'
			, dataType: 'html'
			, success: function (data) {
					$(".mypopup .content").html(data);
					$(".mypopup .content .closemark").click(function () {
						$(".mypopup .content").addClass("removethecontent");
						setTimeout(function () {
							$(".mypopup").addClass("closin");
						}, 500);
						setTimeout(function () {
							$(".mypopup").removeClass("closin").removeClass("open");
							$(".mypopup .content").removeClass("bringthecontent").removeClass("removethecontent");
						}, 1000);
					});
					// Add to Cart For P
					$('.ings .addtocart').on('click', function () {
						var price = $(this).siblings('.price').children('p').text();
						var pname = $(this).parent().parent().siblings('.col-md-8').children('.pname').children('h2').text();
						$(this).addClass('addout').next().removeClass('hide').removeClass('addout').addClass('addin');
						$.ajax("assets/php/addtocart.php", {
							type: 'POST'
							, data: {
								pname: pname
								, price: price
							}
							, dataType: 'json'
							, success: function (data) {
								$('.usercart .my-cart').html('');
									if (data['checkcart'] > 0) {
										var total = 0;
										for (i = 0; i < data['price'].length; ++i) {
											$('.usercart .my-cart').append('<li><div class="removep">X </div>' + data['pname'][i] + '<span>' + data['price'][i] + ' TL</span> X</li>');
											total = total + parseFloat(data['price'][i]);
										}
										var buttoncheck = $(".usercart .buttons div").length;
										if(buttoncheck < 2){
										$('.usercart .buttons').prepend('<div class="btn">Sipariş Ver</div>');
										$('<div class="total"><span>Toplam: <span class="tprice">'+ total +'</span>TL</span></div>').insertAfter(".usercart .my-cart");
										}
										$('.usercart .tprice').html(total);
										$('.uname .checkcart').html(data['checkcart']);
										$('.ings .adding').removeClass('addin').addClass('addout').next().removeClass('hide').removeClass('addout').addClass('addin');
										setTimeout(function(){
										$('.ings .added').removeClass('addin').addClass('addout');
										$('.ings .addtocart').removeClass('addout').addClass('addin');
										},2000);
									}	
							}
							, error: function () {
								alert("Ups!");
							}
						});
					});
					// Add to Cart For Menu
					$('.menuler .addtocart').on('click', function () {
						var price = $(this).parent().siblings('ul').children('li:nth-child(4)').text();
						var pname = $(this).parent().siblings('h3').text();
						$(this).addClass('addout').next().removeClass('hide').removeClass('addout').addClass('addin');
						$.ajax("assets/php/addtocart.php", {
							type: 'POST'
							, data: {
								pname: pname
								, price: price
							}
							, dataType: 'json'
							, success: function (data) {
								$('.usercart .my-cart').html('');
									if (data['checkcart'] > 0) {
										var total = 0;
										for (i = 0; i < data['price'].length; ++i) {
											$('.usercart .my-cart').append('<li><div class="removep">X </div>' + data['pname'][i] + '<span>' + data['price'][i] + ' TL</span> X</li>');
											total = total + parseFloat(data['price'][i]);
										}
										var buttoncheck = $(".usercart .buttons div").length;
										if(buttoncheck < 2){
										$('.usercart .buttons').prepend('<div class="btn">Sipariş Ver</div>');
										$('<div class="total"><span>Toplam: <span class="tprice">'+ total +'</span>TL</span></div>').insertAfter(".usercart .my-cart");
										}
										$('.usercart .tprice').html(total);
										$('.uname .checkcart').html(data['checkcart']);
										$('.menuler .adding').removeClass('addin').addClass('addout').next().removeClass('hide').removeClass('addout').addClass('addin');
										setTimeout(function(){
										$('.menuler .added').removeClass('addin').addClass('addout');
										$('.menuler .addtocart').removeClass('addout').addClass('addin');
										},2000);
									}	
							}
							, error: function () {
								alert("Ups!")
							}
						});
					});
					// Add to cart For Drinks
					$('.order .addtocart').on('click', function () {
						var pname = $(this).parent().siblings('select').val();
						if (pname == 11) {
							pname = "Coca-Cola";
						}
						else if (pname == 12) {
							pname = "Coca-Cola Zero";
						}
						else if (pname == 13) {
							pname = "Coca-Cola Light";
						}
						else if (pname == 21) {
							pname = "Fanta";
						}
						else if (pname == 31) {
							pname = "Sprite";
						}
						else if (pname == 41) {
							pname = "Ayran";
						}
						else if (pname == 51) {
							pname = "Su";
						}
						else if (pname == 61) {
							pname = "Vişne";
						}
						else if (pname == 62) {
							pname = "Kayısı";
						}
						else if (pname == 63) {
							pname = "Portakal";
						}
						else if (pname == 64) {
							pname = "Elma";
						}
						else if (pname == 65) {
							pname = "Karışık";
						}
						var price = $(this).parent().siblings("p").text();
						$(this).addClass('addout').next().removeClass('hide').removeClass('addout').addClass('addin');
						$.ajax("assets/php/addtocart.php", {
							type: 'POST'
							, data: {
								pname: pname
								, price: price
							}
							, dataType: 'json'
							, success: function (data) {
										var total = 0;
										for (i = 0; i < data['price'].length; ++i) {
											$('.usercart .my-cart').append('<li><div class="removep">X </div>' + data['pname'][i] + '<span>' + data['price'][i] + ' TL</span></li>');
											total = total + parseFloat(data['price'][i]);
										}
										var buttoncheck = $(".usercart .buttons div").length;
										if(buttoncheck < 2){
										$('.usercart .buttons').prepend('<div class="btn">Sipariş Ver</div>');
										$('<div class="total"><span>Toplam: <span class="tprice">'+ total +'</span>TL</span></div>').insertAfter(".usercart .my-cart");
										}
										$('.usercart .tprice').html(total);
										$('.uname .checkcart').html(data['checkcart']);
										$('.order .adding').removeClass('addin').addClass('addout').next().removeClass('hide').removeClass('addout').addClass('addin');
										setTimeout(function(){
										$('.order .added').removeClass('addin').addClass('addout');
										$('.order .addtocart').removeClass('addout').addClass('addin');
										},2000);
									}
							, error: function () {
								alert("Ups!")
							}
						});
					});
				} // End Of Popup Success
		});
		$(".mypopup").addClass("open");
		setTimeout(function () {
			$(".mypopup .content").addClass("bringthecontent");
		}, 1000);
	});
	// Sign Up Form
	$(".login .sign-up-form .btn").on('click', function () {
		var name = $(this).siblings('input:nth-child(1)').val();
		var surname = $(this).siblings('input:nth-child(2)').val();
		var phone = $(this).siblings('input:nth-child(3)').val();
		var email = $(this).siblings('input:nth-child(4)').val();
		var password = $(this).siblings('input:nth-child(5)').val();
		var address = $(this).siblings('textarea').val();
		$.ajax("assets/php/signup.php", {
			type: 'POST'
			, data: {
				name: name
				, surname: surname
				, phone: phone
				, email: email
				, password: password
				, address: address
			}
			, dataType: 'html'
			, success: function (data) {
				alert(data);
			}
			, error: function () {
				alert('Birşeyler Ters Gitti Lütfen Daha Sonra Tekrar Deneyin :(');
			}
		});
	});
	// Sign in Form
	$(".login .sign-in-form .btn").on('click', function () {
		var email = $(this).siblings('input:nth-child(1)').val();
		var password = $(this).siblings('input:nth-child(2)').val();
		$.ajax("assets/php/signin.php", {
			type: 'POST'
			, data: {
				email: email
				, password: password
			}
			, dataType: 'json'
			, success: function (data) {
				$(".login .logged-in .uname").html(data['user']['name'] + " " + data['user']['surname'] + '<i class="fa fa-shopping-cart" aria-hidden="true"></i> <span class="checkcart">' + data['checkcart'] + '</span>');
				$(".login .sign-up").addClass("go-out");
				if (data['checkcart'] > 0) {
					var total = 0;
					for (i = 0; i < data['price'].length; ++i) {
						$('.usercart .my-cart').append('<li>' + data['pname'][i] + '<span>' + data['price'][i] + ' TL</span></li>');
						total = total + parseInt(data['price'][i]);
					}
					$('.usercart').append('<div class="total"><span>Toplam: <span class="tprice">' + total + '</span>TL</span></div>')
					$('.usercart').append('<div class="buttons"><div class="btn">Sipariş Ver</div><div class="btn">Hesabım</div></div>')
				}	else {
					$('.usercart .my-cart').append("<li class='text-center'>Sepetiniz de Ürün Bulunmamaktadır...</li>");
					$('.usercart').append('<div class="buttons"><div class="btn">Hesabım</div></div>');
				}
				setTimeout(function () {
					$(".login .sign-in").addClass("go-out");
				}, 200);
				setTimeout(function () {
					$(".login .sign-up").addClass("hide");
					$(".login .sign-in").addClass("hide");
					$(".login .logged-in").removeClass("hide").addClass("go-in");
					$(".login .logout-btn").removeClass("hide").addClass("go-in");
				}, 700)
			}
			, error: function () {
				alert('something went wrong, Please try again later');
			}
		});
	});
});