# form
```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form</title>
</head>

<body>
    <form>
        <table>
            <tr>
                <td><label for="fname">First Name: </label></td>
                <td><input type="text" name="fname"></td>
            </tr>
            <tr>
                <td><label for="lname">Last Name:</label></td>
                <td><input type="text" name="lname"></td>
            </tr>
            <tr>
                <td>
                    <label for="Address">Personal Address:</label>
                </td>
                <td>
                    <textarea placeholder="Address"></textarea>
                </td>
            </tr>
            <tr>
                <td>SEX</td>
                <td>
                    <input type="radio" name="sex" id="male">
                    <label for="male">Male</label>
                    <input type="radio" name="sex" id="female">
                    <label for="female">Female</label>
                </td>
            </tr>
            <tr>
                <td>EMAIL ID</td>
                <td>
                    <input type="text" name="email" id="email">
                </td>
            </tr>
            <tr>
                <td>DOB</td>
                <td>
                    <input type="date" name="DOB" id="DOB">
                </td>
            </tr>
            <tr>
                <td>CITY</td>
                <td>
                    <select name="City" id="city">
                        <option value="-1" selected>select..</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Goa">Goa</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td>Course Name</td>
                <td>
                    <select name="Course" id="course">
                        <option value="-1" selected>select..</option>
                        <option value="Computer Engineering">Computer Engineering</option>
                        <option value="IT">IT</option>
                        <option value="CSE-AIML">CSE-AIML</option>
                    </select>

                </td>
            </tr>
            <tr>
                <td><input type="date"></td>
                <td>
                    <input type="submit" value="submit">
                    <input type="reset" value="rest">
                </td>
            </tr>
        </table>
    </form>
</body>

</html>
```


# validation
```<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Validation</title>
</head>

<body>
    <label for="username">Username:</label>
    <input type="text" id="username">
    <script>
        const ptrn = /^([^a-z\W]*)$/;
        const inp = document.getElementById('username');
        function validtion() {
            if (ptrn.test(inp.value))
                inp.style.backgroundColor = 'green';
            else
                inp.style.backgroundColor = 'red';
        }
        inp.addEventListener("keyup", validtion);
    </script>
</body>

</html>
```

# table
```<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Table</title>
    <style>
        table,
        th,
        td {
            border: 2px solid;
        }

        table {
            border-spacing: 10px;
        }

        th,
        td {
            padding: 25px;
        }
    </style>
</head>

<body>
    <h2>INFORMATION TABLE</h2>
    <table>
        <tr>
            <th>Sr.no</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
        </tr>
        <tr>
            <td>1</td>
            <td>Hanzala</td>
            <td>Ansari</td>
            <td>19</td>
        </tr>
        <tr>
            <td>2</td>
            <td>John</td>
            <td>Doe</td>
            <td>55</td>
        </tr>
        <tr>
            <td>3</td>
            <td>x</td>
            <td>y</td>
            <td>-2</td>
        </tr>
    </table>
</body>

</html>
```

# pseudo
```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pseudo</title>
    <style>
        .intro::first-line {
            background-color: red;
        }

        .intro::first-letter {
            background-color: green;
        }

        li:nth-child(even) {
            background-color: aqua;
        }

        li:first-child {
            background-color: pink;
        }

        li:hover {
            background-color: yellow;
        }

        a:visited {
            color: orange;
        }

        a:hover {
            color: red;
        }
    </style>
</head>

<body>
    <p class="intro">
        In my younger and more vulnerable years
        my father gave me some advice that I've
        been turning over in my mind ever since.
        'Whenever you feel like criticizing anyone,' he told me,
        'just remember that all the people in this world
        haven't had the advantages that you've had.'
    </p>
    <a href="https://www.google.com">GOOGLE</a>
    <ul>
        <li>Hanzala</li>
        <li>Ansari</li>
        <li>John</li>
        <li>Doe</li>
    </ul>
</body>

</html>
```

# node

```
const fs = require("fs");
let filedata = fs.readFileSync('file.txt');
console.log(filedata.toString());

// fs.readFile('file.txt', (err, filedata) => {
//     if (err) return console.error(err);
//     console.log(filedata.toString());
// });
console.log("END of Program")
```

# class
```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Class</title>
</head>

<body>
    <h1>Class and Objects</h1>
    <script>
        class Vehicle {
            constructor(brand) {
                this.carName = brand;
            }
            info() {
                document.write("Super Class<br>")
                document.write(`My Vehicle is : ${this.carName} <br>`)
            }
        }
        class Car extends Vehicle {
            constructor(brand) {
                super(brand);
                this.noDoors = 4;
                this.noWheels = 4;
            }
            info() {
                super.info();
                document.write("Sub Class<br>")
                document.write(`No of Doors : ${this.noDoors} <br>`)
                document.write(`No of Wheels : ${this.noWheels} <br>`)
            }
        }
        car1 = new Car("Mini Cooper");
        car1.info();
        vehicle1 = new Vehicle("Mercedes");
        vehicle1.info();
    </script>
</body>

</html>
```


# bootstrap
```

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BootStrap</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
</head>

<body>
    <h1>BootStrap Grid</h1>
    <div class="row">
        <div class="col-md-3" style="background-color:red;">Hanzala</div>
        <div class="col-md-3" style="background-color:blue;">Ansari</div>
        <div class="col-md-3" style="background-color:yellow;">John</div>
        <div class="col-md-3" style="background-color:green;">Doe</div>
    </div>
</body>

</html>
```
