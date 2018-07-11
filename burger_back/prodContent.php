<?php require "function.php"; ?>

<?php
	$url = 'localhost:8080/product';
	$prods = json_decode(curl_get_contents($url));
?>

<div class="row">
  <form class="col-md-12">
    <select class="offset-md-3 col-md-6 form-control" id="choiceProd" onchange="fillProd()">
      <option value="||||||">(Créer un produit)</option>
    <?php
      foreach ($prods as $prod) {
        $arrProm = (array) $prod;
        echo "<option value='".$arrProm['id']."|".$arrProm['name']."|".$arrProm['price']."|".$arrProm['highlight']."|".$arrProm['category']."|".$arrProm['available']."|".$arrProm['id_promotion']."'>".$arrProm['name']."</option>";
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
          <input type="text" name="id_prod" id="id_prod" hidden>
          <label>Nom</label>
          <input class="form-control" type="text" name="name" id="name">
        </div>
        <div class="form-group col-md-2">
          <label>Prix</label>
          <input class="form-control" type="text" name="price" id="price">
        </div>
        <div class="form-group col-md-2">
          <label>Mis en avant</label>
          <input class="form-control" type="text" name="highlight" id="highlight">
        </div>
      </div>
      <div class="form-row">
        <div class="form-group offset-md-3 col-md-2">
          <label>Categorie</label>
          <input class="form-control" type="text" name="category" id="category">
        </div>
        <div class="form-group col-md-2">
          <label>Disponible</label>
          <select class="form-control" name="available" id="available">
            <option value=""></option>
            <option value="1">Disponible</option>
            <option value="0">Non-disponible</option>
          </select><br>
        </div>
        <div class="form-group col-md-2">
          <label>Promotion</label>
          <input class="form-control" type="text" name="id_promotion" id="id_promotion">
        </div>
      </div>
    </form>
    
    <button class="offset-md-3 col-md-2 btn btn-danger" type="button" value="" onclick="deleteProd()">Supprimer</button>
    <button class="offset-md-2 col-md-2 btn btn-success" type="button" value="" onclick="sendProd()">Envoyer</button>
  </div>
</div>