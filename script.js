
    document.getElementById('button').addEventListener("click",function(e){
        e.preventDefault();
        const firstname = document.getElementById("fname").value.trim();
        const lastname = document.getElementById("lname").value.trim();
        const contact = document.getElementById("contact").value.trim();
        const Emailid = document.getElementById("Emailid").value.trim();
        const loc = document.getElementById("loc").value.trim();



        const firstnameerror = document.getElementById("fnameerror");
        if(!/^[A-Za-z]+$/.test(firstname)) {
            firstnameerror.textContent="please fill valid details"
            return;

        }


        const lastnameerror = document.getElementById("lnameerror");
        if(!/^[A-Za-z]+$/.test(lastname)) {
            lastnameerror.textContent="please fill valid details"
            return;

        }

        const contacterror = document.getElementById("conerror");
        if(!/^[0-9]+$/.test(contact)) {
            contacterror.textContent="please fill valid details"
            return;

        }

        const emailerror = document.getElementById("emailerror");
        if(!/^[A-Za-z.@]+$/.test(Emailid)) {
            emailerror.textContent="please fill valid details"
            return;

        }

    });


