/**
 * Configuration file for RollupJS module builder. 
 * 
 * This configuration file includes the ols_core project libraries that
 * are referenced in the core/index.ts file. 
 * 
 */
import typescript from 'rollup-plugin-typescript';
import resolve from 'rollup-plugin-node-resolve';
import angular from 'rollup-plugin-angular';
import commonjs from 'rollup-plugin-commonjs';
import uglify from 'rollup-plugin-uglify';
import rollup_definitions from './global-definitions.js';

export default {
    /**
     * the entry point where all the linrary includes are listed
     */
    entry: 'source/tour_of_heros/main.ts',
    /**
     *  merged outputfile
     */
    dest: 'dist/app.es5.js',
    /**
     * Types of bundle format
     */
    format: 'iife',

    /**
     * Global variable name of the library files. Refer to globals definitions on how to access them from project modules.
     * NOTE: you can also type in the variable name of the browser console to see the actual function.
     */
    moduleName: 'app',

    /**
     * Add source map
     */
    sourceMap: true,

    /**
     * Method to call when there is an warning thrown by rollup.
     */
    onwarn: function(msg) {
        /**
         * Lets not flood the consle with that stupid warning!
         * 
         * According to google, we can happily ignore this warning: 
         */
        let message = msg.message != undefined ? msg.message : msg;
        if (!message.includes("The 'this' keyword is equivalent to 'undefined' at the top level of an ES module")) {
            console.log(msg.message);
        }
    },

    /**
     * Global variable names that are defined in this bundle. Feature and app bundles should use the following definitions in their
     * respective rollup config files.
     * 
     * On the same note - in the feature and app modules, these global variable names should be registered as external dependencies.
     */
    globals: function(id) {
        if (rollup_definitions.rollup_globals_definitions[id]) {
            // console.log("Registered as global - " + id + " -> " + rollup_definitions.rollup_globals_definitions[id]);
            return rollup_definitions.rollup_globals_definitions[id];
        }
        else {
            console.log("Not registered in global definitions! -> " + id);
        }
    },
    external: function(id) {
        var external_dep = false;
        if (id.startsWith("@angular/") || id.startsWith("rxjs/") || id.startsWith("Reflect") || id.startsWith("reflect-metadata")) {
            external_dep = true;
        }
        return external_dep;
    },
    plugins: [
        angular(),
        typescript({
            typescript: require('typescript')
        }),
        resolve({
            jsnext: true,
            main: true,
            browser: true
        }),
        commonjs(),
        uglify()
    ]
}
