
 function validation()
 {
    
	var contactname=document.enq.name.value;
	var name_exp=/^[A-Za-z\s]+$/;
	if(contactname=='')
	{
		alert("Name Field Should Not Be Empty!");
		document.enq.name.focus();
		return false;
	}
	else if(!contactname.match(name_exp))
	{
		alert("Invalid Name field!");
		document.enq.name.focus();
		return false;
	}
	
	var email=document.enq.email.value;
	//var email_exp=/^[A-Za-z0-9\.-_\$]+@[A-Za-z]+\.[a-z]{2,4}$/;
	var email_exp=/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
	if(email=='')
	{
		alert("Please Enter Email-Id!");
		document.enq.email.focus();
		return false;
	}
	else if(!email.match(email_exp))
	{
		alert("Invalid Email ID !");
		document.enq.email.focus();
		return false;
	}
	
	
	var message=document.enq.message.value;
	if(message=='')
	{
		alert("Query Field Should Not Be Empty!");
		document.enq.message.focus();
		return false;
	}
    return true;
 }
