$(function () {
    $('#sign_in_form').validate({
        highlight: function (input) {
            console.log(input);
            $(input).parents('.form-line').addClass('error');
        },
        unhighlight: function (input) {
            $(input).parents('.form-line').removeClass('error');
        },
        errorPlacement: function (error, element) {
            $(element).parents('.input-group').append(error);
        }
    });
    $('#sign_in_form').submit(() => {
        if($(`#sign_in_form`).valid())
            login();
    });
});