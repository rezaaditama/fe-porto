import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className='grid grid-cols-3 min-h-screen p-5 bg-black text-white'>
      <div className=''>
        <h1 className='text-2xl font-bold uppercase'>Reza Aditama</h1>
        <p className='text-justify leading-tight tracking-wide text-base'>
          Saya seorang <span className='font-bold'>Frontend Developer</span>
          yang fokus pada pengembangan UI dengan React + Vite dan Tailwind CSS.
          Saya senang membangun antarmuka yang cepat, responsif dan efisien
          menggunakan ekosistem JavaScript modern.
        </p>
      </div>
      <div className='p-5'>
        <h1>Quick Links</h1>
        <div className='flex flex-col space-y-2'>
          <Link to='home' spy={true} smooth={true} offset={-70} duration={500}>
            Home
          </Link>
          <Link to='about' smooth={true} offset={-70} duration={500}>
            About
          </Link>
          <Link
            to='project'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Project
          </Link>
          <Link
            to='contact'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            contact
          </Link>
        </div>
      </div>
      <div className=''>
        <h3 className='text-lg font-bold mb-3'>Follow Us</h3>
        <div className='flex flex-col space-y-2 text-sm px-1'>
          <Link to='#' className='text-red-400'>
            Gmail
          </Link>
          <Link to='#' className='text-blue-400'>
            Facebook
          </Link>
          <Link to='#' className='text-blue-300'>
            Twitter
          </Link>
          <Link to='#' className='text-pink-400'>
            Instagram
          </Link>
        </div>
      </div>
      <div className='text-center text-sm text-gray-400 mt-10 border-gray-800 border-t'>
        <p className='py-2'>
          © 2025 Kelurahan Sukaharja - Cijeruk, Kabupaten Bogor. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

// import { Link } from 'react-router-dom';

// const Footer = () => {
//   return (
//     <footer className='bg-black text-white p-8 mt-10'>
//       <div className='max-w-7xl mx-auto px-4 grid grid-cols-4 gap-8'>
//         <section className='space-y-3'>
//           <h2 className='text-xl font-bold'>Kecamatan Cijeruk</h2>
//           <p className='text-sm leading-relaxed text-gray-300'>
//             Kelurahan Sukaharja, Kecamatan Cijeruk, Kabupaten Bogor, Jawa Barat,
//             Indonesia, Kode Pos 16787.
//           </p>
//         </section>
//         <section>
//           <h3 className='text-lg font-semibold mb-3'>Quick Links</h3>
//           <div className='flex flex-col space-y-2 text-sm'>
//             <a href='#header' className='hover:text-gray-400'>
//               Tentang Kami
//             </a>
//             <a href='#potensiBungaSection' className='hover:text-gray-400'>
//               Potensi Bunga
//             </a>
//             <a href='#potensiWisataSection' className='hover:text-gray-400'>
//               Potensi Wisata
//             </a>
//             <a href='#potensiPetaniSection' className='hover:text-gray-400'>
//               Petani Lokal
//             </a>
//             <a href='#' className='hover:text-gray-400'>
//               Laporan Pengaduan
//             </a>
//           </div>
//         </section>
//         <section>
//           <h3 className='text-lg font-bold mb-3'>Follow Us</h3>
//           <div className='flex flex-col space-y-2 text-sm px-1'>
//             <Link href='#' className='text-red-400'>
//               Gmail
//             </Link>
//             <Link href='#' className='text-blue-400'>
//               Facebook
//             </Link>
//             <Link href='#' className='text-blue-300'>
//               Twitter
//             </Link>
//             <Link href='#' className='text-pink-400'>
//               Instagram
//             </Link>
//           </div>
//         </section>
//         <section>
//           <h1 className='text-xl font-bold mb-3'>Location</h1>
//           <p className='text-sm'>Kunjungi Kami Di Lokasi Berikut :</p>
//           <iframe
//             src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31702.308765995487!2d106.74700123943653!3d-6.673095947166133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ce545569f7b1%3A0x4ff2a1ec144b51f!2sSukaharja%2C%20Kec.%20Cijeruk%2C%20Kabupaten%20Bogor%2C%20Jawa%20Barat!5e0!3m2!1sid!2sid!4v1750772345702!5m2!1sid!2sid'
//             className='w-full h-40 mt-2 rounded-md'
//             loading='lazy'
//           ></iframe>
//         </section>
//       </div>
//       <div className='text-center text-sm text-gray-400 mt-10 border-gray-800 border-t'>
//         <p className='py-2'>
//           © 2025 Kelurahan Sukaharja - Cijeruk, Kabupaten Bogor. All rights
//           reserved.
//         </p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
