import { Input, TextArea } from '../Form';
import Button from '../Button';
import type { FormEventHandler, FormHTMLAttributes } from 'react';

interface ContactFormProps extends FormHTMLAttributes<HTMLFormElement> {
  onSubmit: FormEventHandler<HTMLFormElement>;
}

const ContactForm = ({ onSubmit, ...props }: ContactFormProps) => {
  return (
    <div className='bg-surface rounded-md border-1 p-5 h-fit border-gray-200 shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 hover:bg-slate-50 dark:border-primary/20 dark:hover:bg-slate-700/10'>
      <h2 className='text-center text-2xl font-bold text-primary'>
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
