<?php require "function.php"; ?>

<?php
	$url = 'localhost:8080/menu';
	$menus = json_decode(curl_get_contents($url));
	/*	"id": id,
				"name": name,
				"description": description,
				"highlight": highlight,
				"size": size,
				"available": available,
				"id_promotion": id_promotion*/
?>


<div class="row">
  <form class="col-md-12">
    <select class="offset-md-3 col-md-6 form-control" id="choiceMenu" onchange="fillMenu();fillMenuProd();">
      <option value="||||||">(Créer un menu)</option>
    <?php
      foreach ($menus as $menu) {
        $arrProm = (array) $menu;
        echo "<option value='".$arrProm['id']."|".$arrProm['name']."|".$arrProm['description']."|".$arrProm['highlight']."|".$arrProm['size']."|".$arrProm['available']."|".$arrProm['id_promotion']."'>".$arrProm['name']."</option>";
      }
    ?>
    </select>
  </form>
</div>
<br>
<br>
<div class="row">
  <div class="col-md-12">
    <form>
      <div class="form-row">
        <div class="form-group offset-md-3 col-md-2">
          <input type="text" name="id_menu" id="id_menu" hidden>
          <label>Nom</label>
          <input class="form-control" type="text" name="name" id="name">
        </div>
        <div class="form-group col-md-2">
          <label>Description</label>
          <input class="form-control" type="text" name="description" id="description">
        </div>
        <div class="form-group col-md-2">
          <label>Mis en avant</label>
          <input class="form-control" type="text" name="highlight" id="highlight">
        </div>
      </div>
      <div class="form-row">
        <div class="form-group offset-md-3 col-md-2">
          <label>Taille</label>
          <input class="form-control" type="text" name="size" id="size">
        </div>
        <div class="form-group col-md-2">
          <label for="available">Disponible</label>
          <select class="form-control" name="available" id="available">
            <option value="" selected></option>
            <option value="1">Disponible</option>
            <option value="0">Non-disponible</option>
          </select>
        </div>
        <div class="form-group col-md-2">
          <label>Promotion</label>
          <input class="form-control" type="text" name="id_promotion" id="id_promotion">
        </div>
      </div>
      <br>
    </form>

    <!--<button class="offset-md-3 col-md-2 btn btn-danger" type="button" value="" onclick="deleteMenu()">Supprimer</button>-->
    <button class="offset-md-7 col-md-2 btn btn-success" type="button" value="" onclick="sendMenu()">Envoyer</button>
  </div>
</div>

<br><br>
<hr class="offset-md-4 col-md-4 bg-light">
<br><br>

<div class="row">
  <div class="col-md-12">
    <form>
      <div class="form-row">
        <div class="form-group offset-md-3 col-md-2">
          <label>Produit</label>
          <select class="form-control" name="produit_in" id="produit_in"></select>
        </div>
        <div class="form-group col-md-2">
         <label>Prix</label>
	       <input class="form-control" type="text" name="price_in" id="price_in"><br>
        </div>
        <div class="from-group col-md-2">
          <label>Position</label>
          <select class="form-control" name="position" id="position">
             <option value="1">1</option>
             <option value="2">2</option>
             <option value="3">3</option>
          </select>
        </div>
      </div>
    </form>
    <div class="offset-md-7 col-md-2 btn btn-success" onclick="addInMenu()">Ajouter au menu</div>
  </div>
</div>

<br><br>
<hr class="offset-md-4 col-md-4 bg-light">
<br><br>

<div class="row">
  <div class="col-md-12">
    <form>
      <div class="form-row">
        <div class="form-group offset-md-3 col-md-3">
          <label>Produit du menu</label>
          <select  class="form-control" name="produit_out" id="produit_out"></select>
        </div>
        <div class="form-group col-md-3">
          <label>Position</label>
          <select class="form-control" name="position_out" id="position_out">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
      </div>
    </form>
    <div class="offset-md-7 col-md-2 btn btn-danger" onclick="deleteFromMenu()">Supprimer du Menu</div>
  </div>
</div>