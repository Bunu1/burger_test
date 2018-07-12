<?php
  require('functions.php');

  $url = "localhost:8080/menu?highlight=1";
  $proms = json_decode(curl_get_contents($url));
  
  $count = 0;
   
    if(is_array($proms)) {
      foreach ($proms as $prom) {
        $arr = (array) $prom;
        if($arr['available'] === 1 && $arr['id_promotion'] === NULL) {
          if($count === 0) echo "<div class='row'>";
          echo "<div class='food col-md-4' onclick='mdl_shw(this)' data-item='menu' data-id='" . $arr['id'] . "' data-value='" . $arr['name'] . "'>
                  <figure class='mb-0'>
                    <img src='images/menu.png' class='img-fluid'>
                    <figcaption class='text-center'>" . $arr['name'] ." </figcaption>
                  </figure>
                </div>";

          if($count === 2) echo "</div>";
          $count++;
          if($count === 3) $count = 0;
        }
      }
      if($count != 3) echo "</div>";
      echo "<hr class='mb-5'>";
    }

  $url = "localhost:8080/product?highlight=1";
  $proms = json_decode(curl_get_contents($url));
  $count = 0;

  if(is_array($proms)) {
    foreach ($proms as $prom) {
      $arr = (array) $prom;
      if($arr['available'] === 1 && $arr['id_promotion'] === 1000) {
        if($arr['category'] === 1) $pic = "burger.jpg";
        else if($arr['category'] === 2) $pic = "frites.png";
        else $pic = "drink.jpg";
        
        if($count === 0) echo "<div class='row'>";
        echo "<div class='food col-md-4' onclick='product_to_cmd(this)' data-item='product' data-id='" . $arr['id'] . "' data-value='" . $arr['name'] . "' data-price='" . $arr['price'] . "'>
                <figure class='mb-0'>
                  <img src='images/".$pic."' class='img-fluid'>
                  <figcaption class='text-center'>" . $arr['name'] ." </figcaption>
                </figure>
              </div>";

        if($count === 2) echo "</div>";
        $count++;
        if($count === 3) $count = 0;
      }
    }
    if($count != 3) echo "</div>";
  }