import Card from '../../components/Card';

const ProjectSection = () => {
  return (
    <div id='project' className='min-h-screen w-full px-5 bg-slate-100 py-10'>
      <div className='space-y-3'>
        <h1 className='text-3xl font-bold uppercase text-center text-blue-800'>
          Featured Projects
        </h1>
        <p className='text-center text-gray-500 text-base'>
          Berikut beberapa proyek yang saya kerjakan dalam membangun aplikasi
          dan website yang fungsional, responsif dan menarik secara visual.
        </p>
      </div>
      <div className='grid md:grid-cols-3 gap-5 pt-10'>
        <Card />
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </div>
  );
};

export default ProjectSection;
