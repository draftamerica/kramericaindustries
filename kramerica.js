// Get the modal
var modal = document.getElementById('myModal');

window.onload = function() {
     setTimeout(KramerModal, 3000);
}


function KramerModal() {
    console.log("==KramerModal==");
    var thisModal = document.getElementById("myModal");
    thisModal.style.visibility = "visible";
}


var span = document.getElementsByClassName("close")[0];


span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//====ARCHIVE======//

// $(document).ready(function () {
//        $('#button').click(function (e) { // Button which will activate our modal
//            $('#modal').reveal({ // The item which will be opened with reveal
//                animation: 'fade',                   // fade, fadeAndPop, none
//                animationspeed: 600,                       // how fast animtions are
//                closeonbackgroundclick: true,              // if you click background will modal close?
//                dismissmodalclass: 'close'    // the class of a button or element that will close an open modal
//            });
//            return false;
//        });
//    });
