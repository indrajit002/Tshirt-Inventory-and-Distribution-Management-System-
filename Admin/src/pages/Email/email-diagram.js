import React, { useState } from "react";
import { FormGroup, Label, Input, Button } from "reactstrap";

const EmailForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    subject: "",
    message: ""
  });

  console.log(formData)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.tar)
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="from">From:</Label>
        <Input
          type="email"
          name="from"
          id="from"
          value={formData.from}
          onChange={handleChange}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label for="to">To:</Label>
        <Input
          type="email"
          name="to"
          id="to"
          value={formData.to}
          onChange={handleChange}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label for="subject">Subject:</Label>
        <Input
          type="text"
          name="subject"
          id="subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label for="message">Message:</Label>
        <Input
          type="textarea"
          name="message"
          id="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </FormGroup>
      <Button type="submit" color="primary">Send Email</Button>
    </form>
  );
};

export default EmailForm;
