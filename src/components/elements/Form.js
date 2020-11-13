import React from 'react';
import emailjs from 'emailjs-com';
import '../layout/style.css'

export default function ContactUs() {

 

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_ycbpNc5t', e.target, 'user_Bi87o6hsA50YKrKCtnuDy')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }

  return (
    <>
    <div className="container">
    <form onSubmit={sendEmail}>
      <div className="form-group">
        <div className="label-container">
            <label className="contact-label">Имя</label></div>
        <input type="text" name="from_name" className="form-control"/></div>

      <div className="form-group">
      <div className="label-container">
      <label className="contact-label">Телефон</label></div>
      <input type="text" name="message_html" className="form-control" /></div>

      <div className="form-group">
      <div className="label-container">
      <label className="contact-label">Email</label></div>
      <input type="email" name="x" className="form-control"/></div>
      
      <div className="form-group">
      <div className="label-container">
      <label className="contact-label">Сообщение</label></div>
      <textarea name="message" style={{width:'100%'}} className="form-control"/>
      </div>
      <input style={{margin:'5px auto'}} type="submit" className="btn-send" value="Отправить"/>
    </form>
    </div>
</>
  );
}