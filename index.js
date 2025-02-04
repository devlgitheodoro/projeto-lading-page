var setaesq = window.document.getElementById("setaesq")
var leonardo = window.document.getElementById("leonardo")
var samantha = window.document.getElementById("samantha")
var bruna = window.document.getElementById("bruna")
var setadir = window.document.getElementById("setadir")

function rolarparadir() {
    leonardo.style ="display:none"
    samantha.style ="display:flex"
    setadir.style ="display:none"
    setaesq.style ="display:flex; margin-top:55px"
}

function rolarparaesq() {
    leonardo.style ="display:flex"
    samantha.style ="display:none"
    setadir.style ="display:flex margin-top:55px"
    setaesq.style ="display:none"
}
