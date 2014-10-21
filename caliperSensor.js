// Grab an existing namespace object, or create a blank object
// if it doesn't exist
var CaliperSensor = window.CaliperSensor || {};

// Stick on the modules that need to be exported.
// You only need to require the top-level modules, browserify
// will walk the dependency graph and load everything correctly
CaliperSensor.RoadRunner = require('./actions');

// Replace/Create the global namespace
window.CaliperSensor = CaliperSensor;