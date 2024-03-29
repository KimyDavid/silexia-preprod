import sgMail from '@sendgrid/mail';

/*------------------------------------------------------------------------------------------------------------------------------------------------------*/
/*--------------------------------------------------                        EMAIL                     --------------------------------------------------*/
/*------------------------------------------------------------------------------------------------------------------------------------------------------*/

/* We use the sendgrid API for sending email and generating templates. Accessible from heroku add-ons. */

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

function send_mail(input, callback){    
    
    var email = {
        from: input.from ? input.from : 'Silexia <bonjour@silexia.fr>',
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

    sgMail.send(email, (err) => {
      if (err && err.response) {
        console.log(err.response.body)     
        callback(err)
      } else {
        callback(null, null)
      }
    })
}

function verifAccount(data, callback){
  send_mail({dest:data.email, data:{link:data.link}, template:"d-2bdca13d71c0496a9fb5aabcea91e5b7"}, function(err){
    if(err){
        console.log(err)
    }
    callback(err)
  })
}

function forgotPassword(data, callback){
  send_mail({dest:data.email, data:{link:data.link}, template:"d-a46b10da9bdf43e48d08f4d3cda8898e"}, function(err){
    if(err){
        console.log(err)
    }
    callback(err)
  })
}

function sendEmailContactPartner(data, callback){
  send_mail({dest:process.env.EMAIL_CONTACT, data:data, template:"d-8fc0fd22f2fe4bf2a8e416be4da7f502"}, function(err){
    if(err){
        console.log(err)
    }
    callback(err)
  })
}

function sendEmailContactOffre(data, callback){
  send_mail({dest:process.env.EMAIL_CONTACT, data:data, template:"d-511b9fb25cd04d9db003956219b7df70"}, function(err){
    if(err){
        console.log(err)
    }
    callback(err)
  })
}

function sendEmailContactNewsletter(data, callback){
  send_mail({dest:process.env.EMAIL_CONTACT, data:data, template:"d-8f4de8154be24a0d98b3c022b835dda5"}, function(err){
    if(err){
        console.log(err)
    }
    callback(err)
  })
}

export default { 
  verifAccount, 
  forgotPassword,
  sendEmailContactPartner,
  sendEmailContactOffre,
  sendEmailContactNewsletter
}