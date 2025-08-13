import Card from '../../components/Card';
import TechBadge from '../../components/Wrapper/TechBadge';

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
        {/* <Card>
          <Card.Header path='/assets/images/project-1.png' />
          <Card.Body
            description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, temporibus
        ullam accusamus corrupti vel sapiente reiciendis praesentium saepe
        suscipit minus? Lorem, ipsum dolor sit amet consectetur adipisicing
        elit. Aliquam facere magnam ducimus iste blanditiis dolor asperiores
        aspernatur provident exercitationem rem inventore repellat laudantium
        accusantium beatae velit voluptatem, mollitia nobis officia! Perferendis
        eos ipsam temporibus quam nisi delectus itaque eum voluptatum cum! Animi
        sunt culpa sapiente odio exercitationem iure, quidem, architecto
        voluptatum ab consequatur est beatae ratione dolorum rem quis
        accusantium at quam numquam accusamus tempora suscipit modi saepe!
        Minima doloribus quisquam quidem molestias vitae. Accusamus sed quam
        exercitationem voluptatem molestias ratione neque iure quaerat cumque
        quas ullam enim delectus cum, numquam reiciendis inventore consectetur
        tenetur consequatur eos rem perferendis ea.`}
          />
          <Card.Footer url={'https://www.github.com/rezaaditama'} />
        </Card> */}
        <Card>
          <Card.Header
            path='/assets/images/project-1.png'
            title={'Project Website Sukaharja'}
          >
            <TechBadge tech='React Js' />
          </Card.Header>
          <Card.Body
            description={`Lorem ipsum exercitationem rem inventore repellat laudantium
        accusantium beatae velit voluptatem, mollitia nobis officia! Perferendis
        eos ipsam temporibus quam nisi delectus itaque eum voluptatum cum! Animi
        sunt culpa sapiente odio exercitationem iure, quidem, architecto
        voluptatum ab consequatur est beatae ratione dolorum rem quis
        accusantium at quam numquam accusamus tempora suscipit modi saepe!
        Minima doloribus quisquam quidem molestias vitae. Accusamus sed quam
        exercitationem voluptatem molestias ratione neque iure quaerat cumque
        quas ullam enim delectus cum, numquam reiciendis inventore consectetur
        tenetur consequatur eos rem perferendis ea`}
          />
          <Card.Footer url={'https://github.com/rezaaditama'} />
        </Card>
      </div>
    </div>
  );
};

export default ProjectSection;
