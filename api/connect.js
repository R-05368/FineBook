import mysql from "mysql"
import mysql2 from "mysql2"; // New library

// Use mysql2 library
export const db = mysql2.createConnection({    
host:"localhost",
user:"root",
password:"ruas",
database:"social"
}) ;
