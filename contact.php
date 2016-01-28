<h1>Contact Us</h1>
   <h3 style="color:#FF6633;"><?php echo $_GET[msg];?></h3>
   <hr>
		                                                
<form name="enq" method="post" action="email/" onsubmit="return validation();">
<fieldset>
    
<input type="text" name="name" id="name" value=""  class="input-block-level" placeholder="Name" />
<input type="text" name="email" id="email" value="" class="input-block-level" placeholder="Email" />
<textarea rows="11" name="message" id="message" class="input-block-level" placeholder="Comments"></textarea>
   
<div class="actions">
<input type="submit" value="Send Your Message" name="submit" id="submitButton" class="btn btn-info pull-right" title="Click here to submit your message!" />
</div>
	
</fieldset>
</form> 
        </div>