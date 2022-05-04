const { exec } = require('child_process');
const semver = require('semver');

exec('ns --version', (err, stdout, stderr) => {
    if (err) {
        // node couldn't execute the command
        console.log(`ns --version err: ${err}`);
        return;
    }

    // In case the current Node.js version is not supported by CLI, a warning in `tns --version` output is shown.
    // Sample output:
    //
    /* Support for Node.js ^8.0.0 is deprecated and will be removed in one of the next releases of NativeScript. Please, upgrade to the latest Node.js LTS version.
    6.0.0
    */
    // Extract the actual version (6.0.0) from it.
    const tnsVersion = semver.major((stdout.match(/\d+(\.\d+){2,}/g) || [])[0]);

    // execute 'ns plugin build' for {N} version > 4. This command builds .aar in platforms/android folder.
    if (tnsVersion >= 4) {
        console.log(`executing 'ns plugin build'`);
        exec('ns plugin build --info', (err, stdout, stderr) => {
            if (err) {
                // node couldn't execute the command
                console.log(`${err}`);
                return;
            }
        });
    }
});
