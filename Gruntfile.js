module.exports = function (grunt) {

    grunt.initConfig({

        // Import package manifest
        pkg: grunt.file.readJSON("equalHeight.jquery.json"),

        // Banner definitions
        meta: {
            banner: "/*\n" +
                    " *  <%= pkg.title || pkg.name %> - v<%= pkg.version %>\n" +
                    " *  <%= pkg.homepage %>\n" +
                    " *\n" +
                    " *  Made by <%= pkg.author.name %>\n" +
                    " *  Under <%= pkg.licenses[0].type %> License\n" +
                    " */\n"
        },

        // Concat definitions
        concat: {
            dist: {
                src: ["src/jquery.equalheight.js"],
                dest: "dist/jquery.equalheight.js"
            },
            options: {
                banner: "<%= meta.banner %>"
            }
        },

        // Minify definitions
        uglify: {
            dist: {
                src: ["src/jquery.equalheight.js"],
                dest: "dist/jquery.equalheight.min.js"
            },
            options: {
                banner: "<%= meta.banner %>"
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('default', ['uglify', 'concat']);

};