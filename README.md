# The Broken Calculator
Try to find all the prime numbers under 101 with the broken calculator.

**Link to project:** https://broken-calculator.netlify.app/

![Site gif](https://i.ibb.co/7VW8JC7/calc-2021-05-31-17-54-43.gif)

## How It's Made:

**Tech used:** HTML, CSS, JavaScript

A list of prime numbers are generated at runtime using the [Sieve of Eratosthenes](https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes) algorithm. I decided to try and implement this particular algorithm as it is one of the most efficent when it comes to finding the smaller prime numbers. Implementing it was quite easy as I've figured out how to implement this algorithm previously in Java so I simply converted the algorithm I had to the Javascript syntax.  
With a simple check to this newly generated array every time a button on the calculator was pressed, I could updated the tracker which told the user how many more primes they had to find.  
I also implemented a function that would randomly pick a color for the background every time a button was pressed, implementing additional logic that would check the luminence of the color chosen, changing the color of the calculator and the tracker to white if the background was considered "dark" or to black if it was considered "bright".  

## Planned Features

- Add a tracker that tracks the number of times that a user pressed the buttons before finding all the prime numbers to prevent simply adding up to 101 and clicking -2 continously to find all prime numbers
- Add a 'new broken calculator' button that will refresh the number pad with new numbers
- Add media queries to make the layout look better on larger screens
- Widen the width of the sections
- Refactor the calculator button functions into one function that pulls from an array
- Utilise flexbox properties in the CSS
- Replace absolute units in the CSS with relative ones

## Lessons Learned:

Learnt how to convert from the Java syntax to JavaScript. Learnt how to randomise color on a given event. Learnt how to add logic that can detect the 'light level' of a color on the page and change other colors accordingly.

## My other projects:

**Afterlife:** https://github.com/divi4/afterlife

**Restaurant Demo:** https://github.com/divi4/demo-restaurant

**Source (Mobile-first responsive website):** https://github.com/divi4/source



