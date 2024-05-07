import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";


const Checkout = () => {

    const { user } = useContext(AuthContext)

    const service = useLoaderData();
    const { title, service_id, price, img } = service;

    const handleCheckout = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const date = form.date.value;
        const phone = form.phone.value;
        const email = user?.email;
        const message = form.message.value;

        const order = {
            img,
            customerName: name,
            date,
            phone,
            email,
            service: service_id,
            serviceName: title,
            price: price,
            message
        }

        console.log(order);

        fetch('http://localhost:5000/bookings', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    Swal.fire({
                        position: "top",
                        icon: "success",
                        title: "Your booking have been created",
                        showConfirmButton: false,
                        timer: 2000
                      });
                }
            })
    }

    return (
        <section className="p-6 font-inter dark:bg-gray-100 bg-[#F3F3F3] dark:text-gray-900 my-24">
            <form onSubmit={handleCheckout} className="container flex flex-col mx-auto space-y-12">

                <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50 ">

                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3 mx-auto">
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="username" className="text-sm"> Name</label>
                            <input id="username" type="text" name="name" placeholder=" name" className="w-full rounded-md focus:ring py-2 px-6 focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" required />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="website" className="text-sm">Date</label>
                            <input id="website" type="date" name="date" placeholder="Last name" className="w-full rounded-md focus:ring py-2 px-6 focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" required />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="website" className="text-sm">phone</label>
                            <input id="website" type="number" name="phone" placeholder="phone" className="w-full rounded-md focus:ring py-2 px-6 focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" required />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="website" className="text-sm">Email</label>
                            <input id="website" type="email" name="email" defaultValue={user?.email} placeholder="Email" className="w-full rounded-md focus:ring py-2 px-6 focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" required />
                        </div>
                        <div className="col-span-full">
                            <label htmlFor="bio" className="text-sm">Message</label>
                            <textarea id="bio" placeholder="your message" name="message" className="w-full rounded-md focus:ring focus:ring-opacity-75 h-48 p-3 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 " required></textarea>
                        </div>
                        <div className="col-span-full">
                            <div className="flex items-center space-x-2">
                                <input type="submit" className="px-4 py-2 border rounded-md dark:border-gray-800 btn btn-block bg-[#FF3811] text-white font-bold " value="order confirm" />
                            </div>
                        </div>
                    </div>
                </fieldset>
            </form>
        </section>
    );
};

export default Checkout;