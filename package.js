export var name = "@redsift/d3-rs-calendar-chart";
export var version = "0.3.3";
export var description = "Generates a calendar chart using D3v4.";
export var keywords = ["redsift","d3","calendar","chart"];
export var homepage = "https://github.com/redsift/d3-rs-calendar-chart";
export var license = "MIT";
export var author = {"name":"Christos Vontas"};
export var main = "distribution/d3-rs-calendar-chart.umd-es2015.min.js";
export var repository = {"type":"git","url":"https://github.com/redsift/d3-rs-calendar-chart.git"};
export var scripts = {"serve":"gulp -o d3-rs-calendar-chart -g d3-selection -g d3-time-format -g d3-array -g d3-collection -g d3-time -g d3-scale -g @redsift/d3-rs-svg -g @redsift/d3-rs-tip serve","build":"gulp -o d3-rs-calendar-chart -g d3-selection -g d3-time-format -g d3-array -g d3-collection -g d3-time -g d3-scale -g @redsift/d3-rs-svg -g @redsift/d3-rs-tip build","pretest":"npm outdated && npm run build","test":"tape 'test/**/*-test.js' && eslint index.js src","version":"json2module package.json > package.js","prepublish":"npm run build"};
export var dependencies = {"@redsift/d3-rs-svg":"~0.2.3","@redsift/d3-rs-tip":"~0.2.0","d3-array":"^0.8.1","d3-collection":"^0.3.1","d3-scale":"^0.9.0","d3-selection":"~0.8.0","d3-time":"^0.3.1","d3-time-format":"~0.4.0"};
export var devDependencies = {"@redsift/tape-reel":"~0.0.2","babel-preset-es2015-rollup":"^1.1.0","browser-sync":"^2.13.0","del":"^2.2.0","eslint":"^2.10.2","gulp":"^3.9.1","gulp-plumber":"^1.1.0","gulp-rename":"^1.2.2","gulp-sourcemaps":"^2.0.0-alpha","gulp-uglify":"^1.5.3","gulp-util":"^3.0.7","json2module":"~0.0.3","rollup":"^0.26","rollup-plugin-babel":"^2.5.1","rollup-plugin-includepaths":"^0.1.2","rollup-stream":"^1.6.0","vinyl-buffer":"^1.0.0","vinyl-source-stream":"^1.1.0","yargs":"^4.7.1"};
