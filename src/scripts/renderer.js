const {ipcRenderer} = require('electron');
const path = require('path');


function close_window() {
    ipcRenderer.send("close-window", null);
}

function new_win() {
    ipcRenderer.send("new-win", null);
}

function bold_txt() {
    const text = window.getSelection().toString();
    const bolded = "<b>" + text + "</b>";
}

function on_top() {
    ipcRenderer.send("always-on-top", null);
}

function not_on_top() {
    ipcRenderer.send("not-on-top", null);
}

function toggle_setting() {
    const settings_panel = document.getElementById('settings-panel');
    settings_panel.style.top = "0";
}

function hid_settings() {
    const settings_panel = document.getElementById('settings-panel');
    settings_panel.style.top = "-300px";
}

function change_color(t) {
    var color = "#" + t.id;
    color = color.replace("x", "");
    const bar = document.getElementById("bar");
    bar.style.backgroundColor = color;
}

function blurred_mode() {
    const bar = document.getElementById('bar');
    const textbox = document.getElementById('textbox');
    const bottom_bar = document.getElementById('bottom-bar-real');
    bar.style.top = "-26px";
    textbox.style.top = "7px";
    bottom_bar.style.visibility = "hidden";
}


function focused_mode() {
    const bar = document.getElementById('bar');
    const textbox = document.getElementById('textbox');
    const bottom_bar = document.getElementById('bottom-bar-real');
    bar.style.top = "0px";
    textbox.style.top = "33px";
    bottom_bar.style.visibility = "visible";
}


ipcRenderer.on("blurred", (event) => {
    blurred_mode();
});

ipcRenderer.on("focused", (event) => {
    focused_mode();
})