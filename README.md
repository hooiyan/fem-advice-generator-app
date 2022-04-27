# Advice generator app

## Table of contents

- [Advice generator app](#advice-generator-app)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [Summary](#summary)
    - [Links](#links)
    - [Screenshot](#screenshot)
      - [Desktop](#desktop)
      - [Mobile](#mobile)
  - [Details](#details)
    - [Project purpose and goal](#project-purpose-and-goal)
    - [Web stack and explanation](#web-stack-and-explanation)
    - [Lesson learned](#lesson-learned)
    - [Future improvements](#future-improvements)
    - [Useful resources](#useful-resources)
  - [Author](#author)

## Overview

### Summary

A simple web app built with HTML, CSS, and JavaScript. The user can press on the button to generate a random advice every two seconds.

### Links

- Solution URL: [GitHub](https://github.com/hooiyan/fem-advice-generator-app)
- Live Site URL: [Netlify](https://hy-advice.netlify.app/)

### Screenshot

#### Desktop

![](./images/screenshots/desktop.png)

#### Mobile

![](./images/screenshots/mobile.png)

## Details

### Project purpose and goal

The purpose of this project is to revise how to use Fetch API to get data and display data to the user.

### Web stack and explanation

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Desktop-first workflow
- [Advice Slip API](https://api.adviceslip.com/)

### Lesson learned

Although this is a rather simple project, I still learned a thing or two from it. Aside from learning how to use Fetch API, I also learned how to use the `setInterval()` function to generate random advice within a specific amount of time. Other than that, I learned how to use the `box-shadow` property to create a shadow effect on the button with this code `box-shadow: 0 0 40px -5px var(--neon-green);`

### Future improvements

The Advice Slip API does provide some other options to fetch data in different ways. I would like to add search functionality to the app or let the user looks through the advice by the id in ascending order.

### Useful resources

- [MDN Fetch API documentation](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) - This helped me relearn the syntax for using `Fetch API`.
- [MDN box-shadow documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow) - I always forget what does each value represent in the `box-shadow` property. 
- [Center a `position: absolute` element](https://stackoverflow.com/questions/8508275/how-to-center-a-position-absolute-element) - This helped me ini centering the randomize button at the center.

## Author

- Website - [hooiyan](https://hooiyan.netlify.app)
- Frontend Mentor - [@hooiyan](https://www.frontendmentor.io/profile/hooiyan)
