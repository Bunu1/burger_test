<?php require "function.php"; ?>

<?php
	$url = 'localhost:8080/promotion';
	$proms = json_decode(curl_get_contents($url));
?>

<div class="row">
  <form class="col-md-12">
    <select class="form-control offset-md-3 col-md-6" id="choiceProm" onchange="fillProm()">
      <option value="|||||">(Créer une promotion)</option>
    <?php
      foreach ($proms as $prom) {
        $arrProm = (array) $prom;
        echo "<option value='".$arrProm['id']."|".$arrProm['description']."|".$arrProm['prerequisite']."|".$arrProm['available']."|".$arrProm['start_date']."|".$arrProm['end_date']."'>".$arrProm['description']."</option>";
      }
    ?>
    </select>
  </form>
</div>
<br><br>
<div class="row">
  <div class="col-md-12">
    <div id="errorLogProm" class="offset-md-3" hidden>
    </div>
    <form>
      <div class="form-row">
        <div class="form-group offset-md-3 col-md-2">
          <input type="text" name="id_prom" id="id_prom" hidden>
          <label>Description</label>
          <input class="form-control" type="text" name="description" id="description">
        </div>
        <div class="form-group col-md-2">
        	<label>Pré-requis</label>
          <input class="form-control" type="text" name="prerequisite" id="prerequisite">
        </div>
        <div class="form-group col-md-2">
          <label>Disponible</label>
          <select class="form-control" name="available" id="available">
            <option value=""></option>
            <option value="1">Disponible</option>
            <option value="0">Non-disponible</option>
          </select>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group offset-md-5 col-md-2">
          <label>Date de début</label>
          <input class="form-control" type="date" name="start_date" id="start_date">
        </div>
        <div class="form-group col-md-2">
          <label>Date de fin</label>
          <input class="form-control" type="date" name="end_date" id="end_date">
        </div>
      </div>
    </form>
    
    <button class="offset-md-3 col-md-2 btn btn-danger" type="button" value="" onclick="deleteProm()">Supprimer</button>
    <button class="offset-md-2 col-md-2 btn btn-success" type="button" value="" onclick="sendProm()">Envoyer</button>
  </div>
</div>
