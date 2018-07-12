

$(document).ready(function() {
  $("#promo_select").hide();
  getHighlight();
})

function getMenus() {
  $("#promo_select").hide();
  $("#display_title").html("Menus");
  
  $.get("php/getMenus.php", function(data){
    $("#display").html(data);
  });
}

function getProducts() {
  $("#promo_select").hide();
  $("#display_title").html("Produits");
  
  $.get("php/getProducts.php", function(data){
    $("#display").html(data);
  });
}

function getPromotions() {
  $("#promo_select").removeClass("invisible").show();
  $("#display").html("");
  $("#display_title").html("Promotions");
  
  $.get("php/getPromos.php", function(data) {
    $("#s_p").html(data);
  });
}

function getHighlight() {
  $("#promo_select").hide();
  $("#display_title").html("A l'affiche");
  
  $.get("php/getHighlight.php", function(data){
    $("#display").html(data);
  });
}

$(document).on('change', '#s_p', function() {
  console.log($("#s_p").val());
  $("#s_p option:eq(0)").prop('disabled', true);
    
  var a = $.get("php/load_promos.php", { val : $("#s_p").val() })
  .done(function(data) {
    $("#display").html(data);
  });
});

$("#s_p").on('change', function() {
  console.log(this.value);
})

function mdl_shw(obj) {
	console.log(obj);
	temp.id = obj.dataset.id;
	temp.name = obj.dataset.value;
	temp.products = [];
	
	pos = 1;
	
	$.getJSON('php/load_menu.php', { id: obj.dataset.id }, function(data) {
		console.log(data);
		menu = data;
		display_menu();
	});
	
	let a = `${obj.dataset.item} : ${obj.textContent}`;
  let modal = $("#modal");
  modal.find('.modal-title').text(a);
	modal.modal('show');
};

function display_menu() {
	$("#modal_menu_display").html("");
	console.log("pos = " + pos);
	let max_pos = get_max_pos_menu();
	$.each(menu, function(i, data) {
		if(data.position === pos) {
			if(data.position !== max_pos)
				$("#modal_menu_display").append("<div class='"+data.name+"' onclick='add_product_to_temp(this); display_menu()' data-id='" + data.id + "' data-name='" + data.name + "' data-price='" + data.price + "'>" + data.name+  " - " + data.price + "</div><br>");
			else {
				$("#modal_menu_display").append("<div class='"+data.name+"' onclick='add_product_to_temp(this); update_cmd()' data-id='" + data.id + "' data-name='" + data.name + "' data-price='" + data.price + "'>" + data.name+  " - " + data.price + "</div><br>");
			}
		}
	});
	pos++;
}

function display_cmd() {
  if(parseInt(cmd.total) !== 0) $("#send_btn").removeClass('disabled').removeClass('btn-outline-info').addClass('btn-success');
  else $("#send_btn").addClass('disabled').removeClass('btn-success').addClass('btn-outline-info');
  
  console.log(cmd);
	$("#display_cmd").html("");
	$.each(cmd.items, function(i, data) {
		$("#display_cmd").append("<div class='row'><div class='col-md-9'>- " + data.name + "</div><div class='text-danger col-md-3' onclick='remove_item("+data.pos+")'>X</div><br>");
		if(data.hasOwnProperty('products')) {
			$.each(data.products, function(j, dt) {
				$("#display_cmd").append("<div style='margin-left: 30px;'>" + dt.name + "</div>");
			});
		}
    $("#display_cmd").append("</div>");
	});
	$("#display_cmd").append("<br>- Total : " + cmd.total + "<br>");
}

function remove_item(cmd_pos) {
  let val = 0;
  $.each(cmd.items, function(i, data) {
    if(data.pos === parseInt(cmd_pos)) {
      let price = 0;
      if(data.hasOwnProperty('products')) {
        $.each(data.products, function(j, data2) {
          price += parseInt(data2.price);
        })
      } else {
        price = parseInt(data.price);
      }
      delete cmd.items[val];
      cmd.items.length -=1;
      cmd.total -= price;
    }
    val++;
  });
  
  display_cmd();
}

function update_cmd() {
	$.each(temp.products, function(i, data) {
		console.log(data.price);
		cmd.total += parseInt(data.price);
	});
	cmd.items.push(temp);
  cmd.items[cmd.items.length-1].pos = parseInt(json_pos);
  json_pos++;
	temp = {};
	
	$('#modal').modal('hide');
	display_cmd();
}

function product_to_cmd(obj) {
  console.log(obj.dataset.price);
  cmd.items.push({ id: obj.dataset.id, name: obj.dataset.value, price: parseInt(obj.dataset.price), pos: parseInt(json_pos) });
  cmd.total += parseInt(obj.dataset.price);
  json_pos++;
  display_cmd();
}

function add_product_to_temp(obj) {
	temp.products.push({ id: obj.dataset.id, name: obj.dataset.name, price: obj.dataset.price });
}

function get_max_pos_menu() {
	let max = 1;
	$.each(menu, function(i, data) {
		if(data.position > max) max = data.position;
	});
	return max;
}

function build_final_cmd() {
  var d = new Date();
  var date = d.getFullYear() + "-" + (d.getMonth()+1) + "-" + d.getDate() + " " +
  d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
  
  let ret = {};
  ret.total = cmd.total;
  ret.date = date;
  ret.commandProduct = [];
  $.each(cmd.items, function(i, data) {
    if(data.hasOwnProperty('products')) {
      $.each(data.products, function(j, data2) {
        ret.commandProduct.push({ id_product: data2.id, id_menu: data.id });
      })
    } else {
      ret.commandProduct.push({ id_product: data.id, id_menu: null });;
    }
  });
  send_cmd_to_base(ret);
  location.reload();
}