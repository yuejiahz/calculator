[View demo](https://yuejiahz.github.io/calculator/)

How to use: 

* Pointer click on screen keypad. 
* Numeric keypad on keyboard.

Description:

Two arrays are created, one for calculation and one for display.
Array for calculation is to join numeric input of multiple single digit into one number and passed to variable for calculation.
The array for display will remain as it is , and registers operator inputs for display purpose.

In mathematics calculation input is in order of (number, operator, number), 
in programming the order is by (operator, number, number). 
I created two variables for each numbers and operators respectively to assign correct numeric variable and operator variable in correct order. 

Features:

* +/- button ( change + or - value of numeric input )
* Operator input for multiple times ( registers the latest input)
* maximum 8 decimal places if the answer contains any
* Only 1 '.' input is accepted in one numeric input. Second '.' will not be registered.
* Automatically clears the screen when text on screen is full.
* Pressing the Calculate(=) button repeatedly do not change the answer. Only first '=' will calculate, and subsequent '=' do not. 
* After pressing Calculate button, register number into first operator variable shall be reset since the calculation has been done.
* Interactive text 

ERROR sign displays when:

* Input ends with operator and pressed Calculate(=) button.
* Division by 0.
