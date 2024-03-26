"use client";
import React from "react";
import Link from "next/link";
import { DataOrders } from "@/utils/dataOrder";
import { useParams } from "next/navigation";
import { IoChevronBackCircle } from "react-icons/io5";

const DetailOrder = () => {
	const { id } = useParams();
	const item = DataOrders.filter((item) => item.id == id)[0];
	return (
		<div className="px-[5vw] mt-10 ">
			<Link href={"/Dashboard/Orders"} className="flex items-center gap-x-1">
				<IoChevronBackCircle size={30} />
				<span className="text-[22px] font-semibold transition hover:translate-x-2 duration-300 ease-in">
					back
				</span>
			</Link>
			<div className="flex flex-col max-w-full px-3 py-2 mt-12 border border-black rounded-md md:max-w-fit md:block">
				<div>
					<img src={item?.image} alt={item?.article}></img>
				</div>
				<div className="flex flex-col">
					<h1 className="mt-4 mb-2 text-2xl font-bold ">{item?.article}</h1>
					<p className="text-xl font-bold text-black/45">{item?.user}</p>
					<p className="">{item?.gmail}</p>
					<p className="font-mono font-semibold text-black/30">
						Count : {item?.qty}
					</p>
					<p className="font-mono font-semibold text-black/30">
						Total : {item?.amount}
					</p>
				</div>
			</div>
		</div>
	);
};

export default DetailOrder;
