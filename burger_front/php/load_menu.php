<?php
header('Content-Type: application/json');

require('functions.php');
$url = 'localhost:8080/menu/detailed/' . $_GET['id'];
$proms = json_decode(curl_get_contents($url));	

$ret = [];

foreach ($proms as $prom) {
	$arr = (array) $prom;
	$ret[] = ["id" => $arr["Products.id"], "name" => $arr['Products.name'], "price" => $arr['Products.List_Product.price'], "position" => $arr['Products.List_Product.position']];
}

echo json_encode($ret);