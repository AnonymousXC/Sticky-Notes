const {PythonShell} = require('python-shell');
const path2 = require('path');




function bold_text() {
    const sel_txt = window.getSelection().toString();
    const text = document.getElementById('textbox').innerHTML;
    let bold_opt = {
        mode: 'text',
        pythonOptions: ['-u'],
        scriptPath: path2.join(__dirname, "./src/python"),
        args: [sel_txt, text]
    };
    PythonShell.run("bold.py", bold_opt, (event, msg) => {
        document.getElementById("textbox").innerHTML = msg
    });
}
 
