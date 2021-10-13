function openTab(event, tabName) {
    var tabContent = document.getElementsByClassName('tabcontent');
    var tabLinks = document.getElementsByClassName('tablinks');
    for (let element of tabContent) {
        element.style.display = 'none';
    }
    for (let element of tabLinks) {
        element.className = element.className.replace(' active', '');
    }
    document.getElementById(tabName).style.display = "inline-block";
    event.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();