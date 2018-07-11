function displayBackContent(type){
	var content = document.getElementById("back-content");
	var request = new XMLHttpRequest();

	request.onreadystatechange = function(){
		if( request.readyState == 4 && request.status == 200){
			content.innerHTML = request.responseText;
		}
	}	
	switch (type) {
    case "comm":
        var link = "comm";
        break;
    case "prod":
        var link = "prod";
        break;
    case "menu":
        var link = "menu";
        break;
    case "prom":
        var link = "prom";
        break;
    case "mea":
        var link = "mea";
        break;
}

	request.open("GET", link+"Content.php");
	request.send();
}

function sendProm(){

	var id = document.getElementById("id_prom").value;
	var description = document.getElementById("description").value;
	var prerequisite = document.getElementById("prerequisite").value;
	var available = document.getElementById("available").value;
	var start_date = document.getElementById("start_date").value;
	var end_date = document.getElementById("end_date").value;

	if(description === "" || prerequisite === "" || start_date === ""  || end_date === "" || available === "" ){
		alert("Champ(s) vide(s)");
	}else{
		if(id !== ""){
			var request = new XMLHttpRequest();

			request.onreadystatechange = function(){
				if( request.readyState == 4 && request.status == 204 ){
					window.location.reload(false); 
				}
			}

			var json_data = {
				"description": description,
				"prerequisite": prerequisite,
				"available": available,
				"start_date": start_date,
				"end_date": end_date
			};
			var formatted_json = JSON.stringify(json_data);

			request.open("POST", "http://localhost:8080/promotion/"+id, true);
			request.setRequestHeader("Content-type", "application/json");
			request.send(formatted_json);
		}else{
			var request = new XMLHttpRequest();

			request.onreadystatechange = function(){
				if( request.readyState == 4 && request.status == 204 ){
					window.location.reload(false); 
				}
			}
			var json_data = {
				"description": description,
				"prerequisite": prerequisite,
				"available": available,
				"start_date": start_date,
				"end_date": end_date
			};
			var formatted_json = JSON.stringify(json_data);

			request.open("POST", "http://localhost:8080/promotion/", true);
			request.setRequestHeader("Content-type", "application/json");
			request.send(formatted_json);
		}	
	}	
}

function sendProd(){

	var id = document.getElementById("id_prod").value;
	var name = document.getElementById("name").value;
	var price = document.getElementById("price").value;
	var highlight = document.getElementById("highlight").value;
	var category = document.getElementById("category").value;
	var available = document.getElementById("available").value;
	var id_promotion = document.getElementById("id_promotion").value;

	if(name === "" || price === "" || highlight === ""  || category === "" || available === "" ){
		alert("Champ(s) vide(s)");
	}else{
		if(id !== ""){
			var request = new XMLHttpRequest();

			request.onreadystatechange = function(){
				if( request.readyState == 4 && request.status == 201 ){
					window.location.reload(false); 
				}
			}

			var json_data = {
				"id": id,
				"name": name,
				"price": price,
				"priority": highlight,
				"category": category,
				"available": available,
				"id_promotion": id_promotion
			};
			var formatted_json = JSON.stringify(json_data);

			request.open("POST", "http://localhost:8080/product/update", true);
			request.setRequestHeader("Content-type", "application/json");
			request.send(formatted_json);
		}else{
			var request = new XMLHttpRequest();

			request.onreadystatechange = function(){
				if( request.readyState == 4 && request.status == 201 ){
					window.location.reload(false); 
				}
			}
			var json_data = {
				"name": name,
				"price": price,
				"priority": highlight,
				"category": category,
				"available": available,
				"id_promotion": id_promotion
			};
			var formatted_json = JSON.stringify(json_data);

			request.open("POST", "http://localhost:8080/product/add", true);
			request.setRequestHeader("Content-type", "application/json");
			request.send(formatted_json);
		}
		
	}
	
}

function sendMenu(){

	var id = document.getElementById("id_menu").value;
	var name = document.getElementById("name").value;
	var description = document.getElementById("description").value;
	var highlight = document.getElementById("highlight").value;
	var size = document.getElementById("size").value;
	var available = document.getElementById("available").value;
	var id_promotion = document.getElementById("id_promotion").value;

	if(name === "" || description === "" || highlight === ""  || size === "" || available === "" ){
		alert("Champ(s) vide(s)");
	}else{
		if(id !== ""){
			var request = new XMLHttpRequest();

			request.onreadystatechange = function(){
				if( request.readyState == 4 && request.status == 204 ){
					window.location.reload(false); 
				}
			}

			var json_data = {
				"id": id,
				"name": name,
				"description": description,
				"highlight": highlight,
				"size": size,
				"available": available,
				"id_promotion": id_promotion
			};
			var formatted_json = JSON.stringify(json_data);

			request.open("POST", "http://localhost:8080/menu/updateMenu", true);
			request.setRequestHeader("Content-type", "application/json");
			request.send(formatted_json);
		}else{
			var request = new XMLHttpRequest();

			request.onreadystatechange = function(){
				if( request.readyState == 4 && request.status == 204 ){
					window.location.reload(false); 
				}
			}
			var json_data = {
				"name": name,
				"description": description,
				"highlight": highlight,
				"size": size,
				"available": available,
				"id_promotion": id_promotion
			};
			var formatted_json = JSON.stringify(json_data);

			request.open("POST", "http://localhost:8080/menu/addMenu", true);
			request.setRequestHeader("Content-type", "application/json");
			request.send(formatted_json);
		}
		
	}
	
}


function deleteProm(){

	var id = document.getElementById("id_prom").value;
	if(id !== ""){
		var request = new XMLHttpRequest();

		request.onreadystatechange = function(){
			if( request.readyState == 4 && request.status == 204 ){
				window.location.reload(false); 
			}
		}

		request.open("DELETE", "http://localhost:8080/promotion/"+id, true);
		request.send();
	}	
}

function deleteProd(){

	var id = document.getElementById("id_prod").value;
	if(id !== ""){
		var request = new XMLHttpRequest();

		request.onreadystatechange = function(){
			if( request.readyState == 4 && request.status == 204 ){
				window.location.reload(false); 
			}
		}

		var json_data = {
			"id": id
		};
		var formatted_json = JSON.stringify(json_data);

		request.open("POST", "http://localhost:8080/product/delete", true);
		request.setRequestHeader("Content-type", "application/json");
		request.send(formatted_json);
	}	
}

function deleteMenu(){

	var id = document.getElementById("id_menu").value;
	if(id !== ""){
		var request = new XMLHttpRequest();

		request.onreadystatechange = function(){
			if( request.readyState == 4 && request.status == 204 ){
				window.location.reload(false); 
			}
		}

		var json_data = {
			"id": id,
			"available": 0
		};
		var formatted_json = JSON.stringify(json_data);

		request.open("POST", "http://localhost:8080/menu/updateMenu", true);
		request.setRequestHeader("Content-type", "application/json");
		request.send(formatted_json);
	}	
}


function fillProm(){
	var content = document.getElementById("choiceProm");
	var fills = content.value.split("|");

	var id = document.getElementById("id_prom").value = fills[0];
	var description = document.getElementById("description").value = fills[1];
	var prerequisite = document.getElementById("prerequisite").value = fills[2];
	var available = document.getElementById("available").options.selectedIndex = fills[3] == "0" ? "2" : fills[3];
	var start_date = document.getElementById("start_date").value = fills[4];
	var end_date = document.getElementById("end_date").value = fills[5];
}


function fillProd(){
	var content = document.getElementById("choiceProd");
	var fills = content.value.split("|");

	var id = document.getElementById("id_prod").value = fills[0];
	var name = document.getElementById("name").value = fills[1];
	var price = document.getElementById("price").value = fills[2];
	var highlight = document.getElementById("highlight").value = fills[3];
	var category = document.getElementById("category").value = fills[4];
	var available = document.getElementById("available").options.selectedIndex = fills[5] == "0" ? "2" : fills[5];
	var id_promotion = document.getElementById("id_promotion").value = fills[6];
}

function fillMenu(){
    var content = document.getElementById("choiceMenu");
    var fills = content.value.split("|");

    var id = document.getElementById("id_menu").value = fills[0];
    var name = document.getElementById("name").value = fills[1];
    var description = document.getElementById("description").value = fills[2];
    var highlight = document.getElementById("highlight").value = fills[3];
    var size = document.getElementById("size").value = fills[4];
    var available = document.getElementById("available").options.selectedIndex = fills[5] == "0" ? "2" : fills[5];
    var id_promotion = document.getElementById("id_promotion").value = fills[6];


    var content = document.getElementById("produit_in");
    if(id !== ""){
    
    var request = new XMLHttpRequest();

    request.onreadystatechange = function(){
        if( request.readyState == 4 && request.status == 200){
            var prods = JSON.parse(request.responseText);

            //content.innerHTML = request.responseText;
            for(var i =0; i<prods.length; i++){
                content.innerHTML+= "<option value="+prods[i].id+">"+prods[i].name+"</option>";
            }
        }
    }    

    request.open("GET", "http://localhost:8080/product?available=1");
    request.send();
    }else{
        content.innerHTML = "";
    }
}
function fillMenuProd(){
    var id = document.getElementById("id_menu").value;
    var content2 = document.getElementById("produit_out");
    if(id !== ""){
        
        var request2 = new XMLHttpRequest();

        request2.onreadystatechange = function(){
            if( request2.readyState == 4 && request2.status == 200){
                prodsMenu = JSON.parse(request2.responseText);

                //content.innerHTML = request.responseText;
                for(var i =0; i<prodsMenu.length; i++){
                    content2.innerHTML+= "<option value="+prodsMenu[i]["Products.id"]+">"+prodsMenu[i]["Products.name"]+"</option>";
                }
                console.log(prodsMenu);
            }
        }    

        request2.open("GET", "http://localhost:8080/menu/detailed/"+id);
        request2.send();
    }else{
        content2.innerHTML = "";
    }
}
function addInMenu(){

	var id = document.getElementById("id_menu").value;
	var id_prod = document.getElementById("produit_in").value;
	var price_in = document.getElementById("price_in").value;
	var position = document.getElementById("position").value;

	if(id === "" || id_menu === "" || price_in === ""  || position === "" ){
		alert("Champ(s) vide(s)");
	}else{
			var request = new XMLHttpRequest();

			request.onreadystatechange = function(){
				if( request.readyState == 4 && request.status == 201 ){
					window.location.reload(false); 
				}
			}

			var json_data = {
				"id_product": id_prod,
				"id_menu": id,
				"price": price_in,
				"position": position
			};
			var formatted_json = JSON.stringify(json_data);

			request.open("POST", "http://localhost:8080/menu/addProductToMenu", true);
			request.setRequestHeader("Content-type", "application/json");
			request.send(formatted_json);
	}

}

function deleteFromMenu(){
	var id = document.getElementById("id_menu").value;
	var id_prod = document.getElementById("produit_out").value;
	var position = document.getElementById("position_out").value;

	if(id === "" || id_menu === "" ){
		alert("Champ(s) vide(s)");
	}else{
			var request = new XMLHttpRequest();

			request.onreadystatechange = function(){
				if( request.readyState == 4 && request.status == 201 ){
					window.location.reload(false); 
				}
			}

			var json_data = {
				"id_product": id_prod,
				"id_menu": id,
				"position": position
			};
			var formatted_json = JSON.stringify(json_data);

			request.open("POST", "http://localhost:8080/menu/removeProductFromMenu", true);
			request.setRequestHeader("Content-type", "application/json");
			request.send(formatted_json);
	}

}



function getCommand(){
	const listeCommand = [];
	$.ajax({
		url: "http://localhost:8080/command?done=0",
		type: "GET",
		beforeSend: function(xhr){
			xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
			xhr.setRequestHeader("Content-type", "application/json");
		},
		dataType : 'json',
		async: false,
		success: function(data) {
			for(let i = 0; i < data.length; i++){
				$.ajax({
					url: "http://localhost:8080/command/getCommand?id_command="+data[i].id,
					type: "GET",
					beforeSend: function(xhr){
						xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
						xhr.setRequestHeader("Content-type", "application/json");
					},
					async: false,
					dataType : 'json',
					success: function(commandProduct) {
						let commandTotal = {};
						commandTotal.total = data[i].total;
						commandTotal.id = data[i].id;
						commandTotal.commandResult = [];
						let product = {};
						let menu = {};
						for(let j = 0; j < commandProduct.length; j++){
							if(commandProduct[j].id_menu != null){
								$.ajax({
									url: "http://localhost:8080/menu?id="+commandProduct[j].id_menu,
									type: "GET",
									beforeSend: function(xhr){
										xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
										xhr.setRequestHeader("Content-type", "application/json");
									},
									dataType : 'json',
									async: false,
									success: function(menuReturn) {
										product = {};
										menu = {};
										menu.name = menuReturn[0].name;
										menu.product = [];
										for(let k = 0; k < menuReturn[0].size; k++){
											$.ajax({
												url: "http://localhost:8080/product/getProduct?id="+commandProduct[k + j].id_product,
												type: "GET",
												async: false,
												beforeSend: function(xhr){
													xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
													xhr.setRequestHeader("Content-type", "application/json");
												},
												dataType : 'json',
												success: function(productReturn) {
													$.ajax({
														url: "http://localhost:8080/menu/findPriceMenu",
														type: "POST",
														data:JSON.stringify({
															"id_menu" : commandProduct[j].id_menu,
															"id_product" : commandProduct[k + j].id_product,
															"position" : k+1
														}),
														dataType:'json',
														async: false,
														beforeSend: function(xhr){
															xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
															xhr.setRequestHeader("Content-type", "application/json");
														},
														success: function(priceReturn) {
															if(priceReturn !== undefined && priceReturn.length !== 0){
																product = {};
																product.name = productReturn.name;
																product.price = priceReturn[0].price;
																menu.product.push(product);	
															}
														}
													});	
												}
											});
										}
										j += menuReturn[0].size;
										commandTotal.commandResult.push(menu);						
									}
								});
							}else{
								$.ajax({
									url: "http://localhost:8080/product/getProduct?id="+commandProduct[j].id_product,
									type: "GET",
									async: false,
									beforeSend: function(xhr){
										xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
										xhr.setRequestHeader("Content-type", "application/json");
									},
									dataType : 'json',
									success: function(productReturn) {
									product = {};
										product.name = productReturn.name;
										product.price = productReturn.price;
										commandTotal.commandResult.push(product);								
									}
								});							
							}

						}
						listeCommand.push(commandTotal);
					}
      			});
			}
		}
      });
	displayCommand(listeCommand);
}

function displayCommand(listeCommand){
	console.log(listeCommand);
	if(listeCommand === undefined || listeCommand.length === 0){
		$("#command_div").html("<center><h2>Aucune Commande !</h2></center>");
	}else{
		$("#command_div").html("");
		let command ="";
		for(let i = 0; i < listeCommand.length; i++){
			if(i % 4 == 0){
				command += "<div class=\"row\"><div class=\"offset-md-2 command col-md-2\" onclick=\"done("+listeCommand[i].id+");\">";
			}else{
				command += "<div class=\"command col-md-2\" onclick=\"done("+listeCommand[i].id+");\">";
			}
			command += "<h3>ID:"+listeCommand[i].id+"</h3>";
			console.log("listeCommand[i].commandResult");
			console.log(listeCommand[i].commandResult);
			console.log("listeCommand[i].commandResult.length");
			console.log(listeCommand[i].commandResult.length);
			for(let j = 0; j < listeCommand[i].commandResult.length; j++){
				if(listeCommand[i].commandResult[j].product !== undefined){
					command += "<div class=\"menu\"><div class=\"menuName\">"+listeCommand[i].commandResult[j].name+":</div>";
					for(let k = 0; k < listeCommand[i].commandResult[j].product.length; k++){
						command += "<div class=\"productMenu\">"+listeCommand[i].commandResult[j].product[k].name+": "+listeCommand[i].commandResult[j].product[k].price+"</div>";
					}
					command += "</div>";
				}else{
					command += "<div class=\"product\">"+listeCommand[i].commandResult[j].name+": "+listeCommand[i].commandResult[j].price+"</div>";
				}
			}

			command += "<h3 class=\"price\">TOTAL: "+listeCommand[i].total+"</h3></div>";
			if(i % 4 == 3){
				command += "</div>"
			}
		}
		$(command).appendTo("#command_div")
	}
	
}

function done(id){
	$.ajax({
		url: "http://localhost:8080/command/update",
		type: "POST",
		data:JSON.stringify({
			"id" : id,
			"done" : 1
		}),
		dataType:'json',
		beforeSend: function(xhr){
			xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
			xhr.setRequestHeader("Content-type", "application/json");
		},
		success: function(priceReturn) {
			getCommand();
		}
	});	
}

function login(){

	var login = document.getElementById("login").value;
	var password = document.getElementById("password").value;
	console.log(login);
	console.log(password);

	var request = new XMLHttpRequest();

	request.onreadystatechange = function(){
		if( request.readyState == 4 && request.status == 201){
			window.location = "index.php"; 
		}
	}	

	var json_data = {
		"login": login,
		"password": password
	};
	var formatted_json = JSON.stringify(json_data);


	request.open("POST", "http://localhost:8080/admin/login", true);
	request.setRequestHeader("Content-type", "application/json");
	request.send(formatted_json);
}

function dc(){
	var request = new XMLHttpRequest();

	request.onreadystatechange = function(){
		if( request.readyState == 4 && request.status == 201){
			window.location = "login.php"; 
		}
	}

	request.open("POST", "http://localhost:8080/admin/dc", true);
	request.setRequestHeader("Content-type", "application/json");
	request.send();
}