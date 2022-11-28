import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import { useForm } from "react-hook-form";
import date from "date-and-time";

const AddProduct = () => {
  const { user } = useContext(AuthContext);
  const seller = user?.displayName;
  const ad = "no";
  const email = user?.email;
  console.log(ad, seller, email);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const imageHostKey = process.env.REACT_APP_imgbb_key;
  const handleAddProduct = async (data) => {
    const now = new Date();
    const posted_time = date.format(now, "YYYY/MM/DD HH:mm:ss");

    const category_name = data.categoryname;
    const category_id = data.categoryid;
    const name = data.name;
    const price = data.price;
    const resale_price = data.resaleprice;
    const location = data.location;
    const old = data.old;
    const number = data.number;

    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;

    const res = await fetch(url, {
      method: "POST",
      body: formData,
    });
    const pic = await res.json();

    const img = pic.data.url;

    const seller_img = user?.photoURL;

    console.log(
      category_name,
      category_id,
      name,
      img,
      price,
      resale_price,
      seller,
      location,
      old,
      email,
      ad,
      number,
      seller_img
    );
    const product = {
      category_name,
      category_id,
      name,
      img,
      price,
      resale_price,
      seller,
      location,
      old,
      email,
      ad,
      number,
      seller_img,
      posted_time,
    };

    fetch("http://localhost:5000/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        reset();
      });
  };
  return (
    <div>
      <h2 className="text-3xl text-semibold text-primary">Add New Product</h2>
      <div>
        <form
          onSubmit={handleSubmit(handleAddProduct)}
          className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-2 mt-10"
        >
          <div className="form-control w-full max-w-xs">
            <label className="label1">
              <span className="label1-text">Product Name</span>
            </label>
            <input
              {...register("name")}
              placeholder="Enter Product Name"
              type="text"
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label2">
              <span className="label2-text">Image</span>
            </label>
            <input
              {...register("image")}
              type="file"
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Number</span>
            </label>
            <input
              {...register("number")}
              placeholder="Number"
              type="text"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Uses</span>
            </label>
            <input
              {...register("old")}
              placeholder="Uses Time"
              type="text"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              {...register("price")}
              placeholder="Price"
              type="text"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Resale Price</span>
            </label>
            <input
              {...register("resaleprice")}
              placeholder="Resale Price"
              type="text"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Location</span>
            </label>
            <input
              {...register("location")}
              placeholder="Enter Location"
              type="text"
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Category Name</span>
            </label>
            <select
              {...register("categoryname")}
              className="select select-bordered w-full max-w-xs"
            >
              <option selected>SUV</option>
              <option>SEDAN</option>
              <option>VAN</option>
            </select>
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Category ID</span>
            </label>
            <select
              {...register("categoryid")}
              className="select select-bordered w-full max-w-xs"
            >
              <option value="01" selected>
                SUV
              </option>
              <option value="02">SEDAN</option>
              <option value="03">VAN</option>
            </select>
          </div>

          <div className="w-full max-w-xs">
            <input
              type="submit"
              className="btn btn-outline w-full max-w-xs mt-6"
              value="Sign Up"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
