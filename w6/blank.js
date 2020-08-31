/*
Week 6 Javascript Page
Desiree Davis
8-27-20
*/


//initialize table variable
var randomGrid = []

//create variable to hold number chosen by user
var userNum = ""

//userNum = document.getElementById("#num").value;
    



//function to create random number
function randomNumber (min, max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/*function getNum(userNum)
{
    nu = document.getElementById("num")
    //convert to int
    nu = parseInt(userNum)

    return nu
}*/


//--CREATE TABLE--
function createGrid ()
{

    //get user input from html page
    userNum = document.getElementById("num").nodeValue
    userNum = parseInt(userNum)

    //use a for loop inside another for loop to create an array within an array (aka a table)
    for (i = 0; i < userNum; i++)
    {
        for (n = 0; n < userNum; n++)
        {

            randomGrid[i][n] = randomNumber

        }
    }
}

console.log(randomGrid)