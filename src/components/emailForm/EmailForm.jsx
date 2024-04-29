// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { emailForm } from '../../constants';
function ContactForm() {
  const [state, handleSubmit] = useForm("moqgrvgz");
  if (state.succeeded) {
      return <p className='font-palanquin flex items-center'>Gracias por contactar conmigo. En breves me pondré en contacto con usted.</p>;
  }
  return (
      <form onSubmit={handleSubmit} className='flex-col '>
        <div className='flex'>
      <input
        id="email"
        type="email" 
        name="email"
        placeholder="@email.com"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      </div>

    {emailForm.map((emailForm) =>(
      <div className='flex mt-5'>
      <textarea id={emailForm.id} name={emailForm.name} placeholder={emailForm.placeholder} ></textarea>
      <ValidationError prefix={emailForm.prefix} field={emailForm.field} errors={state.errors}></ValidationError>
      </div>
    ))}

      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}
function EmailForm() {
  return (
    <ContactForm />
  );
}
export default EmailForm;
