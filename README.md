jQuery validator l10n
=====================

Convert broken Laravel validation rules to human readable Laravel error messages

Validation rules: _http://laravel.com/docs/4.2/validation_

Error message example:
```js
error_messages = {
  "min" : {
      "numeric": "The :attribute must be at least :min.",
      "file": "The :attribute must be at least :min kilobytes.",
      "string": "The :attribute must be at least :min characters.",
      "array": "The :attribute must have at least :min items."
  },
  "required" : "The :attribute field is required."
};
```

You can create your own custom convert methods below the "Custom converters" section.

Recommended validator for this function: [joecwallace/jquery-validator](https://github.com/joecwallace/jquery-validator).

Function options:
* errorMessages: human readable error messages for all possible rules
* label: name of input field (attribute) to display in the error message
* brokenRules: broken rules seperated by | (vertical bar) sign
* callback: this function will get the result of this function (error messages)
* value: value of the input field

Cheers,

*Peter @ Ennosol*

-----
This piece of software is governed by the MIT License.

```
The MIT License (MIT)

Copyright (c) 2014 Ennosol Technology

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```
