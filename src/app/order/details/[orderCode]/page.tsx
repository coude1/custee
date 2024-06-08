"use client";
import { montserrat_500 } from "@/assets/fonts/font";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import OrderDetails from "@/components/order/orderDetails/OrderDetails";
import OrderInfo from "@/components/order/orderDetails/OrderInfo";
import { axiosInstance } from "@/utils/axiosInstance";
import React, { useEffect, useState } from "react";

interface Order {
  _id: string;
  userId: any;
  code: string;
  total: number;
  paymentMethod: string;
  deliveryInfo: {
    recipientName: string;
    phone: string;
    address: string;
  };
  deliveryOptions: {
    method: string;
    cost: number;
  };
  discountValue: number;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}

export default function page({
  params,
}: {
  params: {
    orderCode: string;
  };
}) {
  const [order, setOrder] = useState<Order>({
    _id: "",
    userId: "",
    code: "",
    total: 0,
    paymentMethod: "",
    deliveryInfo: {
      recipientName: "",
      phone: "",
      address: "",
    },
    deliveryOptions: {
      method: "",
      cost: 0,
    },
    discountValue: 0,
    status: "",
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  const getOrderData = async () => {
    await axiosInstance
      .get(`/api/order/code/${params.orderCode}`)
      .then((res) => {
        setOrder(res.data.metadata);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getOrderData();
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-between gap-16">
      <Navbar />
      <div
        className={`w-full flex justify-center items-center gap-8 mt-32 px-8 ${montserrat_500.className}`}
      >
        <OrderInfo order={order} />
        <OrderDetails order={order} />
      </div>
      <Footer />
    </div>
  );
}
