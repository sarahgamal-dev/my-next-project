"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cartContext } from "@/Context/CartContext";
import { cashPaymentAction } from "@/paymentActions/Cashpayment";

import React, { useContext, useRef } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { onlinePaymentAction } from "@/paymentActions/onlinePayment";

const Payment = () => {
  const router = useRouter();
  const { cartId, afterPayment } = useContext(cartContext);

  const details = useRef<HTMLInputElement>(null);
  const phone = useRef<HTMLInputElement>(null);
  const city = useRef<HTMLInputElement>(null);

  async function cashpayment() {
    const values = {
      shippingAddress: {
        details: details.current?.value,
        phone: phone.current?.value,
        city: city.current?.value,
      },
    };

    try {
      const data = await cashPaymentAction(cartId, values);
      console.log(data);

      toast.success(data.status, {
        position: "top-center",
        duration: 1000,
      });

      afterPayment();
      router.push("/allorders");
    } catch (error) {
      console.log(error);
      toast.error("Cash payment failed", {
        position: "top-center",
      });
    }
  }

  async function onlinepayment() {
    const values = {
      shippingAddress: {
        details: details.current?.value,
        phone: phone.current?.value,
        city: city.current?.value,
      },
    };

    try {
      const data = await onlinePaymentAction(cartId, values);
      console.log(data);

      if (data.status === "success" && data.session?.url) {
        window.location.href = data.session.url;
      } else {
        toast.error("Online payment failed", { position: "top-center" });
      }
    } catch (error) {
      console.log(error);
      toast.error("Online payment failed", { position: "top-center" });
    }
  }

  return (
    <div className="w-full md:w-1/2 my-10 mx-auto px-5 md:px-0">
      <h1 className="mb-10 text-center text-3xl font-bold">Payment</h1>

      <div>
        <label htmlFor="details">Details</label>
        <Input ref={details} type="text" id="details" className="mb-4" />

        <label htmlFor="phone">Phone</label>
        <Input ref={phone} type="tel" id="phone" className="mb-4" />

        <label htmlFor="city">City</label>
        <Input ref={city} type="text" id="city" className="mb-4" />

        <div className="flex gap-4">
          <Button onClick={cashpayment}>Cash Payment</Button>
          <Button onClick={onlinepayment}>Online Payment</Button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
