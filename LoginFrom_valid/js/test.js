

var attempt=3;


 function login_sucess(){



    var username=document.getElementById("email_class").value;
    var password=document.getElementById("pass_class").value;

    if(username == 0 || password==0){

       alert('Check the input fields');   
      
    }
    
    
    else if(username == "admin" && password == "1234"){
                  
       alert('Login sucessful');
       window.location = "sucess.html";
     }

     else{


      attempt--;
      alert('Not matched. Your attempt left ' +attempt+ 'times.');
      
      if(attempt <=0){

          document.getElementById("email_class").disabled =true;
          document.getElementById("pass_class").disabled =true;
          document.getElementById("login").disabled=true;         
      }
    }

  

 }
