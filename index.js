var sys = require("sys");
var exec = require("child_process").exec;

var child = exec("gulp build", function(error, stdout, stderr) {
  sys.print("build stdout: " + stdout);
  sys.print("build stderr: " + stderr);
  if (error !== null) {
    console.log("build error: " + error);
  }
})
