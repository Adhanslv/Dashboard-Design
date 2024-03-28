"use client";
import React from "react";
import Link from "next/link";
import { DataOrders } from "@/utils/dataOrder";
import { useParams } from "next/navigation";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
const DetailOrder = () => {
	const { id } = useParams();
	const item = DataOrders.filter((item) => item.id == id)[0];
	const { toast } = useToast();
	return (
		<div className="px-[5vw] mt-10 ">
			<Link href={"/Dashboard/Orders"} className="flex items-center gap-x-1">
				<IoArrowBackCircleOutline size={30} />
				<span className="text-[22px] font-bold transition hover:translate-x-2 duration-300 ease-in">
					Back
				</span>
			</Link>
			<div className="grid items-center grid-cols-2 gap-4 mt-20 ">
				<div className="col-span-2 md:col-span-1">
					<img src={item?.image} alt={item?.article}></img>
				</div>
				<div className="col-span-2 md:col-span-1">
					<h1 className="mt-4 mb-2 text-4xl font-bold ">{item?.article}</h1>
					<p className="mt-4">{item?.user}</p>
					<p className="">{item?.gmail}</p>
					<p className="">{item.addres}</p>
					<p className="mt-2 font-semibold ">Amount : {item?.qty}</p>
					<p className="font-semibold ">Total : {item?.amount}</p>
					<p className="mt-2 mb-3 text-justify ">{item.desc}</p>
					<Button
						onCl={() => {
							toast({
								title: "Approved",
								description: "Success Approved Ordered",
								action: <ToastAction altText="Back">Back To Home</ToastAction>,
							});
						}}
					>
						Approved Order
					</Button>
				</div>
			</div>
		</div>
	);
};

export default DetailOrder;
