import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import { toast } from "react-hot-toast";

const BookingModal = ({ modal }) => {
  const { user } = useContext(AuthContext);
  const { name, resale_price } = modal;

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const item = form.item.value;
    const price = form.price.value;
    const phone = form.phone.value;
    const location = form.location.value;
    // console.log(name, email, item, price, phone, location);

    const booking = {
      name,
      email,
      item,
      price,
      phone,
      location,
    };

    fetch("https://autolines-server.vercel.app/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged === true) {
          toast.success("Product has been booked successfully");
        }
        form.reset();
      });
  };

  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <label htmlFor="booking-modal" className="modal cursor-pointer mx-auto">
        <label className="modal-box relative" htmlFor="">
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-3 mt-10"
          >
            <input
              type="text"
              disabled
              className="input w-full input-bordered"
              name="name"
              defaultValue={user?.displayName}
            />
            <input
              name="email"
              type="email"
              disabled
              defaultValue={user?.email}
              className="input w-full input-bordered"
            />
            <input
              name="item"
              type="text"
              disabled
              className="input w-full input-bordered"
              defaultValue={name}
            />
            <input
              name="price"
              type="text"
              defaultValue={resale_price}
              disabled
              className="input w-full input-bordered"
            />
            <input
              name="phone"
              type="text"
              placeholder="Phone Number"
              className="input w-full input-bordered"
              required
            />
            <input
              name="location"
              type="text"
              placeholder="Location"
              className="input w-full input-bordered"
              required
            />
            <br />
            <input
              className="btn btn-accent w-full"
              type="submit"
              value="Book Now"
            />
          </form>
        </label>
      </label>
    </div>
  );
};

export default BookingModal;
