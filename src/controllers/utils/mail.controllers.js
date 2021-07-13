import sgMail from '@sendgrid/mail';

/*------------------------------------------------------------------------------------------------------------------------------------------------------*/
/*--------------------------------------------------                        EMAIL                     --------------------------------------------------*/
/*------------------------------------------------------------------------------------------------------------------------------------------------------*/

/* We use the sendgrid API for sending email and generating templates. Accessible from heroku add-ons. */

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

function send_mail(input, callback){    
    
    var email = {
        from: input.from ? input.from : 'Silexia <jean-louis@taf.life>',
        to: input.dest
    };

    if(input.subject){
        email.subject = input.subject
    }

    if(input.template){
        email.templateId = input.template
    }

    if(input.data){
      email.dynamic_template_data = input.data
    }

    sgMail.send(email, (err, response) => {
      if (err) {
        console.log(err)
        if(err.response){
            console.log(err.response.body) 
        }       
        callback(null, null)
      } else {
        callback(null, null)
      }
    })
}

function verifAccount(data, callback){
  send_mail({dest:data.email, data:{link:data.link}, template:"d-2bdca13d71c0496a9fb5aabcea91e5b7"}, function(err, results){
    if(err){
        console.log(err)
    }
    callback(null, null)
  })
}

function forgotPassword(data, callback){
  send_mail({dest:data.email, data:{link:data.link}, template:"d-a46b10da9bdf43e48d08f4d3cda8898e"}, function(err, results){
    if(err){
        console.log(err)
    }
    callback(null, null)
  })
}

export default { verifAccount, forgotPassword }