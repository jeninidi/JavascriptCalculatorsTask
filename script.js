//////////////////////////
//TASK 1 as required //
//////////////////////////
/**
 * Calculate age by current year and birth year
 * @param currentYear
 * @param birthYear
 */
var calculateAge = function(currentYear,birthYear){
  var myAge = currentYear - birthYear; 
  var myAge2 = (currentYear - birthYear) - 1;
  if(birthYear > 0)
  document.getElementById('myAge').innerHTML = "Your age is either " + myAge2 + " or " + myAge;
  else 
  alert("The input is invalid");
};



//////////////////////////
// TASK 1 as I"d do it //
//////////////////////////
/**
 * Calculate age by birth year
 * @param birthYear
 */
var calculateMyAge = function(birthYear2){
  var year = new Date().getFullYear();
  var myAge1 = year - birthYear2;
  var myAge3 = year - birthYear2 - 1;
  if(birthYear > 0)
  document.getElementById('myAge').innerHTML = "Your age is either " + myAge1 + " or " + myAge3;
  else
  alert("The input is invalid!");
};


 
//////////////////////////
// TASK 2 //
//////////////////////////
/**
 * Calculate supply by age and amount per day
 * @param age
 * @param amountPerDay
 */
var calculateSupply = function(age, amountPerDay) {
  var maxAge = 90;
  var supply = (maxAge - age)*amountPerDay* 365;
  if (age > 0)
  document.getElementById('supply').innerHTML = "Your supply until the rest of your life is " + supply + " grams per day!";
  else
  alert("Your age can not be null!")
};


//////////////////////////
// TASK 3 //
//////////////////////////
/**
 * Calculate circumference by radius
 * @param radius
 */
var calcCircumference = function(radius){
  var circumference = 2*Math.PI*radius;
  if (radius > 0 )
  document.getElementById('result').innerHTML = "The circumference with radius " + radius + " is " + circumference + "!";
  else 
  alert("The radius of a circle must be a positive number!")
};

/**
 * Calculate area by radius
 * @param radius
 */
var calcArea = function(radius){
  var area = Math.PI*radius*radius;
  if (radius > 0 )
  document.getElementById('result').innerHTML = "The area with radius " + radius + " is " + area + "!";
  else
  alert("The radius of a circle must be a positive number!")
};


//////////////////////////
// TASK 4 //
//////////////////////////
/**
 * Convert Celsius to Fahrenheit
 * @param celsius
 */
var celsiusToFahrenheit = function(celsius){
  var temperature = (celsius*9)/5+32;
  document.getElementById('temperature').innerHTML = celsius + " degrees in Celsius is  " + temperature + " desgrees in Fahrenheit!";
};
/**
 * Convert Fahrenheit to Celsius
 * @param fahrenheit
 */
var fahrenheitToCelsius = function(fahrenheit){
  var temperature = ((fahrenheit-32)*5)/9;
  document.getElementById('temperature').innerHTML = fahrenheit + " degrees in Fahrenheit is  " + temperature + " degrees in Celsius!";
};


   
  


    


