<template>
    <div class="page-3" id="contact">
      <div class="contact">
        <p class="contact-h">CONTACT</p>
        <p class="contact-text">Lorem ipsum dolor sit amet consectetur.  Aliquet etiam rhoncus nec ornare amet eu.  Adipiscing sollicitudin id sit tempor dolor cursus vestibulum eu. Aliquet etiam rhoncus nec ornare amet eu.  </p>
        <p class="address">Address</p>
        <p class="contact-text">Lorem ipsum dolor sit amet</p>
      </div>
      <div class="line"><hr class="vertical-line"></div>
      <div class="contact-form">
        <p class="contact-h">CONTACT FORM</p>
        <form id="contactForm">
            <input type="text" id="name" name="name" required placeholder="Name..."><br>
            
            <input type="text" id="phone" name="phone" required placeholder="Number..."><br>
            
            <input type="submit" value="Submit">
        </form>
      </div>
    </div>
  </template>

<script>
    export default {
        mounted() {
            document.getElementById('contactForm').addEventListener('submit', function(event) {
            submitForm(event);
        }); 

            function submitForm(event) {
                event.preventDefault(); // Prevent the default form submission behavior
                const name = document.getElementById('name').value;
                const phone = document.getElementById('phone').value;
                const today = new Date();
                const data = {
                    date: today, // Include the current date
                    name: name,
                    number: phone,
                };

                fetch('https://ready-hagfish-enough.ngrok-free.app/requests/add', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    // Handle the successful response from the server
                    console.log(data);
                    document.getElementById('contactForm').reset();
                })
                .catch(error => {
                    // Handle errors
                    console.error('There was a problem with the fetch operation:', error);
                });
            }
        }
    }
</script>
  
  <style  scoped>
    .page-3 {
        background: #798D90;
        /* background-color: blueviolet; */
        overflow: hidden;
        height: 60vh;
        padding-left: 10%;
        padding-right: 10%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        position: relative;
        font-family: Kadwa;
    }
    .contact{
        width: 50%;
        height: 100%;
        margin:0;
        /* background-color: blueviolet; */
        display: flex;
        flex-flow: column nowrap;
        font-size: 25px;
        color: white;
        text-transform: none;
        font-family: Kadwa;
    }
    
    .contact-form{
        width: 50%;
        height: 100%;
        /* background-color: aqua; */
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        justify-content: center;
        font-size: 25px;
        font-family: Kadwa;
    }

    .contact-h{
        font-size: 40px;
        color: #033B4C;
        font-family: Kadwa;
        margin:0;
    }

    .contact-text{
        width: 85%;
        font-family: Kadwa;
        line-height: 1.5;
        /* margin:0; */
    }
    
    .address{
        color: #033B4C;
        font-family: Kadwa;
        margin:0;
    }
    
    .line{
        height: 80%;
        font-family: Kadwa;
    }
  
  .vertical-line {
    border: none;
    border-left: 2px solid rgb(229, 229, 229);
    background-color: transparent; /* Adjust thickness and color as needed */
    height: 100%; /* Adjust height as needed */
        font-family: Kadwa;
    }
    form {
        display: inline-block;
        margin: 20px;
        padding: 20px;
        /* background-color: #f0f0f0; */
        /* border: 1px solid #ccc; */
        border-radius: 5px;
        width: 70%;
        gap: 30px;
        font-family: Kadwa;
    }

    label {
        display: block;
        margin-bottom: 5px;
        font-family: Kadwa;
    }

    input[type="text"], input[type="tel"] {
    width: 100%;
    padding: 5px;
    margin-bottom: 10px;
    background-color: transparent;
    color:aliceblue;
    border: none;
    border-bottom: 2px solid rgb(229, 229, 229);
    font-size: 25px;
    margin-bottom: 50px;
        font-family: Kadwa;
    }
    ::placeholder {
        color: white; /* Change this to the desired color */
        font-size: 25px;
        font-family: Kadwa;
    }

    input[type="submit"] {
    background-color: #00526B;
    color: white;
    width: 200px;
    height: 50px;
    padding: 5px 10px;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    font-size: 20px;
        font-family: Kadwa;
    }
    input:focus {
        outline: none;
    }

    input[type="submit"]:hover {
        background-color: #0d6d8b;
        font-family: Kadwa;
    }
  </style>