<?php
date_default_timezone_set("Asia/Kolkata");
include "class.DbConnect.php"; 
$conn_obj = new db();
$name=$_POST['name'];
$company=$_POST['company'];
$email=$_POST['email'];
$contact=$_POST['contact'];
$product=$_POST['product'];
$message=$_POST['message'];

if (!filter_var($email, FILTER_VALIDATE_EMAIL) === false) 
    {
        //echo "email id is valid";
//      echo   $insert_enquiry = mysql_query("insert into enquiry (name,company,email,contact,product,msg,enquiry_create_on)
//        values('$name','$company','$email','$contact','$product','$message',now())") or die(mysql_error());
    
   echo  $query = $conn_obj->execute("INSERT INTO enquiry (name,company,email,contact,product,msg,enquiry_create_on)
                               values('$name','$company','$email','$contact','$product','$message',now())");
    } 
    
 else 
{
     echo "0";
}

//echo $name,$company,$email,$contact,$product,$message;



?>
