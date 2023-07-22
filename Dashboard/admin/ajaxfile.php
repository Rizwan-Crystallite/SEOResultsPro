<?php
// Database Connection
include 'connection.inc.php';
## Read value
$draw = $_POST['draw'];
$row = $_POST['start'];
$rowperpage = $_POST['length']; // Rows display per page
$columnIndex = $_POST['order'][0]['column']; // Column index
$columnName = $_POST['columns'][$columnIndex]['data']; // Column name
$columnSortOrder = $_POST['order'][0]['dir']; // asc or desc
$searchValue = mysqli_real_escape_string($con,$_POST['search']['value']); // Search value

## Search 
// $searchQuery = " ";
// if($searchValue != ''){
//   $searchQuery = " and (name like '%".$searchValue."%' or 
//         email like '%".$searchValue."%' or 
//         phone like'%".$searchValue."%' ) or 
//         comments like'%".$searchValue."%' ) or 
//         wholeDate like'%".$searchValue."%' ) or '
//         ";
// }

## Total number of records without filtering
// $sel = mysqli_query($con,"select count(*) as allcount from leadform");
// $records = mysqli_fetch_assoc($sel);
// $totalRecords = $records['allcount'];

## Total number of record with filtering
// $sel = mysqli_query($con,"select count(*) as allcount from leadform WHERE 1 ".$searchQuery);
// $records = mysqli_fetch_assoc($sel);
// $totalRecordwithFilter = $records['allcount'];

## Fetch records
$empQuery = "select * from leadform ";

// $empQuery = "select * from leadform WHERE 1 ".$searchQuery." order by ".$columnName." ".$columnSortOrder." limit ".$row.",".$rowperpage;
$empRecords = mysqli_query($con, $empQuery);
$data = array();

while ($row = mysqli_fetch_assoc($empRecords)) {
   $data[] = array( 
      "name"=>$row['name'],
      "email"=>$row['email'],
      "phone"=>$row['phone'],
      "comments"=>$row['comments'],
      "wholeDate"=>$row['wholeDate']
   );
}

## Response
$response = array(
  "draw" => intval($draw),
  "iTotalRecords" => $totalRecords,
  "iTotalDisplayRecords" => $totalRecordwithFilter,
  "aaData" => $data
);

echo json_encode($response);