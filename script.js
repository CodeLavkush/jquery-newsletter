$("#formVaild").validate({
    errorElement: "span",
    rules: {
        name: {
            required: true,
            minlength: 2,
        },
        email: {
            required: true,
            email: true
        }
    },
    messages: {
        name: {
            required: "Please enter your name",
            minlength: "Name atleast 2 characters"
        },
        email: {
            required: "Please enter your email",
            email: "Enter a vaild email"
        }
    },
    submitHandler: function (form){
        form.submit();
    }
})