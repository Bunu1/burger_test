<!DOCTYPE html>
<html>
<?php require "header.php" ?>
<?php require "function.php" ?>
  <body class="bg-secondary">
    <div class="container-fluid background">
      <div class="offset-md-3 col-md-6">
        <div class="row">
          <div id="indexDisplayed" class="col-md-12 text-center">
            <p class="h1" style="font-size: 500%">Menu Administrateur</p>
          </div>
        </div>
        <hr class="bg-light">
        <br><br>
        <div class="row">
          <div class="col-md-12">
            <div class="row">
              <div id="commandeBtn" class="btn btn-info col-md-5" onclick="displayBackContent('comm')">
                <strong class="h1">Commandes</strong>
              </div>
              <div id="productBtn" class="btn btn-info col-md-5 offset-md-2" onclick="displayBackContent('prod')">
                <strong class="h1">Produits</strong>
              </div>
            </div>
            <br>
            <div class="row">
              <div id="menuBtn" class="btn btn-info col-md-5" onclick="displayBackContent('menu')">
                <strong class="h1">Menus</strong>
              </div>
              <div id="promotionBtn" class="btn btn-info col-md-5 offset-md-2" onclick="displayBackContent('prom')">
                <strong class="h1">Promotions</strong>
              </div>
            </div>
            <br>
            <div class="row">
              <div id="meaBtn" class="btn btn-info col-md-5" onclick="displayBackContent('mea')">
                <strong class="h1">Mises en Avant</strong>
              </div>
              <div id="discoBtn" class="btn btn-warning col-md-5 offset-md-2" onclick="dc()">
                <strong class="h1">Deconnexion</strong>
              </div>
            </div>
          </div>
        </div>
        <br><br>
        <hr class="bg-light">
        <br><br>
        </div>
      <div id="back-content" class="col-md-12"></div>
    </div>
  </body>
</html>
<script src="async.js"></script>
<script language="javascript">
    getCommand();
    window.setInterval("refreshDiv()", 3000);
    function refreshDiv(){
        getCommand();
    }
</script>