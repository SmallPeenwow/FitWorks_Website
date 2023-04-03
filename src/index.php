<?php 

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    if (!empty($_POST["email"]) && !empty($_POST["password"])) {
        fetch_data();
    } else {
        if (empty($_POST["email"])) {
            echo "<script>
                alert('Please enter in your email address');
            </script>";
        }
        else {
            echo "<script>
                alert('Please enter in your password');
            </script>";
        }
    }

}

function fetch_data(){

    $personalMessageArray = ['Have A Great Gym Session!', 'Go Get Those Gains!', 'You Going To Do Great Today!'];

    $member = false;

    $email = $_POST["email"];
    $member_password = $_POST["password"];

    $host = 'localhost';
    $username = 'root';
    $password = 'password';
    $dbname = 'fitworks_gym';

    $conn = mysqli_connect(hostname: $host, username: $username, password: $password, database: $dbname);

    if (mysqli_connect_errno()){
        die("Connection error: " . mysqli_connect_errno());
    }

    $sql = "SELECT * FROM fitworks_members";

    $result = mysqli_query($conn, $sql);

    while ($row = mysqli_fetch_array($result)){
        if ($email == $row['email'] && $member_password == $row['member_password']){
            $member = true;

            $randomNumber = rand(0, sizeof($personalMessageArray) - 1);

            $name = $row['first_name'];
            $surname = $row['last_name'];            

            echo "<script>
                alert('Welcome $name $surname, $personalMessageArray[$randomNumber]');
            </script>";

            return;
        }
    }

    if(!$member){
        echo "<script>
                alert('You Do Not Have A Membership');
            </script>";
    }

    mysqli_close($conn);
    return;
}


?>