import { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";


const Services = () => {

    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className="font-inter mb-[130px] ">
            <div className="text-center space-y-5 mb-12 ">
                <h3 className="text-lg font-bold text-[#FF3811] ">Service</h3>
                <h1 className="text-5xl font-bold">Our Service Area</h1>
                <p >The majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    services.map(service => <div key={service._id} className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-6 pt-6">
                            <img src={service.img} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body ">
                            <h2 className="card-title text-[24px] font-bold ">{service.title}</h2>
                            <div className="flex text-[#FF3811] ">
                                <p className="text-[#FF3811] text-lg font-semibold">Price:${service.price} </p>
                               <Link to={`/checkout/${service._id}`}> <button><FaArrowRightLong /></button> </Link>
                            </div>

                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Services;