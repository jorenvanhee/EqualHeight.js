EqualHeight.js
==============

A jQuery plugin that sets the height of each element in a group to the height of the highest element.  
It is responsive, so it keeps working when you resize your window.

## Usage

1. Include jQuery:

    ```html
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js"></script>
    ```

2. Include plugin's code:

    ```html
    <script src="dist/jquery.equalheight.min.js"></script>
    ```

3. Call the plugin:

    ```javascript
    $(document).ready(function () {
        $('.elements').equalHeight();
    }
    ```

## Options

| option | type | default | description |
| ------ | ---- | ------- | ----------- |
| *wait* | `boolean` | `false` | If `true`, the plugin will wait to do its work until you start the plugin manually. Take a look at the [advanced example](https://github.com/JorenVanHee/EqualHeight.js/blob/master/demo/advanced.html). |
| *responsive* | `boolean` | `true` | Adjusts height when necessary if you resize your window. |

```javascript
$('.elements').equalHeight({
    wait: false,
    responsive: true
});
```
