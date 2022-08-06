//npm = Node package manager

console.log("this is npm tutorial");





/*
commands :-
  npm
  npm --version
  cd nodejs_7
  npm init :-
        This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (nodejs_7)
version: (1.0.0)
description: This is the best package
entry point: (nodejs_7.js)
test command:
git repository:
keywords: awesome
author: Mayur
license: (ISC)
About to write to E:\Web_development\nodejs_7\package.json:

{
  "name": "nodejs_7",
  "version": "1.0.0",
  "description": "This is the best package",
  "main": "nodejs_7.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "awesome"
  ],
  "author": "Mayur",
}


Is this OK? (yes) yes




  npm install slugify  :- will install slugify and add in dependencies in package.json file
  npm install express  :-will install express package and ----------||---------------------
  npm install slugify@1.3.5  :- will install slugify version 1.3.5
           @1.3.5 specifies major.minor.patch
           ie. majorversion ,smallfunctions, patch:-bug fixes


           1.0.0
           1.0.1   bug fixing is done
           1.1.0   features are updated
           2.0.0   new version

  npm install nodemon --save-dev :-will devdependencies in package.json
  npm install nodemon --global :- will install nodemon globally 
                  then using node mon we can run file.js

 npm i browserify
*/