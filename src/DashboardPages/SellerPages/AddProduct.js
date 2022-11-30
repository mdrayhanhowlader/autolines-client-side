import date from "date-and-time";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../contexts/AuthProvider";
import { toast } from "react-hot-toast";

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

    fetch("https://autolines-server.vercel.app/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged === true) {
          toast.success("product uploaded successfully");
        }
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
              {...register("name", {
                required: "Name is required",
              })}
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
              {...register("image", {
                required: "Image is required",
              })}
              type="file"
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Number</span>
            </label>
            <input
              {...register("number", {
                required: "Number is required",
              })}
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
              {...register("old", {
                required: "Old is required",
              })}
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
              {...register("price", {
                required: "Price is required",
              })}
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
              {...register("resaleprice", {
                required: "Resale Price is required",
              })}
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
              {...register("location", {
                required: "Location is required",
              })}
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
              {...register("categoryname", {
                required: "Category Name is required",
              })}
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
              {...register("categoryid", {
                required: "Category Id is required",
              })}
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
              value="Add Product"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
