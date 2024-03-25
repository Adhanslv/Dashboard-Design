"use client";
import React from "react";
import { DataOrders } from "@/utils/dataOrder";
import { useParams } from "next/navigation";

const DetailOrder = () => {
	const { id } = useParams();
	const items = DataOrders.filter((items) => items.id == id[0]);
	return (
		<div className="flex items-center justify-center h-screen mt-10 text-3xl font-bold">
			Maintenance
		</div>
	);
};

export default DetailOrder;
