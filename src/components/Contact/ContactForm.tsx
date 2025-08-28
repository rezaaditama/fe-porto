import { Input, TextArea } from '../Form';
import Button from '../Button';
import type { FormEventHandler, FormHTMLAttributes } from 'react';

interface ContactFormProps extends FormHTMLAttributes<HTMLFormElement> {
  onSubmit: FormEventHandler<HTMLFormElement>;
}

const ContactForm = ({ onSubmit, ...props }: ContactFormProps) => {
  return (
    <div className='rounded-md border-1 p-5 h-fit border-gray-200 shadow-md animation-card dark:border-primary/20'>
      <h2 className='text-center text-xl font-bold text-primary md:text-2xl'>
        Send Me a Message
      </h2>
      <form onSubmit={onSubmit} className='space-y-2 pt-5' {...props}>
        <Input
          label='Full Name'
          id='username'
          placeholder='Masukkan Nama Lengkap'
          required
        />
        <Input
          label='Email'
          id='email'
          placeholder='Masukkan Email'
          type='email'
          required
        />
        <Input
          label='Subject'
          id='subject'
          placeholder='Masukkan Subject atau Topik'
          required
        />
        <TextArea
          name='message'
          id='message'
          placeholder='Tulis Pesan...'
          label='Message'
          required
        />
        <Button variant='primary' className='w-full' type='submit'>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
