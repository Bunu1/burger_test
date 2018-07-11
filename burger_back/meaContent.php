<?php require "function.php"; ?>

<?php
	$url = 'localhost:8080/product?priority=1';
	$prods = json_decode(curl_get_contents($url));

	$url = 'localhost:8080/menu?highligh=1';
	$menus = json_decode(curl_get_contents($url));
?>

	<div class=" offset-md-3 col-md-6">
            <h2>Produits en avant</h2>
        <hr class="bg-light">
        <div id="meaProd">
        	<ul class="list-group">
        	    <?php
			      foreach ($prods as $prod) {
			        $arrProd = (array) $prod;
			        echo "<li class='list-group-item'>".$arrProd['name']."</li>";
			      }
			    ?>
			</ul>
        </div>
	</div>
	<div class=" offset-md-3 col-md-6">
            <h2>Menus en avant</h2>
        <hr class="bg-light">
        <div id="meaMenu">
        	<ul class="list-group">
        	    <?php
			      foreach ($menus as $menu) {
			        $arrProm = (array) $menu;
			        echo "<li class='list-group-item'>".$arrProm['name']."</li>";
			      }
			    ?>
			</ul>
        </div>
	</div>
