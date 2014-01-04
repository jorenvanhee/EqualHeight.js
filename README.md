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
