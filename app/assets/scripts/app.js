


$(document).ready(function() {
    $("#contact").submit(function(event) {
        console.log("meow");
        event.preventDefault();
        var name = $("#mail-name").val();
        var email = $("#mail-email").val();
        var message = $("#mail-message").val();
        var submit = $("#mail-submit").val();
        
        $(".form-message").load("mail.php", {
            name: name,
            email: email,
            message: message,
            submit: submit

        });
    });
});