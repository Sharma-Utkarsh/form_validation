
 /*function validation()
  {
    var x= validate();
	if (x)
	  {
	    document.write("<html><head><title>registered</title></head><body><h1>You have been registered successfully</body></html>");
	  }
  }*/

 function validate()
  { 
     var contact = document.fr.cn.value;
	 var a=contact.length;
		
       if(a>10||a<10)
	 {
	   document.getElementById("divcn").innerHTML=" *Enter a valid phone number";
	 } 
     
     var fname = document.fr.fn.value;
     var lname = document.fr.ln.value;
     var email = document.fr.em.value;
     //var code  = document.fr.cd.value;
     var age   = document.fr.ag.value;
     var pass  = document.fr.pw.value;
     var cpass = document.fr.cpw.value;
	if (fname.length == 0 || lname.length == 0 || email.length == 0 || code.length == 0 || age.length == 0 || pass.length == 0 || cpass.length == 0)
	 {
	   document.getElementById("div1").innerHTML=" *all fields are  compulsory";
	 }
	if(age.toString().length < 14)
         {
	   document.getElementById("divage").innerHTML=" *you are too young";
	 }
	if(age==0)
         {
	   document.getElementById("divage").innerHTML=" *age cannot be 0";
	 }
	/*if(code.toString().length != 6)
         {
	   document.getElementById("divcode").innerHTML=" *code should be of 6 digits";
	 }*/
	if ( pass != cpass)
	 {
	   document.getElementById("divpass").innerHTML=" *passwords do not match";
	 }
	var loc=email.search("@");
        var pos=email.indexOf("@");
	var pos2=email.lastIndexOf("@");
        var pos3=email.indexOf(".",++pos);
	var len= email.length -1;
	var loc2=email.search(" ");
		if(loc==-1 ||  loc==0 || pos3==-1 || pos3==0 || pos3==len || pos2==len || loc2!=-1)
		  {
		   document.getElementById("divemail").innerHTML=" *wrong email _ correct format: john@gmail.com(no spaces allowed)";
		  }
		
	return true;			
  }
 function show()
   {
     document.getElementById("pwi").setAttribute("type","text");
   }
