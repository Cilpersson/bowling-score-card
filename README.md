# BOWLING SCORE CALCUATOR

## What is this?

This is a website that calculates bowling scores. The UI is written with react and the actual calculations and tests in pure Javscript, ES6, and can be found in a specific folder. This project was a great experience and challenge that I very much enjoyed. I decided to not make the site responsive, freeing up time for other tasks.

I used styled-components for the styling, as it is my preferred CSS choice for react.

![Screenshot of website](./src/images/preview.png)

### Information and/or tools I found valuable:

- [How bowling score works](https://www.youtube.com/watch?v=aBe71sD8o8c)
- [Bowling score calculator - java](https://www.youtube.com/watch?v=OPGTPQ4kURU&ab_channel=TheCodeDojo)
- [Bowling score calculator - javascript](https://www.youtube.com/watch?v=brahHchaegc)
- [Difference between specs and tests](https://stackoverflow.com/questions/16802030/whats-the-difference-between-tests-and-specs)

### Reflections and hiccups along the way

This was a challenging project, but it was also a lot of fun and I have learned quite a few things. I found the videos I have linked above very useful. When I started googling things like "bowling score tracker code" and similar search terms it didn't take long for me to come across bowling kata and a man called uncle Bob.

I have a list, **pinsDown**, that stores the users points from the button clicked, if the user scores a spare or strike a forward dash or an x is added, otherwise a numerical value converted to a string is added. Converting the numbers to strings is to make sure data types are not to mixed in that array. The main issue I had was not calculating the score for different types of rolls which is done in the BowlingGame class, but rather displaying the correct number, sign or empty string for said roll. In the button component that logic is handled. I have tried my absolute best to extract logic from the main function to smaller functions, however there are a lot of specific conditions to take in to account. I'm positive there is a much cleaner solution, unfortunately my solution is the best I could come up with.

Overall however I'm satisfied with what I have done, I've tried my absolute most to give clear names to variables, methods and functions and also keeping the code clean.

**Clone it and:**
`npm install` => `npm start`

**or view it live:**

[Bowling score calculator](https://bowling-score-calculator.netlify.app/)
