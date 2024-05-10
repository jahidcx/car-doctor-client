import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
// import axios from "axios";
import useAxiosSecure from "../hooks/useAxiosSecure";


const MyBooking = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useContext(AuthContext);
    const [mybookings, setMybookings] = useState([]);

    const url = `/bookings?email=${user?.email}`;

    useEffect(() => {


        // using custom hook 
        axiosSecure.get(url)
        .then(res=>{
            setMybookings(res.data); 
        })


        // axios.get(`http://localhost:5000/bookings?email=${user?.email}`,{withCredentials:true})
        // .then(res=>{
        //     setMybookings(res.data)
        // })


        // fetch(`http://localhost:5000/bookings?email=${user?.email}`)
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //         setMybookings(data);

        //     })
    }, [user?.email])

    const handleDelete = id => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/bookings/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your booking has been deleted.",
                                icon: "success"
                            });
                            const remaining = mybookings.filter(mybooking => mybooking._id !== id);
                            setMybookings(remaining);
                        }
                    })
            }
        });


    }

    const handleUpdateStatus = id => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, update it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/bookings/${id}`, {
                    method: 'PATCH',
                    headers: {
                        'content-title': 'application/json'
                    },
                    body: JSON.stringify({ status: 'confirm' })
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.modifiedCount > 0) {
                            Swal.fire({
                                title: "Updated!",
                                text: "Your booking has been confirmed.",
                                icon: "success"
                            });
                            const remaining = mybookings.filter(mybooking => mybooking._id !== id);

                            const updated = mybookings.find(mybooking => mybooking._id === id);
                            updated.status = 'confirm';

                            const newBookings = [updated, ...remaining];
                            setMybookings(newBookings);

                        }
                    })
            }
        });

    }


    return (
        <div className="my-24 font-inter">
            <h1 className="text-2xl font-bold text-center mb-12">Total Bookings:{mybookings.length}</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th> </th>
                            <th>Service</th>
                            <th>Customer Name</th>
                            <th>Price</th>
                            <th>Date</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row  */}

                        {
                            mybookings.map(booking => <tr key={booking._id}>
                                <th>
                                    <button onClick={() => handleDelete(booking._id)} className="btn btn-sm btn-circle">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                    </button>

                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="rounded w-24 h-24">
                                                <img src={booking.img} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{booking.serviceName}</div>
                                            <div className="text-sm opacity-50">{booking.service}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {booking.customerName}

                                </td>
                                <td>{booking.price}</td>
                                <td>{booking.date}</td>
                                <th>
                                   {
                                    booking.status=== 'confirm'?   <span className="font-bold text-primary">confirmed</span>  :   <button onClick={() => handleUpdateStatus(booking._id)} className="btn btn-ghost bg-[#FF3811] text-white btn-xs">confirm</button>
                                   }
                                </th>
                            </tr>)
                        }
                    </tbody>



                </table>
            </div>
        </div>
    );
};

export default MyBooking;