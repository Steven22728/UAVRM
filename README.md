node-djiparsetxt
==============

![npm](https://img.shields.io/npm/v/node-djiparsetxt.svg)
![NPM](https://img.shields.io/npm/l/node-djiparsetxt.svg)

Decrypts and parse DJI logs and outputs csv files, along other things. Based on 
[`djiparsetxt`](http://djilogs.live555.com/).

Usage
=====

## From the terminal

The main use case for is through a terminal to create json version of logs.

The cli's format is:

		node-djiparsetxt FILE [FILE...] [OPTIONS]

Type `node-djiparsetxt --help` for more info on options.


Example to create a json file from a text log:

		node-djiparsetxt log1.txt > log1.json

## From a script

`node-djiparsetxt` supports usage as a library to integrate it to a bigger 
workflow or to create batch processing of log files.

Example script that prints preformatted json file from a log file:

```javascript
const djiparsetxt = require('node-djiparsetxt');
const fs = require('fs');

const file_path = "path_to_log.txt";

fs.readFile(file_path, (err, data) => {
	if (err) throw err;
	console.log(JSON.stringify(djiparsetxt.parse_file(file_path, data), null, 4));
});
```

`node-djiparsetxt` Module
=========================

`parse_file(name: string, buf: Buffer): ParsedOutput`

Parse a given buffer and return an object of type `ParsedOutput`.

#### Parameters

- *`name`*: `string`: Name to use on the return object for the buffer given.
- *`buf`*: `Buffer`: Buffer instance of the file to parse.

#### Returns

An instance of type `ParsedOutput` with the parsed files.
