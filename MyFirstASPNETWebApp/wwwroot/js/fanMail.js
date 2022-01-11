////$('#btnSend').addEventListener('click', function () {
////    alert('From: ' + $('#textFrom').value
////        + ', Subject: ' + $('#textSubject').value
////        + ', Message: ' + $('#textMessage').value
////        );
////})

$('#btnSend').click(function () {
    alert('From: ' + $('#textFrom').val() +
        ', Subject: ' + $('#textSubject').val() +
        ', Message: ' + $('#textMessage').val());

    $('#picGanderson').fadeToggle();
})