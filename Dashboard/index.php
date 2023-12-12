<?php
session_start();

function afterlogin($PIN){
      if($PIN == '988657215'){
               $_SESSION['MASTER'] = "988657215";
               include('../database.php');
               $sql = "SELECT * FROM leadform";
                $result = $conn->query($sql);
                ?>
                <div class="container py-5">
                  <a href="/logout" class="btn btn-danger my-4">Logout</a>
                 <table id="myTable" class="stripe" style="width:100%">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Comments</th>
                     <th>Date</th>
                </tr>
                </thead>
                <tbody>
                <?php
                if ($result->num_rows > 0) {
                  // output data of each row
                  while($row = $result->fetch_assoc()) {
                    ?>
                    <tr>
                       <td><?= $row['name'] ?></td>
                        <td><?= $row['email'] ?></td>
                         <td><?= $row['phone'] ?></td>
                         <td><?= $row['comments'] ?></td>
                         <td><?= $row['wholeDate'] ?></td>
                     </tr>
                    
                    <?php
                  }
                } else {
                  echo "0 results";
                }
                ?>
                 </tbody>
                </table>
                </div>
                <?php
                $conn->close();
           }
           else{
              BeforeLogin($message = 1);
           }
}

function BeforeLogin($message){
     ?>
             <div class="container py-5">
                 <div class="card">
                     <div class="card-header"><h2>Login</h2></div>
                     <div class="card-body">
                         <form method="post">
                     <input type="text" name="pin"  class="form-control" required />
                     <input type="submit" class="btn btn-success mt-3" name="submit" value="login"/>
                 </form>
                <?php 
                if($message == 1){
                    
                    ?>
                    
                    <div class="alert alert-danger">
                        <span>Login Faild</span>
                    </div>
                    <?php
                    
                }
                ?>
                     </div>
                 </div>
                 
             </div>
            <?php
}
?>
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap demo</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
      <link href="https://cdn.datatables.net/1.13.3/css/jquery.dataTables.min.css" rel="stylesheet" type="text/css"/>

  </head>
  <body>
    <?php
   
        if(isset($_POST['submit'])){
             afterlogin($_POST['pin']);
        }
        else{
           if( $_SESSION['MASTER'] == '988657215'){
                afterlogin($_SESSION['MASTER']);
           }
           else{
                BeforeLogin($message = 0);
           }
          
        }
  
        
    ?>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
 <script src="https://code.jquery.com/jquery-3.6.3.min.js" integrity="sha256-pvPw+upLPUjgMXY0G+8O0xUf+/Im1MZjXxxgOcBQBXU=" crossorigin="anonymous"></script>
 <script src="https://cdn.datatables.net/1.13.3/js/jquery.dataTables.js"></script>
<script>
    $(document).ready( function () {
        $('#myTable').DataTable();
    } );
</script>
  <script 
   defer type="application/ld+json" src="/seo-results-pro-indexing-api-6ee695d00342.json"
>
</script>
</body>
</html>