<?php
  require('functions.php');
  $url = 'localhost:8080/product?available=1';
  $proms = json_decode(curl_get_contents($url));
  $count = 0;

  foreach ($proms as $prom) {
    $arr = (array) $prom;
    if($arr['id_promotion'] === NULL) {
      if($arr['category'] === 1) $pic = "burger.jpg";
      else if($arr['category'] === 2) $pic = "frites.png";
      else $pic = "drink.jpg";
      if($count === 0) {
        echo "<div class='row'>";
      }
      echo "<div class='food col-md-4' onclick='product_to_cmd(this)' data-item='product' data-id='" . $arr['id'] . "' data-value='" . $arr['name'] . "' data-price='" . $arr['price'] . "'>";
      ?>
        <figure class='mb-0'>
          <img src='images/<?php echo $pic; ?>' class='img-fluid'>
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