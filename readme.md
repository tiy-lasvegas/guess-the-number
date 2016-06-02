# [http://bit.ly/vegas-fe](http://bit.ly/vegas-fe)

# JavaScript - An Introduction

## What is JavaScript?

#### It's not Java!

> JavaScript is an object-oriented computer programming language commonly used to create interactive effects within web browsers.


## What is Programming?

> Writing instructions for your computer to execute at a later time.


## The Modern Web

* The Content Layer (HTML)
* The Design Layer (CSS)
* The Interactive Layer (JavaScript)

## What Is JavaScript Used For?

- Adding Fancy Page Interactions - [here](http://dev.sencha.com/playpen/ext-core-latest/examples/lightbox/)
- Full Featured Web Apps - [here](http://www.rdio.com/new/)
- Drawing & Animations - [here](http://raphaeljs.com/analytics.html)
- Interactive elements - [here](http://codepen.io/twhitacre/full/MwKXxz/)
- Build a full backend - [here](http://nodejs.org/)
- Go nuts with it - [here](http://mrdoob.com)

## Some "Parts" of A Programming Language

* Syntax
* Data Types
* Variables
* Expressions

## Syntax

```js
document.getElementById('header');
```

* `document`: object
* `.`: property accessor
* `getElementById`: property
* `()`: function call
* `'header'`: parameter

## Data Types

* `Number` looks like: *1* or *500* or *3.14*
* `String` looks like "Any Message in Quotes"
* `Boolean` looks like *true* or *false*
* `Null` is an empty value: *null*
* `Undefined` is the absence of a value: *undefined*

##  Variables

Declare a variable

```js
var firstName;
```

Assign a value to a variable

```js
firstName = 'Tim';
```

Shorthand (Declare and assign)

```js
var firstName = 'Tim';
```

## Variables (Rules)

- Begin with letters, $ or _
- Only contain letters, numbers, $ and _
- Case sensitive
- No reserved words - [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords)


## Variables (Conventions)

- camelCase vs using _'s
- Choose and stick with a convention


## Expressions


> Variables can store the result of an expression

```js
var age = 2014 - 1983;
var greeting = "My name is Tim and I am " + age + " years old";
var isOld = age > 100;
```

## Comments

```js
var firstName = "Tim"; // Single Line Comment

/*
  Multi Line
  Comment (Comment Block)
*/
var a = 1;
var b = 2;
var c = 1 + 2;
```


## Arithmetic

```js
var a = 5 + 5; // 10
var b = a * 2; // 20
var c = 25 / 5; // 5
var d = b - c; // 15
```


## Functions

```js
function greet (name) {

  return “Hello, “ + name + “!”;

}

greet(“Tim”); // Hello, Tim!
```