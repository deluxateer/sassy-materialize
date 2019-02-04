# Sassy Materialize
compiles, concatenates, and minifies materialize v1.0.0 files using Gulp 4. 

Link to the Materialize framework source code: https://github.com/Dogfalo/materialize

#### Setup
```
git clone https://github.com/deluxateer/sassy-materialize.git
cd sassy-materialize
npm install
npm run build
```

## How to Use

#### `npm run build`
This will create minified materialize css & js files. Then it will automatically run a server that renders everything in the `dist/` folder and watch for any changes made in the `src/sass/`, `src/js/`, and in `dist/`. Any change will automatically prompt the browser to reload.

#### `npm run watch`
The same as `npm run build` without the initial part of constructing the minified files. It just launches the browser and watches.

#### `npm run css`
1. Compiles the sass files into a compressed css file.
2. Autoprefixes all rules for Chrome 30+, Firefox 30+, IE 10+, and Safari 8+.
3. Renames the final file into "materialize.min.css".

#### `npm run js`
Transpiles all of the js files with babel, concats them into one file, and then minifies it.
