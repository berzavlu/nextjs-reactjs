module.exports = {
  "parser": "babel-eslint",
  "extends": "airbnb",
  "globals": {
    "document": true,
    "window": true,
    "process": true,
  },
  "rules": {
    "import/extensions": 0,
    "import/no-extraneous-dependencies": 0,
    "import/no-unresolved": 0,
    "react/jsx-filename-extension": 0,
    "linebreak-style": 0,
    "indent": ["error", 2, {"SwitchCase": 1}],
    "semi": 0, //comillas simples
    "jsx-quotes": ["error", "prefer-single"], //comillas simples
    "max-len": ["error", { "code": 250, "tabWidth": 2 }], //máximo length por fila
    "no-empty": "error", //no lineas vacías
    "no-multiple-empty-lines": [2, { "max": 1 }], //máximo 1 fila vacía
    "react/prop-types": 0, //los proptypes no son obligatorios
    "react/react-in-jsx-scope": "off", //no es necesario delcarar react en un archivo
    "lines-between-class-members": ["error", "never"], //nunca se deja espacio despues de las clases
    "space-before-function-paren": ["error", { //espacios despues del nombre de la función
      "anonymous": "always",
      "named": "always",
      "asyncArrow": "always"
    }],
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "jsx-a11y/label-has-for": 0,
    "jsx-a11y/anchor-is-valid": 0,
    "react/jsx-one-expression-per-line": "literal",
    "arrow-body-style": 0,
    "react/no-array-index-key": 0,
    "quote-props": ["error", "as-needed"],
    'no-plusplus': 0,
    'semi': ["error", "never"], 
    'react/no-unescaped-entities': 0,
  }
}
