/*
 * Written by Ole Henrik Stabell - ole@henrikstabell.com
 */

global.$ = $;
global.View = function () {
    var view = document.getElementById('content');
    var spawn = require('child_process');
    var path = require('path');
    var os = require('os');

    this.init = function () {

        // Get debug button click
        document.getElementById("debug").onclick = function () {
            // Store console log in a string
            var cmd = "";
            // Execute the cefclient using a shell script.
            cmd = spawn.execFile(path.join(os.homedir(), "openDebug.sh"));
            // Check to see if the exec path is correct.
            console.log(cmd);

            // post the result to the console using the cmd variable.
            cmd.stdout.on('data', (data) => {
                console.log(`stdout: ${data}`);
            });

            cmd.stderr.on('data', (data) => {
                console.log(`stderr: ${data}`);
            });

            cmd.on('close', (code) => {
                console.log(`child process exited with code ${code}`);
            });
        }
    }
}

$(document).ready(function () {
    var _view = new View();
    _view.init();
});