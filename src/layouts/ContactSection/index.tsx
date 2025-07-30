import Button from '../../components/Button';

const ContactSection = () => {
  return (
    <div id='contact' className='min-h-screen space-y-5 px-10 w-full py-7'>
      <h1 className=' font-extrabold text-3xl text-center'>Contact Us</h1>
      <div className='grid grid-cols-2 gap-5'>
        <div className='border-1 p-5 space-y-2 rounded-xl'>
          <label htmlFor='fullname' className='font-bold'>
            Nama Lengkap
          </label>
          <input
            id='fullname'
            type='text'
            className='w-full rounded border-1 p-2 border-gray-300'
          />
          <label htmlFor='email' className='font-bold'>
            Email
          </label>
          <input
            id='email'
            type='text'
            className='w-full rounded border-1 p-2 border-gray-300'
          />
          <label htmlFor='deskripsi' className='font-bold'>
            Deskripsi
          </label>
          <textarea
            id='deskripsi'
            className='w-full rounded border-1 p-2 border-gray-300'
            rows={4}
          />
        </div>
        <div className='border-1'>
          <h1>Lihat CV</h1>
          <Button variant='primary' type='button'>
            Download
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
