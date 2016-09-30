module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'css/style.css': 'sass/*.sass'
        }
      }
    },

  cssmin: {
    target: {
      files: [{
        expand: true,
        cwd: 'css/',
        src: ['*.css', '!*.min.css'],
        dest: 'css/',
        ext: '.min.css'
      }]
    }
  },

  autoprefixer: {
    options: {
      // Task-specific options go here. 
    },
    your_target: {
      files: [{
        expand: true,
        cwd: 'css/',
        src: ['*.css', '!*.min.css'],
        dest: 'css/',
        ext: '.css'
      }]
    } 
    },

  watch: {
  scripts: {
    files: ['**/*.sass','css/*.css'],
    tasks: ['sass', 'autoprefixer'],
    options: {
      spawn: false,
    },
  },
},

});
  // Load the plugins tasks 
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-watch');
  // Default task(s).
  grunt.registerTask('default', ['sass', 'cssmin', 'autoprefixer', 'watch']);
};