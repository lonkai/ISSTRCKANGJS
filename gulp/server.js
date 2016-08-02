/**
 * Created by rsabiryanov on 18.03.2015.
 */
/** express server & lr & watch **/
var gulp = require('gulp');
var path = require('path');
var runSequence = require('run-sequence');
var underscore = require('underscore');
var configManager = require('./configurationManager');
var config = require('./configurationManager').get();

var appDir = config.appDir;
var destPathName = config.destPathName;
var util = require('gulp-util');
var runSequence = require('run-sequence');

var tinylr;

var expressSrc = path.join(__dirname, '../dist'),
	port = config.servePort,
	urlPort = config.urlPort || port,
	lrPort = config.liveReloadPort;

gulp.task('express', function (cb) {
	var express = require('express');
	var app = express();
	console.log(('start express in ' + expressSrc).green);
	app.use(require('connect-livereload')({port: lrPort}));
	app.use(express.static(expressSrc, {
		setHeaders: function (res, path, stat) {
			res.set('cache-control', "no-cache")
		}
	}));
//my express
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(cookieParser());

	app.post('/issues', function (req, res) {
		var data = req.body;
		var fs = require('fs');

		fs.writeFile("src/app/json/issues.json", JSON.stringify(data), function (err) {
			if (err) {
				console.log(err);
			} else {
				console.log("ISSUES File saved!");
			}
		});

		fs.writeFile("dist/json/issues.json", JSON.stringify(data), function (err) {
			if (err) {
				console.log(err);
			} else {
				console.log("ISSUES DIST File saved!");
			}
		});

		res.send('nice');

	});

	app.post('/comments', function (req, res) {
		var data = req.body;
		var fs = require('fs');

		fs.writeFile("src/app/json/comments.json", JSON.stringify(data), function (err) {
			if (err) {
				console.log(err);
			} else {
				console.log("COMMENTS File saved!");
			}
		});

		fs.writeFile("dist/json/comments.json", JSON.stringify(data), function (err) {
			if (err) {
				console.log(err);
			} else {
				console.log("COMMENTS DIST File saved!");
			}
		});

		res.send('nice2');

	});

	app.post('/poll', function (req, res) {

		var data = req.body;
		var fs = require('fs');

		fs.writeFile("src/app/json/poll.json", JSON.stringify(data), function (err) {
			if (err) {
				console.log(err);
			} else {
				console.log("POLL File Saved!");
			}
		});

		fs.writeFile("dist/json/poll.json", JSON.stringify(data), function (err) {
			if (err) {
				console.log(err);
			} else {
				console.log("POLL DIST File Saved!");
			}
		});

		res.send('nice3');

	});


	app.listen(port);
	cb();
});

gulp.task('livereload', function (cb) {
	tinylr = require('tiny-lr')();
	tinylr.listen(lrPort);
	cb();
});

gulp.task('open', function (cb) {
	var url = config.url +':'+ urlPort + '/';
	console.log(('Open ' + url).green);
	require('opn')(url);
	cb();
});

function notifyLiveReload(event) {
	console.log(('NotifyLiveReload').yellow);

	var fileName = require('path').relative(__dirname, event.path);
	tinylr.changed({
		body: {
			files: [fileName]
		}
	});
}

function debounce(fn, timeout, immediately, context) {
	var t;
	return function () {
		var cntx = context || this;
		var args = arguments;
		if (t) {
			clearTimeout(t);
			t == null;
		}
		if (!t) {
			t = setTimeout(function () {
				fn.apply(cntx, args);
				t = null;
			}, timeout);
		}
	}
}

gulp.task('watch', ['injects'], function (cb) {
	if (config.watch) {
		var debounceDelay = 1000;
		var gulpWatchOptions = {debounceDelay: debounceDelay};
		var commonSource = config.commonSource;

		var startTasks = function startTasks(tasks) {
			return function (e) {
				console.log(('Watch file: ' + e.path).yellow);
				this.start(tasks);
			}.bind(this);
		}.bind(this);

		console.log('Start watching angular templates');
		gulp.watch([appDir + '/js/**/*.html'], gulpWatchOptions, startTasks('templateCache'));
		console.log('Start watching common templates');
		gulp.watch([commonSource + '/ui/**/*.html'], gulpWatchOptions, startTasks('common-template-scripts'));

		if (config.livereload) {
			var callNotifyLiveReload = underscore.debounce(function (event) {
				notifyLiveReload(event)
			}, 1000);
			gulp.watch([destPathName + '/js/**/*.js', destPathName + '/js/**/*.html', commonSource + '/ui/**/*.html'], gulpWatchOptions, callNotifyLiveReload);
		}
	}

	cb();
});


/**
 * Запуск сервера
 */
gulp.task('serve', function (done) {
	configManager.set({
		watch: true,
		livereload: true
	});
	runSequence('build', 'express', 'livereload', 'watch', 'open', done);
});

/**********************/
//express
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static('public'));

app.get('/', function (req, res) {
	res.send('Hello World!');
});

app.get('src/app/json/issues.json', function (req, res) {

	var fs = require('fs');
	//fs.appendFile("./public/src/json/issues-new.json", JSON.stringify(data), function(err) {
	fs.readFile('.src/app/json/issues.json', function (err, data) {
		if (err) throw err;
		console.log(data);
	});

});



app.post('/poll', function (req, res) {
	console.log('ddfsdfsdfdsfdsfds');
	var data = req.body;
	var fs = require('fs');
	//fs.appendFile("./public/src/json/issues-new.json", JSON.stringify(data), function(err) {
	fs.writeFile("src/app/json/poll.json", JSON.stringify(data), function (err) {
		if (err) {
			console.log(err);
		} else {
			console.log("Файл3 Збережено!");
		}
	});

	res.send('nice3');

});

module.exports = app;