# Syllables [![Build Status](https://api.travis-ci.com/f-a-r-a-z/syllables.svg?branch=master)](https://travis-ci.com/f-a-r-a-z/syllables)

Syllables are counted using the [CMU Pronouncing Dictionary](https://en.wikipedia.org/wiki/CMU_Pronouncing_Dictionary), which uses 4MB of storage.

## Install

```
$ npm install syllables
```


## Usage

```js
const syllables = require('syllables');

syllables('Hello');
//=> 2

syllables('Hi, how are you?');
//=> 4

syllables('sjhljhah aiuoihdal ijiajl');
//=> 0
```


## API

### syllables(str)

#### str

Type: `string`

Word or sentence to count syllables of. Unrecognised words will have a syllable count of 0.
