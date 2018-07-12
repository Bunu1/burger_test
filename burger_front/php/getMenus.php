<?php
  require('functions.php');
  $url = 'localhost:8080/menu?available=1';
  $proms = json_decode(curl_get_contents($url));
  $count = 0;

  foreach ($proms as $prom) {
    $arr = (array) $prom;
    if($arr['id_promotion'] === NULL) {
      if($count === 0) {
        echo "<div class='row'>";
      }
      echo "<div class='food col-md-4 ".$arr['name']."' onclick='mdl_shw(this)' data-item='menu' data-id='" . $arr['id'] . "' data-value='" . $arr['name'] . "'>";
      ?>
        <figure class='mb-0'>
          <img src='images/menu.png' class='img-fluid'>
          <figcaption class="text-center"><?php echo $arr['name']; ?></figcaption>
        </figure>
      </div>
      <?php
      if($count === 2) {
        echo "</div>";
      }
      $count++;
      if($count === 3) $count = 0;
    }
  }
?>