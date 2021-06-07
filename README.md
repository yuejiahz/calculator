[View demo](https://yuejiahz.github.io/calculator/)

#Description
This calculator performs basic addition, subtraction, multiplication, and division function. You can use mouse pointer or numeric keyboard for input. 
The screen is separated into first half section display of numeric and operator and input and the second half section is to display solution as this is a more organised presentation.
Some basic DOM manipulation is used to display calculator input on screen and adding events to each button for input.

I created separated arrays, one for number input and one for display on the screen. Clicking one numeric button can only register one item in an 
array, each of one character are stored in one array index. The number has to be passed over to one variable to register the number as onw instead of combination 
of two digit in an array. The array for display will remain as in its' one character one index form since it is only for display purpose.

At first assigning the numbers and operators in order can be confusing while in mathematics calculation is in order of (number, operator, number), in programming
the order is by (operator, number, number). To solve this problem I created two variables for numbers and operators respectively. To determine which numeric variaable 
and operator variable to get registered first and how to shift the numbers into new variable after calculation, it indeed took time to sort out the logic.

I made the multiple operator input to only register the latest operator, shall any input mistake happens. This was confusing at first to think about the conditions to replace
and how would it affect order of registering the input into correct variable. 

The positive or negative sign is interchangable by clicking the +/- button after numeric input. Adding number after the changing the positive or negative sign 
do not affect the registered value. The negative sign can be added to all numbers in either first or later orders displayed on screen.

I fixed 8 decimal places if the answer contains any. While I wanted to count the number of decimal places of each input and return the answer by the largest decimal places,
and I suceeded to count the decimal places for each number input. I also made only one '.' input is allowed for one number.

I also added condition when pressing the Calculate(=) button repeatedly, the variable do not change as no calculation is performed. After pressing Calculation button, register 
number into first operator variable shall be reset since the calculation has been done.

Error sign displays when the input ended with operator and pressed Calculate button. Also when division by 0 is impossible so it will be showing an big big ERROR!

The screen clear up automatically and update the latest numerical input when text is filling up the screen.

Keyboard input was decided in the end since I think adding this would make me actually use what I made and indeed it is so handy and convenient.
My wrist don't need that kind of torture of locking my wrist in that position for eternity when I needed some intensive calculation... (OK I'm exaggerating, but I guess most people is 
lazy just like me)

I tried to make this calculator as bug free and as easy to use, and I am very proud of it! I think I will actually use it.




