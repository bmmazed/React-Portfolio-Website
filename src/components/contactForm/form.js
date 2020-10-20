import React from 'react';
import emailjs from 'emailjs-com';
import '../../components/contactForm/form.css'

function Contactform() {
   function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_j99agmd', e.target, 'user_K4uClubUxuFEMiPJBzyls')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
       e.target.reset()
  }

    return (
        <div className="container">
            <form onSubmit={sendEmail}>
                
                    <h3 className="contact">Contact Me</h3>
                <div className="row pt-5 mx-auto">
                    <div className="col-8 form-group pt-2 mx-auto">
                        <input type="text" className="form-control" placeholder="Name"  name="name" />
                    </div>
                    <div className="col-8 form-group pt-2 mx-auto">
                        <input type="email" className="form-control" placeholder="Email"  name="email" />
                    </div>
                    <div className="col-8 form-group pt-2 mx-auto">
                        <input type="text" className="form-control" placeholder="Subject"  name="subject" />
                    </div>
                    <div className="col-8 form-group pt-2 mx-auto">
                        <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your Message"  name="message" />
                    </div>
                    <div className="col-8 form-group pt-2 mx-auto">
                        <input type="submit" className="btn btn-info" value="Send Message" />
                    </div>

                </div>
                
            </form>
      </div>
    
  );
}

export default Contactform