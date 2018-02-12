# angularjs-bytes
AngularJS Wrapper for [Bytes.js](https://github.com/visionmedia/bytes.js) 

Installation
------------

You can choose your preferred method of installation:
* Through npm: `npm install angularjs-bytes --save`

Usage
-----
Include angularjs-bytes.js in your application.

```html
<script src="path/to/angularjs-bytes.js"></script>
```
Add the module `angularjs-bytes` as a dependency to your app module:

```js
var myapp = angular.module('myapp', ['angularjs-bytes']);
```

You can also use ES6 or CommonJS
```js
import angularjsBytes from 'angularjs-bytes';
// or
var angularjsBytes = require('angularjs-bytes');

var myapp = angular.module('myapp', [angularjsBytes]);
```

You can either inject the filter or use it in your templates
```html
<p>File Size: {{$ctrl.document.fileSize | ngBytes:$ctrl.options}}</p>
```
```js
const ngBytes = $filter('ngBytes');
ngBytes(1024);
// output: '1KB'
```

Collaborators
------------

Colm Seale <colm.seale@gmail.com>

License
----

Released under the terms of MIT License:

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
