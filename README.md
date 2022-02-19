# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @b1u3too/lotide`

**Require it:**

`const _ = require('@b1u3too/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual` : archived for review, do not use - visual console logger of assertions about arrays
* `assertEqual` : archived for review, do not use - visual console logger of assertions about primitive datatypes
* `assertObjectsEqual` : archived for review, do not use - visual console logger of assertions about objects
* `countLetters` : return object containing summary of how often each letter in a provided string appears
* `countOnly` : return object summarizing how often specified keys appear in provided object 
* `eqArrays` : check that two provided arrays are strictly equivalent -- recursive handling of nested arrays
* `eqObjects` : check that two provided objects are strictly equivalent -- recursive handling of nested objects
* `findKey` : return key of the first value in provided object to pass provided callback function test
* `findKeyByValue` : return key of the last value matching provided value 
* `flatten` : return 1D array version of provided array containing arrays
* `head` : return the first element of a provided array
* `letterPositions` : return an object reporting on letters used and all index positions they appear in for a given input string
* `map` : array.prototype.map weak clone -- apply callback function to each element of a given array, returning a new array
* `middle` : return the middle element(s) of a provided array
* `takeUntil` : return a slice of an array from the beginning, until the first element that passes provided callback test
* `tail` : return all but the first element of a provided array
* `without` : take in a source array, and an array listing what not to pass through, and return a new array _without_ those elements!