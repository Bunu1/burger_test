<?php
  require('functions.php');
  $url = 'localhost:8080/promotion?available=1';
  $proms = json_decode(curl_get_contents($url));	
  $count = 0;

  echo "<option></option>";
  foreach ($proms as $prom) {
    $arr = (array) $prom;
    ?>
    <option value="<?php echo $arr['id']; ?>"><?php echo $arr['description']; ?></option>
    <?php
  }
?>