const {PythonShell} = require('python-shell');
const path2 = require('path');

const python_path = path2.join(__dirname, "./src/python");


function bold_text() {
    const sel_txt = window.getSelection().toString();
    const text = document.getElementById('textbox').innerHTML;
    let bold_opt = {
        mode: 'text',
        pythonOptions: ['-u'],
        scriptPath: python_path,
        args: [sel_txt, text]
    };
    if (sel_txt){
        PythonShell.run("bold.py", bold_opt, (event, msg) => {
            document.getElementById("textbox").innerHTML = msg
        });
    }
}


function italiced() {
    const sel = window.getSelection().toString();
    const text = document.getElementById("textbox").innerHTML;
    let italic_opt = {
        mode: 'text',
        pythonOptions: ['-u'],
        scriptPath: python_path,
        args: [sel, text]
    }
    if(sel){
        PythonShell.run("italic.py", italic_opt, (event, output) => {
            document.getElementById("textbox").innerHTML = output;
        })
    }
}

function underlined() {
    const sel = window.getSelection().toString();
    const text = document.getElementById("textbox").innerHTML;
    let ul_opt = {
        mode: 'text',
        pythonOptions: ["-u"],
        scriptPath: python_path,
        args: [sel, text]
    }
    if(sel) {
        PythonShell.run("underline.py", ul_opt, (event, output) => {
            document.getElementById("textbox").innerHTML = output;
        })
    }
}

function striked() {
    const sel = window.getSelection().toString();
    const text = document.getElementById("textbox").innerHTML;
    let strike_opt = {
        mode: "text",
        pythonOptions: ["-u"],
        scriptPath: python_path,
        args: [sel, text]
    }
    if(sel){
        PythonShell.run("strike.py", strike_opt, (event, output) => {
            document.getElementById("textbox").innerHTML = output;
        })
    }
}