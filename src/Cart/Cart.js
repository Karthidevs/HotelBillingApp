import { Close, InfoOutlined } from "@mui/icons-material";
import React, { useContext, useState } from "react";
import { Context } from "../context/Context";
import { Button, CircularProgress } from "@mui/material";
import Model from "react-modal";

export const Cart = () => {
  const [state, dispatch] = useContext(Context);
  const [isOpen, setOpen] = useState(false);
  const [customerDetails, setcustomerDetails] = useState();
  const [customername, setcustomername] = useState();
  const [customeremail, setcustomeremail] = useState();
  const [customermobilenumber, setcustomermobilenumber] = useState();
  const [ordersuccess, setordersuccess] = useState(false);
  const [loading, setloading] = useState(false);
  const submitHandler = (e) => {
    // form submit handler
    e.preventDefault();
    setcustomerDetails({ customername, customermobilenumber, customeremail });
    setordersuccess(true);
    setcustomername("");
    setcustomermobilenumber("");
    setcustomeremail("");
    setloading(true);
    // reload move to home page
    setTimeout(() => {
      window.location.reload();
      setloading(false);
    }, 3000);
  };
  // handler for model
  const modelHandler = () => {
    setOpen(true);
  };
  // handler for model
  const modelCloseHandler = () => {
    setOpen(false);
  };

  return (
    <>
      {state.cartopen && (
        <aside className=" z-50 mt-2 w-[450px] ml-5 shadow-lg p-5 border-gray-700 border-1 overflow-hidden h-[600px]">
          <div className=" space-y-4 text-gray-500 text-sm">
            <h3 className="font-semibold">Bill Details :</h3>
            <div className="flex justify-between mr-12">
              <p>Item Total {state.items.length}</p>
              <span>&#x20B9;{state.totalAmount}</span>
            </div>

            <div className="flex justify-between mr-12">
              <p>
                GST and Restaurant Charges
                <span className="ml-1 cursor-pointer">
                  <InfoOutlined fontSize="small" />
                </span>
              </p>
              <span>&#x20B9;{state.gstAmount}</span>
            </div>
            <div className="h-[1.5px] w-64 bg-gray-500 "></div>
            <div className="flex justify-between mr-12">
              <h2 className="font-bold">To Pay</h2>
              <span>&#x20B9;{state.totalToPay}</span>
            </div>
          </div>
          <div className="mt-7 text-center">
            <Button onClick={modelHandler} variant="contained">
              Proceed To Pay
            </Button>{" "}
          </div>
          <div className="mt-16 overflow-scroll h-[400px] ">
            <h5 className="font-bold">List of orders :</h5>
            {state.items.map((item) => (
              <span
                className="flex  mr-5 mt-4 justify-between gap-1"
                key={item.name}
              >
                <p className="w-[130px]">{item.name}</p>
                <span className="">
                  {item.quantity}
                  <span>x</span>{" "}
                </span>
                <span>
                  &#x20B9;
                  {item.price}
                </span>
              </span>
            ))}
          </div>
        </aside>
      )}

      <Model
        className={` ml-auto mr-auto mt-20  w-[700px] h-[600px] z-50    ${
          loading ? "bg--white" : "bg-amber-700"
        } `}
        ariaHideApp={false}
        isOpen={isOpen}
        onAfterClose={modelCloseHandler}
      >
        {loading ? (
          <div className=" p-7 w-full">
            <span className="  ml-[48%]">
              {" "}
              <CircularProgress />
            </span>
            <h1 className="ml-[295px] text-blue-500">Processing....</h1>
          </div>
        ) : (
          <>
            <div className="w-full h-[300px] bg-white overflow-y-scroll">
              <Button onClick={modelCloseHandler}>
                <Close />
              </Button>
              <ul>
                {state.items.map((item) => (
                  <li
                    key={item.id}
                    className="flex justify-around border-b-2 p-1 "
                  >
                    <span className="w-[200px]">{item.name}</span>
                    <span>
                      {item.quantity} <span>x</span>
                    </span>
                    <span>&#x20B9;{item.price}</span>
                  </li>
                ))}
              </ul>
            </div>
            <form
              onSubmit={submitHandler}
              className=" w-[500px] h-[350px] ml-auto mr-auto p-4 text-center"
            >
              <div className="mt-2">
                <label className="block text-white text-sm font-bold mb-2 ">
                  CustomerName
                </label>
                <input
                  required
                  onChange={(e) => setcustomername(e.target.value)}
                  className="shadow appearance-none border rounded w-[80%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                />
              </div>
              <div className="mt-2">
                <label className="block text-white text-sm font-bold mb-2">
                  Mobile No:
                </label>
                <input
                  required
                  onChange={(e) => setcustomermobilenumber(e.target.value)}
                  className="shadow appearance-none border rounded w-[80%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="numbe"
                />
              </div>
              <div className="mt-2">
                <label className="block text-white text-sm font-bold mb-2">
                  Email id
                </label>
                <input
                  required
                  onChange={(e) => setcustomeremail(e.target.value)}
                  className="shadow appearance-none border rounded w-[80%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="email"
                />
              </div>
              <div className="mt-5 text-center">
                <Button type="submit" variant="contained">
                  Pay
                </Button>
              </div>
            </form>
          </>
        )}
      </Model>
    </>
  );
};
