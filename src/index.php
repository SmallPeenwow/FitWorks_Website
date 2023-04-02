<?php 
 header("Access-Control-Allow-Origin: *");

 class Member {
    public $email;
    public $member_password;
}

function fetchData(){
    $host = 'localhost';
    $username = 'root';
    $password = 'password';
    $dbname = 'fitworks_gym';

    $conn = mysqli_connect(hostname: $host, username: $username, password: $password, database: $dbname);

    if (mysqli_connect_errno()){
        die("Connection error: " . mysqli_connect_errno());
    }

    $sql = "SELECT email, member_password FROM fitworks_members";

    $result = mysqli_query($conn, $sql);

    $people = array();

    while($row = mysqli_fetch_assoc($result))
    {
        $member = new Member();
        $member->email = $row['email'];
        $member->member_password = $row['member_password'];

        $people[] = $member;
    }

    var_dump($people);

    mysqli_close($conn);
    return $people;
}

?>