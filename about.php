<?php
include_once 'includes/dbh.inc.php';

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TjInsurance</title>
    <link href="styles.css" rel="stylesheet">
    <script defer src="./about.js"></script>
    <script src="https://kit.fontawesome.com/6d0cedea89.js" crossorigin="anonymous"></script>

</head>
<body>
<div class="textlogo" ><a href="landingpage.html"><h1><img width="70px" height="70px" src="images/logo.png"></h1></h1></a></div>
  
   
    <div class="navbar">
    <nav>
        <ul>
            <li><a href="landingpage.html">Home</a></li>
            <li><a href="Product.html">Products</a></li>
            <li><a href="http://localhost:3000/about.php">About us</a></li>
            <li><a href="contact.html">Contact us</a></li>
        </ul>
    </nav>
    </div>
  
<!-- HERO SECTION -->
<div  class="home-bg">
<section class="home">
    <div class="content">
        <h1>Our Story</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Ratione ea repudiandae tempore unde delectus itaque! Reiciendis incidunt nemo similique omnis. 
            Quod esse velit laboriosam suscipit non perspiciatis itaque? Ullam, reiciendis?</p>
        <a href="Form.html" class="btn">Join now</a>
    </div>


    <div class="image" >
        <img id="aboutimage" width="750" height="600" src="images/employees.webp" alt="" />
    </div>
</section>
</div>

<!-- HERO SECTION2 -->

<div class="home-bg2">
<div class="homeflex">
    <section>
        <div id="jobdatabase">
        <div id="jobdatabasetitle">
<h1 class="contactheader">Job Postings</h1>

<table class="content-table">
<thead id="databasehead">
    <tr>
        <th>Job</th>
        <th>Department</th>
        <th>Experience Level</th>
        <th>Salary</th> 
    </tr>
</thead>
<div id="jobdatabasetitle">

<tbody>
    <?php

    if($conn->connect_error) {
        die("connection failed: ". $conn->connect_error);

    }
    $sql = "SELECT * FROM jobpostings";
    $result = $conn->query($sql);

    if (!$result) {
        die("invalid query: " . $conn->error);
    }

    while($row = $result->fetch_assoc()) {

        ?>
        <tr>
    <td class="datbasetd"><?php echo $row["jobtitle"] ?></td>
    <td class="datbasetd"><?php echo $row["department"] ?></td>
    <td class="datbasetd"><?php echo $row["experience"] ?></td>
    <td class="datbasetd"><?php echo $row["salary"] ?></td> 
  </tr>
  <?php
}
?>

   

   
</tbody>
</table>


</div>
</div>
</section>
</div>
    

</body>
</html>
    