# Reusability in React

## Your task

You are presented with a very basic app that displays a list of instructors. The app is built in the classic way of HTML and CSS in React.

Using `styled-components` and the `src/components/` directory, rebuild the app so that `InstructorTag` is used in place of the old HTML code.

You goal is to get rid of the `App.css` file by filling out `styles.js` and `InstructorTag.js`.

Good luck!

> To test your work, run `yarn test` in the project directory.

## Why?

As demonstrated in the task, the current code in `App.js` is quite repetitive. That goes against React's core values!
One of React's strongest suits is how reusable its code is.
Developers hate writing the same code twice, and React is great at eliminating that problem.

Separating code into smaller chunks makes it more managable.
It is easier to look at a small file concerned with one logical idea than a big file combining a lot of ideas in one.
Additionally, if you are developing a larger app, and you want the interface to look consistent you would want all the buttons in
app to look the same.

These are a few benefits of componentising code using React.

Additionally, using `styled-components` allows us to get rid of class names, which are confusing and prone to errors.
