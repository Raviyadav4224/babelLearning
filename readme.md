* Babel converts the modern JS versions into backward compatible versions so that it can run on older
    browsers as well
    * It also converts the JSX (HTML like code inside JS) using the React.createElement

    * Babel also makes the application compatible with mentioned BROWSERSLIST'S in package.json file or
      in the .browserslistrc config file 

    * Babel itself does not directly parse browserslist, it relies on plugins and presets 
      (like @babel/preset-env) to transform the code. These presets use the browserslist 
      configuration to determine which transformations are needed to make the code compatible 
      with the specified browsers.

    * npx babel sourceFolderToCompile --out-dir outputFolderName
        1. @babel/preset-env it converts the modern JS into backward compatible code and also detects the
            list of compatible browsers list
        2. Plugin babel-plugin-transform-remove-console - It removes all the console after compiling
        3. @babel/preset-react - It converts JSX into JS
        4. Custom babel plugins

        babel.config.json file -
            {
            "presets": ["@babel/preset-env", "@babel/preset-react"],
            "plugins": ["transform-remove-console","./plugins/addComment"]
            }

        *Babel plugin - 
            A Babel plugin is a JavaScript function that operates on the Abstract Syntax Tree (AST) 
            of your code. The AST is a tree-like representation of your source code, where each node 
            corresponds to a syntactic construct (e.g., a function, variable, expression).
            Babel plugins manipulate this tree to transform or analyze code.

                custom babel plugin -
                function addComment() {
                    return {
                        visitor: {
                        FunctionDeclaration(path) {
                            path.addComment("leading", "FROM_CUSTOM_PLUGIN : This is a function");
                        },
                        },
                    };
                    }
                export default addComment;

    * Babel automatically detects the browserslist from package.json or browserslistrc.js file when
      @babel/preset-env is used
* Babel converts the modern JS versions into backward compatible versions so that it can run on older
    browsers as well
    * It also converts the JSX (HTML like code inside JS) using the React.createElement

    * Babel also makes the application compatible with mentioned BROWSERSLIST'S in package.json file or
      in the .browserslistrc config file 

    * Babel itself does not directly parse browserslist, it relies on plugins and presets 
      (like @babel/preset-env) to transform the code. These presets use the browserslist 
      configuration to determine which transformations are needed to make the code compatible 
      with the specified browsers.

    * npx babel sourceFolderToCompile --out-dir outputFolderName
        1. @babel/preset-env it converts the modern JS into backward compatible code and also detects the
            list of compatible browsers list
        2. Plugin babel-plugin-transform-remove-console - It removes all the console after compiling
        3. @babel/preset-react - It converts JSX into JS
        4. Custom babel plugins

        babel.config.json file -
            {
            "presets": ["@babel/preset-env", "@babel/preset-react"],
            "plugins": ["transform-remove-console","./plugins/addComment"]
            }

        *Babel plugin - 
            A Babel plugin is a JavaScript function that operates on the Abstract Syntax Tree (AST) 
            of your code. The AST is a tree-like representation of your source code, where each node 
            corresponds to a syntactic construct (e.g., a function, variable, expression).
            Babel plugins manipulate this tree to transform or analyze code.

                custom babel plugin -
                function addComment() {
                    return {
                        visitor: {
                        FunctionDeclaration(path) {
                            path.addComment("leading", "FROM_CUSTOM_PLUGIN : This is a function");
                        },
                        },
                    };
                    }
                export default addComment;

    * Babel automatically detects the browserslist from package.json or browserslistrc.js file when
      @babel/preset-env is used
