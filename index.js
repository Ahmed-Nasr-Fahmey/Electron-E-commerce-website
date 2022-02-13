
function openpg(){
    var a = document.getElementById("username").value;
    var b = document.getElementById("password").value;
     if((a=="Aya Mohamed"||a=="mohamed"||a=="eman"||a=="aya.h") && ( b=="123"))
        {
         
         window.top.close();
         window.open("home.html")
         
        }
        else if ((a=="Aya Mohamed"||a=="mohamed"||a=="eman"||a=="aya.h") &&( b!="123"))
        {
            alert("\" " + a + " \" "  +"You Have Entered Wrong Password")
        }
        else if ((a=="Ahmed Nasr") &&( b=="Ahmed123"))
        {
             window.top.close();
             window.open("admin.html")
        }
        else if ((a=="Ahmed Nasr") &&( b !="Ahmed123"))
        {
            alert("\" " + a + " \" "  +"You Have Entered Wrong Password")
        }
        else  
        {
        alert("\" " + a + " \" "  + " You Don't Have an Account ... \n Regist First. "  )
        window.top.close();
        window.open("register.html")
        }
 }