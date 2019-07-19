############################# CRUDE OPERATION USING ANGULAR 7 #######################
# FirebaseCrude

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).



Important Links: // "node_modules/bootstrap/scss/bootstrap.scss" 

##############################################################################
This is just for learning perpose demo please dont not use this for commercial perpose.
##############################################################################

#############################
Idea about the pakage manager:
#############################


npm & bower are package managers. They just download the dependencies and don't know how to build projects on their own. What they know is to call webpack/gulp/grunt after fetching all the dependencies.
bower is like npm, but builds flattened dependencies trees (unlike npm which do it recursively). Meaning npm fetches the dependencies for each dependency (may fetch the same a few times), while bower expects you to manually include sub-dependencies. Sometimes bower and npm are used together for front-end and back-end respectively (since each megabyte might matter on front-end).

grunt and gulp are task runners to automate everything that can be automated (i.e. compile CSS/Sass, optimize images, make a bundle and minify/transpile it).

grunt vs. gulp (is like maven vs. gradle or configuration vs. code). Grunt is based on configuring separate independent tasks, each task opens/handles/closes file. Gulp requires less amount of code and is based on Node streams, which allows it to build pipe chains (w/o reopening the same file) and makes it faster.

webpack (webpack-dev-server) - for me it's a task runner with hot reloading of changes which allows you to forget about all JS/CSS watchers.

npm/bower + plugins may replace task runners. Their abilities often intersect so there are different implications if you need to use gulp/grunt over npm + plugins. But task runners are definitely better for complex tasks (e.g. "on each build create bundle, transpile from ES6 to ES5, run it at all browsers emulators, make screenshots and deploy to dropbox through ftp").

browserify allows packaging node modules for browsers. browserify vs node's require is actually AMD vs CommonJS.
