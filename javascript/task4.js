function repleceText() {
    const txt = document.getElementById("txt");
    let textcontent = txt.value;
    const b = document.getElementById("inp");
    const stringToReplace = b.value;
    const c = document.getElementById("inp2");
    const replacewith = c.value;
    textcontent = textcontent.replace(stringToReplace, replacewith);
    txt.value = textcontent;
}
function replaceAll() {
    const txt = document.getElementById("txt");
    let textcontent = txt.value;
    const b = document.getElementById("inp");
    const stringToReplace = b.value;
    const c = document.getElementById("inp2");
    const replacewith = c.value;
    textcontent = textcontent.replaceAll(stringToReplace, replacewith)
    txt.value = textcontent;
}
