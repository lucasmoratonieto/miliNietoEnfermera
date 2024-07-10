// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { emailForm, phone } from '../../constants';
function ContactForm() {
  const [state, handleSubmit] = useForm("moqgrvgz");
  if (state.succeeded) {
      return <p className='font-palanquin flex items-center'>Gracias por contactar conmigo. En breves me pondré en contacto con usted.</p>;
  }
  return (
      <form onSubmit={handleSubmit} className='flex-col '>
      <div className='flex border rounded-xl p-2'>
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
      <div className='flex mt-5 border rounded-xl p-2'>
        <textarea id={emailForm.id} name={emailForm.name} placeholder={emailForm.placeholder}  rows="4" cols="50" ></textarea>
        <ValidationError prefix={emailForm.prefix} field={emailForm.field} errors={state.errors}></ValidationError>
      </div>
    ))}

  {phone.map((phonearea) =>(
      <div className='flex mt-5 border rounded-xl p-2'>
        <textarea id={phonearea.id} name={phonearea.name} placeholder={phonearea.placeholder}  rows="" cols="50" className=' h-7' ></textarea>
        <ValidationError prefix={phonearea.prefix} field={phonearea.field} errors={state.errors}></ValidationError>
      </div>
    ))}

      <button type="submit" disabled={state.submitting} className=" p-0 mt-5 relative inline-flex items-center justify-center  mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-[#ffe2e9]  group-hover:from-green-400 group-hover:to-blue-600 hover:text-black dark:text-black focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
      <span class="relative px-6 py-2.5 transition-all ease-in duration-75 bg-[#e8eff1] dark:bg-[#e8eff1] rounded-md group-hover:bg-opacity-0">
        Submit
        </span>
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
