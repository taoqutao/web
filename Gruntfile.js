module.exports = function(grunt) {
 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            options: {
                livereload: 9991
            },
            scripts: {
                files: ['_pages/*.html','_includes/*.html','images/**'],
                tasks: ['masterify','includereplace'],
                options: {
                    spawn: false,
                },
            },
        },
        less: {
            development: {
				options: {
                    sourceMap: true,
                    outputSourceFiles: true,
                    sourceMapURL: '<%= pkg.name %>.css.map',
                    sourceMapFilename: 'css/<%= pkg.name %>.css.map'
                },
                files: [
				{expand: true,cwd: 'less',src: ['<%= pkg.name %>.less'],dest: 'css',ext: '.css'}
				]
            }
        },
		 masterify:{
            dist:{                
                options:{
                    beautify:true,
                    masters:{
                        master1:'_includes/_layout.html',
						master2:'_includes/_layout2.html'
                    }
                },
				files: [
					{src: '*.html', dest: '_sites/', expand: true, cwd: '_pages/'}
		
				]
            }
        },
		includereplace: {
			dist: {
				options: {
					// Task-specific options go here.
				},
				files: [
					{src: '*.html', dest: '_sites/', expand: true, cwd: '_sites/'}
				]
			}
		},	
        cssmin:{
            options: {
                    keepSpecialComments: '*',// keep all important comments
                    advanced: false
            },
            dist:{
                src: 'css/<%= pkg.name %>.css',
                dest: 'css/<%= pkg.name %>.min.css'
            }
        }
		
      
    });
 
    require('load-grunt-tasks')(grunt);
    grunt.registerTask('default', [ 'masterify','includereplace','watch']);

 
};