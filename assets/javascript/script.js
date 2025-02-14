var x=document.getElementById("login");
var y=document.getElementById("signin");
var z=document.getElementById("btn");

function signin()
{
    x.style.left="-400px";
    y.style.left="50px";
    z.style.left="110px";
}
function login(){
    x.style.left="50px";
    y.style.left="450px";
    z.style.left="0px";
}

function contact(){
    let name=document.getElementById('name');
    let num=document.getElementById('num');
    let email=document.getElementById('email');
    let text=document.getElementById('text');
    let pattern=/^[a-z0-9._-]+@[a-z]+\.[a-z]{2,4}$/;
     
    if(name.value=='' || name.value==' '){
        alert("Name must be filled out");
        name.focus();
        return false;
    }
    else if(num.value=='' || num.value==' '){
        alert("Phone Number must be filled out");
        num.focus();
        return false;
    }
    else if(email.value==''){
        alert("Please Enter Email...");
        email.focus();
        return false;
        }
    else if(!email.value.match(pattern)){
        alert("Please Enter Valid Email...");
        email.focus();
        return false;
       }
       else if(text.value==''){
        alert("Please Enter Email...");
        text.focus();
        return false;
        }
    else{
        alert("Your Work is Successful.\\n Thanks for Visit Our Websit.");
        return true;
    }
}
var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");
    function opentab(tabname){
        for(tablink of tablinks){
            tablink.classList.remove("active-link");
        }
        for(tabcontent of tabcontents){
            tabcontent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
    }

function bat(){
    let name=document.getElementById('name');
    let email=document.getElementById('email');
    let text=document.getElementById('text');
    let dt=document.getElementById('dt');
    let pattern=/^[a-z0-9._-]+@[a-z]+\.[a-z]{2,4}$/;
     
    if(name.value=='' || name.value==' '){
        alert("Name must be filled out");
        name.focus();
        return false;
    }
    else if(email.value==''){
        alert("Please Enter Email...");
        email.focus();
        return false;
        }
    
    else if(!email.value.match(pattern)){
        alert("Please Enter Valid Email...");
        email.focus();
        return false;
       }
    else if(dt.value==''){
        alert("Please Enter Date & Time...");
        dt.focus();
        return false;
        }
    else{
        alert("Your Booking is Successful.\\n Thanks for Book a Table.");
        return true;
    }
}

function online(){
    let name=document.getElementById('oname');
    let num=document.getElementById('num');
    let email=document.getElementById('oemail');
    let text=document.getElementById('text');
    let iname=document.getElementById('iname');
    let order=document.getElementById('order');
    let pattern=/^[a-z0-9._-]+@[a-z]+\.[a-z]{2,4}$/;
     
    if(name.value=='' || name.value==' '){
        alert("Name must be filled out");
        name.focus();
        return false;
    }
    else if(text.value==''){
        alert("Please Enter your Full Adderss...");
        text.focus();
        return false;
        }
    else if(num.value=='' || num.value==' '){
        alert("Phone Number must be filled out");
        num.focus();
        return false;
    }
    else if(email.value==''){
        alert("Please Enter Email...");
        email.focus();
        return false;
        }
    else if(!email.value.match(pattern)){
        alert("Please Enter Valid Email...");
        email.focus();
        return false;
       }
    
    else if(iname.value==''){
        alert("Please Enter the food Name...");
        iname.focus();
        return false;
        }
    else if(order.value==''){
        alert("Please Enter the order list...");
        order.focus();
        return false;
        }
       
    else{
        alert("Your Order is Successful.\n Thanks for Order Our Foods.");
        return true;
    }
}

var x=document.getElementById("login");
var y=document.getElementById("signin");
var z=document.getElementById("btn");

        function signin(){
            x.style.left="-400px";
            y.style.left="50px";
            z.style.left="110px";
        }
        function login(){
            x.style.left="50px";
            y.style.left="450px";
            z.style.left="0px";
        }

function log(){
    let user=document.getElementById('ui');
    let pass=document.getElementById('pass');
     
    if(user.value=='' || user.value==' '){
        alert("Enter your User Id");
        user.focus();
        return false;
    }
    else if(pass.value==''){
        alert("Please Enter your Password");
        pass.focus();
        return false;
        }
    else{
            return true;
        }   
}
function sign(){
    let user=document.getElementById('user');
    let email=document.getElementById('email');
    let pass=document.getElementById('pass');
    let pattern=/^[a-z0-9._-]+@[a-z]+\.[a-z]{2,4}$/;
     
    if(user.value==''){
        alert("Enter your User Id");
        user.focus();
        return false;
    }
    else if(email.value==''){
        alert("Please Enter Email...");
        email.focus();
        return false;
        }
    else if(!email.value.match(pattern)){
        alert("Please Enter Valid Email...");
        email.focus();
        return false;
       }
    else if(pass.value==''){
        alert("Please Enter your Password");
        pass.focus();
        return false;
        }
    else{
            return true;
        }   
}
