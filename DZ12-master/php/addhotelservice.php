<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST');
include("config1.php");
if(isset($_POST['imeHotela']) && isset($_POST['lokacija']) && isset($_POST['sobe']) && isset($_POST['kapacitet'])){
$imeHotela= $_POST['imeHotela'];
$lokacija = intval($_POST['lokacija']);
$sobe = intval($_POST['sobe']);
$kapacitet = intval($_POST['kapacitet']);
$stmt = $conn->prepare("INSERT INTO hoteli (imeHotela, lokacija, sobe,kapacitet) VALUES (?, ?, ?,?)");
$stmt->bind_param("ssss", $imeHotela, $lokacija, $sobe,$kapacitet);
$stmt->execute();
echo "ok";
}
?>