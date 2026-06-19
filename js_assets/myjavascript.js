
lightbox.option({
    'resizeDuration':200,
    'wrapAround':true,
    'fadeDuration':300,
})
 //contact validation
    document.getElementsById("contactForm").addEventListener("submit", function(e){
        e.preventDefault();
        //clear previous error messages
        document.getElementById("nameError").textContent = "";
        document.querySelectorAll(".error").forEach(error => {
            fieldset.classList.remove("input-error");
        });
        let valid=true;
        //get valus
        let name = document.getElementById("name");
        let email = document.getElementById("email");
        let password = document.getElementById("password");
        let subject = document.getElementById("subject");
        let message = document.getElementById("message");
         // name validation
         if (name.value.trim() === "") {
             document.getElementById("nameError").textContent = "Name is required";
             fieldset.classList.add("input-error");
             valid = false;
         }
         //email validation
         let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (email.value.trim() === "") {
                document.getElementById("emailError").textContent = "Email is required";
                email.classList.add("input-error");
                valid = false;
            } else if (!emailPattern.test(email.value)) {
                document.getElementById("emailError").textContent = "Please enter a valid email address";
                email.classList.add("input-error");
                fieldset.classList.add("input-error");
                valid = false;
            }
            //pass validation
            if (password.value.length < 8) {
                document.getElementById("passwordError").textContent = "Password must be at least 8 characters long";
                password.classList.add("input-error");
                fieldset.classList.add("input-error");
                valid = false;
            }
            //subject validation
            if (subject.value.trim() === "") {
                document.getElementById("subjectError").textContent = "Subject is required";
                subject.classList.add("input-error");
                valid = false;
            }
            //message validation
            if (message.value.length > 200) {
                document.getElementById("messageError").textContent = "Message must be less than 200 characters";
                message.classList.add("input-error");
                valid = false;
            }
            //submit form if valid
            if (valid) {
                alert ("form submitted successfully!");
            }
    });
    //create map
    const map = L.map('map').setView([-25.7461, 28.1881], 13);
     // add map tiles
     L.titleLayer('https://{s}.title.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
     }).addTo(map);
     //marker 1
     const mrPrice = L.marker([-25.7461, 28.1881]).addTo(map);
     mrPrice.bindPopup("<b>Mr Price</b></b>Pretoria Central, Pretoria, 0001");

     //marker2
     const branch2 = L.market([-25.7550, 28.1885]).addTo(map);
     branch2.bindPopup("<b>Mr Price Cellular</b><br>Mamelodi, Pretoria");

     //update info panel when marker is clicked
     mrPrice.on('click', function() {
        document.getElementById("locationInfo").innerHTML = "<b>Mr Price</b><br>Pretoria Central, Pretoria, 0001";
     });
     branch2.on('click', function() {
        document.getElementById("locationInfo").innerHTML = "<b>Mr Price Cellular</b><br>Mamelodi Mams Mall";
     });
     
     //enquiry controls
     document.getElementById("enquiryForm").addEventListener("submit", function(e) {
        e.preventDefault();
         
        //input values
        let fullname = document.getElementById("fullname").ariaValueMax.trim();
        let email = document.getElementById("email").ariaValueMax.trim();
        let orderNumber = document.getElementById("oderNumber").ariaValueMax.trim();
        let enquiryType = document.getElementById("enquiryType").ariaValueMax;
        let message = document.getElementById("message").ariaValueMax.trim();

        // clear previous errors
        document.querySelectorAll(".error").forEach(error => {
            error.innerHTML = "";
        });
        let valid = true;
         //validate full Name
         if (fullname === "") {
            document.getElementById("nameError");
         }
     });
     // enquiry validation
     document.getElementById("enquiryForm").addEventListener("submit", function(e) {
        e.preventDefault();
         
        // get form values
        let fullname = document.getElementById("fullname").value.trim();
        let email = document.getElementById("email").value.trim();
        let oderNumber = document.getElementById("orderNumber").value.trim();
        let enquiryType = document.getElementById("enquiryType").value;
        let message = document.getElementById("message").value.trim();

        //clear errors
        document.querySelectorAll(".error").forEach(error => {
            error.innerHTML = "";
        });
        let valid = true;

        //full name validation
        if (fullname === "") {
            document.getElementById("nameError").innerHTML = "Full name is required";
            valid= false;
        }

        // email validation
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === "") {
            document.getElementById("emailError").innerHTML ="Email is required";
            valid = false;
        }

        //order number validation
        // example format: MRP123456
        let orderPattern = /^MRP\d{6}$/i;
        if (orderNumber === "") {
            document.getElementById("orderError").innerHTML ="Order number is required.";
            valid = false;
            }
            else if(!orderPattern.test(orderNumber)) {
                document.getElementById("orderError").innerHTML ="Order number must be like MRP123456";
                Valid = false;
            }

            // enquiry type validation
            if (enquiryType === "") {
                document.getElementById("enquiryError").innerHTML = "Select an enquiry type";
                valid = false;
            }

            //Message validation
            if (message.length < 10) {
                document.getElementById("messageError").innerHTML = "Message must contain at least 10 characters";
                valid = false;
            }

            //if validation pass
            if (valid)  {
                alert("Enquiry has been submitted")
            }  
         });
         //enquiry process response
         if (valid) {

            // show a success message
            document.getElementsById("response").innerHTML = "YOUR ENQUIRY HAD BEEN SUBMITTED SUCCESSFULLY.WE WILL GET BACK TO YOU SHORTLY.";

            //Hover text colour to green
            document.getElementById("response").style.color = "green";

            // clear the form
            document.getElementById("enquiryForm").reset();
         }
//contact validation
document.getElementsById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    // getting the values
    let fullname = document.getElementById("fullname").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let subject = document.getElementById("subject").value.trim();
    let message = document.getElementById("message").value.trim();

    // clearing previous errors
    document.getElementById("nameError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("phoneError").innerHTML = "";
    document.getElementById("subjectError").innerHTML ="";
    document.getElementById("messageError").innerHTML  = "";
    
    let valid = true;

    // name validation
    if (fullname === "") {
        document.getElementById("nameError").innerHTML = "Full name is required";
        valid = false;
    }
    
    //email validation
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
        document.getElementById("emailError").innerHTML = "Email is required";
        valid = false;
    }
    else if(!emailPattern.test(email)) {
        document.getElementById("emailError").innerHTML = "Invalid email address";
        valid = false;
    }

    //phone number validation (10 digits)
    let phonePattern = /^[0-9]{10}$/;

    if (phone === "") {
        document.getElementById("phoneError").innerHTML = "Phone number is required";
        valid = false;
    }
    else if (!phonePattern.test(phone)) {
        document.getElementById("phoneError").innerHTML = "Phone number must contain 10 digits.";
        valid = false;
    }

    //subject validation
    if (subject === "") {
        document.getElementById("subjectError").innerHTML = "Subject is required";
        valid = false;
    }

    // a success message 
    if (valid) {
        document.getElementById("response").innerHTML = " Your message has been submitted successfully.";

        document.getElementById("contactForm").reset();
    }

   });
// contact controls
 
// name control
function validateName() {
    let fullname = document.getElementById("fullname").value;

    if (fullname.trim() === "") {
        document.getElementById("nameError").innerHTML = "Please enter your full name";
    } else {
        document.getElementById("nameError").innerHTML = "please enter your full name";
    }
}

// Email control
function validateEmail() {
    let email = document.getElementById("email").value;
    let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!pattern.test(email)) {
        document.getElementById("emailErro").innerHTML = "Please enter a valid email.";
    } else {
        document.getElementById("emailError").innerHTML = "";
    }
}

//Phone control
function validatePhone() {
    let phone = document.getElementById("phone").value;
    let pattern = /^[0-9]{10}$/;
if (!pattern.test(phone)) {
    document.getElementById("phoneError").innerHTML = "Phone number must contain 10 digits";
} 
else {
    document.getElementById("phoneError").innerHTML = "";
}
}

//Subject control
function validateSubject() {
    let subject = document.getElementById("subject").value;
    if (subject.trim() === "") {
        document.getElementById("subjectError").innerHTML = "The subject is required";
    } else {
        document.getElementById("subjectError").inner = "";
    }
}
 // message control
function validateMessage() {
    let message = document.getElementById("message").value;
    if (message.length < 10) {
        document.getElementById("messageError").innerHTML = "Message must be at least 10 characters.";
    } else {
        document.getElementById("messageError").innerHTML = "";
    }
} 

//contact process email 
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
     //validation passed
     let fullname = document.getElementById("fullname").value;
     let email = document.getElementById("email").value;

     // creating an email response for the customer
     let emailMesage = Dear ${fullname}, 
                       Thank you for contacting us. We have received your enquiry and will get back to you shortly.
                       Kind Regards,
                       Customer Support Team
    ;
    // email response 
    document.getElementsId("response").innerHTML = "<h3>Email has been sent successfully.</h3>" + "<pre>" + emailMesage + "</pre>";

    // clearing the form 
    document.getElementById("contactForm").reset();
});

//enquiry Type controls
function validateEnquiryType() {
    let enquiryType = document.getElementById("enquiryType").value;

    if (enquiryType === "") {
        document.getElementById("enquiryError").innerHTML = "Please select an enquiry type.";
    } else {
        document.getElementById("enquiryError").innerHTML = "";
    }

    // Order Number control
    function validateOrderNumber() {
        let orderNumber = document.getElementById("orderNumber").value;
        if (orderNumber.trim() === "") {
            document.getElementById("orderError").innerHTML = "Order number is required";
        } else {
            document.getElementById("orderError").innerHTML = "";
        }
    }

    //Email control
    function validateEmail() {
        let email = document.getElementById("email").value;
        let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!pattern.test(email)) {
            document.getElementById("emailError").innerHTML = "Enter a valid email address";
        } else {
            document.getElementById("email.Error").innerHTML = "";
        }
    }

    //message control
    function validateMessage() {
        let message = document.getElementById("message").value;
        if (message.length < 10) {
            document.getElementById("messageError").innerHTML = "Message should at least contain 10 characters";
        } else {
            document.getElementById("messageError").innerHTML = "";
        }
    }

}
