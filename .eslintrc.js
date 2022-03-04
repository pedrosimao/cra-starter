module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'prettier',
    'plugin:cypress/recommended',
    // Allow Cypress using an assertion such as expect(value).to.be.true
    'plugin:chai-friendly/recommended',
  ],
  env: {
    browser: true,
    es2021: true,
    jest: true,
    'cypress/globals': true,
  },
  plugins: [
    'react',
    'jsx-a11y',
    'react-hooks',
    'cypress',
    'chai-friendly',
    // 'prettier',
    '@typescript-eslint',
    // 'simple-import-sort',
    '@emotion',
  ],
  parserOptions: {
    typescript: true,
    ecmaVersion: 12,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  overrides: [{ files: ['*.ts', '*.tsx', '*.js', '*.jsx'] }],
  // We don't want to lint generated files nor node_modules,
  // but we want to lint .prettierrc.js (ignored by default by eslint)
  ignorePatterns: ['node_modules/*', '.build/*', '.dist/*', '!.prettierrc.js'],
  rules: {
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        /* Variables named _ or __ or ___... won"t be checked as unused
         * Useful to exclude a property from an object
         * Example:
         * const { dontWantThis: _, ...wantTheRest } = myObj; */
        varsIgnorePattern: '^_*$',
      },
    ],
    'react-hooks/rules-of-hooks': 'warn',
    'react-hooks/exhaustive-deps': 'warn',
    'prefer-destructuring': [
      1,
      {
        VariableDeclarator: { array: false, object: true },
        AssignmentExpression: { array: true, object: false },
      },
      { enforceForRenamedProperties: false },
    ],
    'class-methods-use-this': 0,
    'import/imports-first': 0,
    'import/newline-after-import': 0,
    'import/no-dynamic-require': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-named-as-default': 0,
    'import/no-unresolved': 2,
    'import/no-webpack-loader-syntax': 0,
    'import/prefer-default-export': 0,
    'no-restricted-imports': [
      'warn',
      {
        name: '@emotion/styled',
        message:
          'Please use @emotion/styled/macro instead. See https://emotion.sh/docs/babel-macros',
      },
      {
        name: '@emotion/react',
        message:
          'Please use @emotion/react/macro instead. See https://emotion.sh/docs/babel-macros',
      },
      {
        name: 'typed-redux-saga',
        message:
          'Please use @typed-redux-saga/macro instead. ' +
          'See https://github.com/agiledigital/typed-redux-saga#babel-macro',
      },
    ],
    'jsx-a11y/aria-props': 2,
    'jsx-a11y/heading-has-content': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/label-has-for': 0,
    'jsx-a11y/mouse-events-have-key-events': 2,
    'jsx-a11y/role-has-required-aria-props': 2,
    'jsx-a11y/role-supports-aria-props': 2,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'prefer-template': 2,
    'react/forbid-prop-types': 0,
    'react/jsx-first-prop-new-line': [2, 'multiline'],
    'react/display-name': 0,
    'react/jsx-closing-bracket-location': 2,
    'react/jsx-filename-extension': 0,
    'react/jsx-no-target-blank': 0,
    'react/require-default-props': 0,
    'react/require-extension': 0,
    'react/self-closing-comp': 0,
    'react/jsx-wrap-multilines': 0,
    'react/destructuring-assignment': 0,
    'require-yield': 0,
    'react/jsx-props-no-spreading': 0,
    'react/state-in-constructor': 0,
    'import/extensions': 0,
    'no-empty': [2, { allowEmptyCatch: true }],
    'react/prop-types': 0,

    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/ban-ts-comment': 0,

    // There is a bug with typescript-eslint...
    // It"s safe anyway to remove this rule since typescript will do checks anyway
    'no-use-before-define': 0,

    // We want to be able to throw error objects
    'no-throw-literal': 0,
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'max-len': ['warn', { code: 100 }],
    // 'simple-import-sort/exports': 'error',
    // 'simple-import-sort/imports': [
    //   'warn',
    //   {
    //     groups: [
    //       // Node.js builtins. You could also generate this regex if you use a `.js` config.
    //       // For example: `^(${require("module").builtinModules.join("|")})(/|$)`
    //       [
    // eslint-disable-next-line max-len
    //         '^(assert|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|tty|url|util|vm|zlib|freelist|v8|process|async_hooks|http2|perf_hooks)(/.*|$)',
    //       ],
    //       // Packages
    //       ['^\\w'],
    //       // Internal packages.
    //       ['^(@|config/)(/*|$)'],
    //       // Side effect imports.
    //       ['^\\u0000'],
    //       // Parent imports. Put `..` last.
    //       ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
    //       // Other relative imports. Put same-folder imports and `.` last.
    //       ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
    //       // Style imports.
    //       ['^.+\\.s?css$'],
    //     ],
    //   },
    // ],
    'import/no-anonymous-default-export': [
      'error',
      {
        allowArrowFunction: true,
        allowAnonymousFunction: true,
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      alias: {
        map: [
          ['typings', './typings'],
          ['src', './src'],
        ],
        extensions: ['.d.ts', '.ts', '.tsx', '.js', '.jsx', '.json'],
      },
    },
  },
}

// Keep for reference
// {
//  "env": {
//    "browser": true,
//    "es2021": true
//  },
//  "extends": [
//    "airbnb",
//    "plugin:react/recommended",
//    "plugin:react-hooks/recommended",
//    "plugin:@typescript-eslint/recommended",
//    "prettier",
//    "plugin:import/errors",
//    "plugin:import/warnings",
//    "plugin:import/typescript"
//  ],
//  "parser": "@typescript-eslint/parser",
//  "parserOptions": {
//    "ecmaFeatures": {
//      "jsx": true
//    },
//    "ecmaVersion": 12,
//    "sourceType": "module"
//  },
//  "plugins": [
//    "react",
//    "@typescript-eslint",
//    "react-hooks",
//    "prettier",
//    "simple-import-sort"
//  ],
//  "settings": {
//    "import/resolver": {
//      "node": {
//        "extensions": [".js", ".jsx", ".ts", ".tsx"]
//      }
//    }
//  },
//  "rules": {
//    "no-use-before-define": "off",
//    "react/react-in-jsx-scope": "off",
//    "react/jsx-filename-extension": ["warn", { "extensions": [".tsx"] }],
//    "react/jsx-props-no-spreading": "off",
//    "linebreak-style": "off",
//    "eol-last": "off",
//    "max-len": ["warn", { "code": 80 }],
//    "import/extensions": ["error", "never", { "svg": "always" }],
//    "prettier/prettier": [
//      "error",
//      {
//        "endOfLine": "auto"
//      }
//    ],
//    "simple-import-sort/exports": "error",
//    "simple-import-sort/imports": [
//      "warn",
//      {
//        "groups": [
//          // Node.js builtins. You could also generate this regex if you use a `.js` config.
//          // For example: `^(${require("module").builtinModules.join("|")})(/|$)`
//          [
// eslint-disable-next-line max-len
//            "^(assert|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|tty|url|util|vm|zlib|freelist|v8|process|async_hooks|http2|perf_hooks)(/.*|$)"
//          ],
//          // Packages
//          ["^\\w"],
//          // Internal packages.
//          ["^(@|config/)(/*|$)"],
//          // Side effect imports.
//          ["^\\u0000"],
//          // Parent imports. Put `..` last.
//          ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
//          // Other relative imports. Put same-folder imports and `.` last.
//          ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
//          // Style imports.
//          ["^.+\\.s?css$"]
//        ]
//      }
//    ],
//    "import/no-anonymous-default-export": [
//      "error",
//      {
//        "allowArrowFunction": true,
//        "allowAnonymousFunction": true
//      }
//    ]
//  }
// }
