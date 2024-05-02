function validation() {
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var message = document.getElementById('message');

    var nameRegex = /^[a-zA-Z\s]+$/;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let checkmsg = /^.{1,}$/;

    if (!nameRegex.test(name.value)) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Invalid Name",
        });
    } else if (!emailRegex.test(email.value)) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Invalid Email",
        });
    } else if (!checkmsg.test(message.value)) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Invalid Message",
        });
    }
    else {
        Swal.fire({
            icon: "success",
            title: "Success",
            text: "Thanks Your Feedback",
        });
      
    }
       
name.value="",
  email.value="",
  message.value=""

};