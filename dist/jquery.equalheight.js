/*
 *  EqualHeight.js - v1.0.1
 *  https://github.com/JorenVanHee/EqualHeight.js
 *
 *  Made by Joren Van Hee
 *  Under MIT License
 */
;(function ($, window, document, undefined) {

    var pluginName = "equalHeight",
        defaults = {
            wait: false,
            responsive: true
        };

    function Plugin(elements, options) {
        this.elements = elements;

        this.options = $.extend({}, defaults, options);

        this._defaults = defaults;
        this._name = pluginName;

        this.active = false;

        this.init();
    }

    Plugin.prototype = {

        init: function () {
            if (!this.options.wait) {
                this.start();
            }

            if (this.options.responsive) {
                $(window).on("resize", $.proxy(this.onWindowResize, this));
            }
        },

        /**
         * Set the height of each element to the height of the highest element.
         */
        magic: function () {
            // Store the height of the highest element.
            var topHeight = 0;

            // Reset min-height and height. Otherwise we will run in trouble if
            // we execute this function a second time (on resize for instance).
            this.reset();

            // Find highest element and store the height.
            for (var i = 0; i < this.elements.length; i++) {
                var height = $(this.elements[i]).height();
                topHeight = height > topHeight ? height : topHeight;
            }

            // If this.stop was called during execution of this function, abort
            if (!this.active) return;

            // Set min-height on elements.
            for (var j = 0; j < this.elements.length; j++) {
                var element = $(this.elements[j]);

                // Height behaves like min-height when display is table-cell.
                if (element.css("display") === "table-cell") {
                    element.css("height", topHeight);
                } else {
                    element.css("min-height", topHeight);
                }
            }

            // If this.stop was called during executing of this function, reset
            if (!this.active) this.reset();
        },

        /**
         * Remove all styles added by this plugin.
         */
        reset: function () {
            this.elements.css("min-height", "");
            this.elements.css("height", "");
        },

        /**
         * Start the plugin.
         */
        start: function () {
            this.active = true;
            this.magic();
        },

        /**
         * Stop the plugin and reset the elements.
         */
        stop: function () {
            this.active = false;
            this.reset();
        },

        /**
         * Call the magic method on window resize, if allowed.
         */
        onWindowResize: function () {
            if (this.active) {
                this.magic();
            }
        }

    };

    // Release the beast
    $.fn[pluginName] = function (options) {
        return new Plugin(this, options);
    };

})(jQuery, window, document);