$(document).ready(function(){
    $('#submitReservation').on('click', function (event) {
        event.preventDefault();
    
        console.log('clicking submit');
    
        $.get('/api/reservations', function (data) {
            let lengthOfReservations = data.length;
    
            // Extract form information
            var newReservation = {
                "name": $('#nameInput').val(),
                "phone": $('#phoneInput').val(),
                "email": $('#emailInput').val(),
                "uID": $('#UIDInput').val()
            };
    
    
            $.post('/api/makeReservations', newReservation);
    
            $('#nameInput').val('');
            $('#phoneInput').val('');
            $('#emailInput').val('');
            $('#UIDInput').val('');
    
        });
    
    });

});
