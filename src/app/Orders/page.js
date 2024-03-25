import CardOrders from "@/components/Orders/cardOrders";
import React from "react";

const OrdersPage = () => {
	return (
		<div className="px-[5vw]  mt-10">
			<h1 className="text-2xl font-bold capitalize">Costumer orders</h1>
			<CardOrders />
		</div>
	);
};

export default OrdersPage;
