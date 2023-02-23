function addInternaut() {
    var Nickname = document.getElementById("Nick").value
    localStorage.setItem("Nicknames",Nickname)
    window.location = "kwitter_room.html" 
}