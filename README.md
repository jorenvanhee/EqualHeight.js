EqualHeight.js
==============

A jQuery plugin that sets the height of each element in a group to the height of the highest element.  
It is responsive, so it keeps working when you resize your window.

## Install

1. Include jQuery:

    ```html
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js"></script>
    ```

2. Include plugin's code:

    ```html
    <script src="dist/jquery.equalheight.min.js"></script>
    ```

### Bower

```
bower install equalheight
```

## Usage

```javascript
$(document).ready(function () {
    $('.elements').equalHeight();
}
```

## Options

| option | type | default | description |
| ------ | ---- | ------- | ----------- |
| *wait* | `boolean` | `false` | If `true`, the plugin will wait to do its work until you start the plugin manually. Take a look at the [advanced example](https://github.com/JorenVanHee/EqualHeight.js/blob/master/demo/advanced.html). |
| *responsive* | `boolean` | `true` | Adjusts height of elements when necessary (if you resize your window). |

```javascript
$('.elements').equalHeight({
    wait: false,
    responsive: true
});
```

## Methods

Take a look at the [advanced example](https://github.com/JorenVanHee/EqualHeight.js/blob/master/demo/advanced.html).

| method | description |
| ------ | ----------- |
| *start* | Start the plugin. |
| *stop* | Stop the plugin and reset the elements. |
| *magic* | Set the height of each element to the height of the highest element. |
| *reset* | Remove all styles added by this plugin. |

```javascript
var eh = $('.elements').equalHeight();
eh.method();
```

## Credits

[jQuery Boilerplate](https://github.com/jquery-boilerplate/jquery-boilerplate/)

## License

The MIT License (MIT)

Copyright (c) 2014 [Joren Van Hee](http://joren.co "Joren Van Hee")

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
