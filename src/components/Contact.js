import emailjs from "emailjs-com";

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm("service_z4x1kcc", "template_z1sy47v", e.target)
      .then((res) => {
        console.log(res);
      });
  }
  return (
    <div>
      <form
        className="row"
        style={{ margin: "25px 85px 75px 100px" }}
        onSubmit={sendEmail}
      >
        <label>name</label>
        <input type="text" name="name" className="from-control" />

        <label>Email</label>
        <input type="email" name="user_mail" className="form-control" />

        <label>Message</label>
        <textarea name="message" rows="4" className="form-control" />
        <input
          type="submit"
          value="Send"
          className="form-control btn btn-primary"
          style={{ marginTop: "30px" }}
        />
      </form>
    </div>
  );
};
export default Contact;
