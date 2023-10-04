$(document).ready(function() {
    // Thêm quy tắc kiểm tra đối với form
    $("#registrationForm").validate({
      rules: {
        username: {
          required: true,
          minlength: 3
        },
        email: {
          required: true,
          email: true
        },
        password: {
          required: true,
          minlength: 5
        },
        confirmPassword: {
          required: true,
          equalTo: "#password"
        }
      },
      messages: {
        username: {
          required: "Please enter your username",
          minlength: "Your username must consist of at least 3 characters"
        },
        email: {
          required: "Please enter your email",
          email: "Please enter a valid email address"
        },
        password: {
          required: "Please provide a password",
          minlength: "Your password must be at least 5 characters long"
        },
        confirmPassword: {
          required: "Please confirm your password",
          equalTo: "Passwords do not match"
        }
      },
      submitHandler: function(form) {
        form.submit();
      }
    });
  });
  