const {PythonShell}  = require('python-shell')

 function merger(files)
{
    let result
    let path=[]
    files.forEach(file => {
        path.push(file.path)
    });
    path = JSON.stringify(path)
    
    let pyshell = new PythonShell('mergeScript.py');

// sends a message to the Python script via stdin
pyshell.send(path);

return new Promise((resolve,reject)=>{
    pyshell.on('message', function (message) {
        result = message;
      });
      
      // end the input stream and allow the process to exit
      pyshell.end(function (err,code,signal) {
        if (err) reject(err);
        console.log(result)
        resolve(result)
        console.log('The exit code was: ' + code);
        console.log('The exit signal was: ' + signal);
        console.log('finished');
        
      });

      
})
    

}
module.exports = merger;