//Enquiry form

$(function(){
    $('#send-enquiry-btn').click(function(){
        var name=$('#name').val();
        var company=$('#company').val();
        var email=$('#email').val();
        var contact=$('#contact').val();
        var product=$('#product').val();
        var message=$('#message').val();

        //alert(name+company+email+contact+product+message);
       

        if(name=="")
        {
            $('#name-err').text('Field Cannot be leave blank');
            return false;
        }

        else if(company=="")
        {
            $('#company-err').text('Field Cannot be leave blank');
            return false;
        }

        else if(email=="")
        {
            $('#email-err').text('Field Cannot be leave blank');
            return false;
        }

        else if(contact=="")
        {
            $('#contact-err').text('Field Cannot be leave blank');
            return false;
        }

        else if(product==null)
        {
            $('#product-err').text('Field Cannot be leave blank');
            return false;
        }

        else if(message=="")
        {
            $('#message-err').text('Field Cannot be leave blank');
            return false;
        }

        if(message.length>21845)
        {
            $('#message-err').text('message is too long');
            return false;
        }

            $.ajax({
            type:'post',
            url:'enquiry_action.php',
            data:{name:name,company:company,email:email,contact:contact,product:product,message:message},
            success:function(data)
            {
                if(data==0)
                {
                    $('#email').val("");
                    $('#email-err').text('Please Enter a Valid Email Id');
                    $('#success-msg').text('');
                    return false;
                }

                else
                {
                    $('#email-err').text('');
                    $('input[type=text], textarea').val('');
                    alert('Your Enquiry Succesfully Send!!!');
                    //$('#success-msg').text('Your Enquiry Succesfully Send');

                }
            }
        });

    });
});
