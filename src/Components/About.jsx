import person from '../../../car-doctor-resources-main/assets/images/about_us/person.jpg'
import parts from '../../../car-doctor-resources-main/assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero min-h-screen mb-[130px]">
            <div className="hero-content flex-col lg:flex-row ">
                <div className=' w-1/2 relative '>
                    <img src={person} className="w-3/4 rounded-lg shadow-2xl h-[373px] " />
                    <img src={parts} className="w-1/2 rounded-lg shadow-2xl absolute right-0 top-1/2 h-[300px] border-8 border-white" />
                </div>
                <div className='w-1/2 space-y-3'>
                    <h2 className='text-lg text-[#FF3811] font-bold'>About Us</h2>
                    <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>

                    <p className="py-6">The majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    <button className="btn bg-[#FF3811] text-white ">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;