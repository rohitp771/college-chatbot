// Add interactive animations or scroll effects (optional)
console.log("AskAdmit Homepage Loaded!");
function openSidebar(){
    navbar.classlist.add('show')
    navbar.removeAttribute('insert')
    openButton.setAttribute('aria-expanded','true')
}
function closeSidebar(){
    navbar.classlist.remove('show')
    navbar.setAttribute('insert','')
    openButton.setAttribute('aria-expanded','false')
    
}