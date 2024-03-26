import React from "react";
import { Button } from "../ui/button";
import { DataOrders } from "@/utils/dataOrder";

const CardOrders = () => {
	return (
		<div className="grid grid-cols-3 mt-10 gap-x-2 gap-y-2 md:gap-x-2">
			{DataOrders.map((data, index) => {
				return (
					<div className="flex flex-col col-span-3 md:col-span-1 " key={index}>
						<div className="border border-black rounded-t-sm">
							<img
								src={data.image}
								alt={data.article}
								className="object-cover aspect-square "
							/>
						</div>
						<div className="flex items-center border shadow-md border-black rounded-b-sm px-5 py-2.5">
							<div className="">
								<h1 className="mt-2 mb-3 text-xl font-semibold">
									{data.article}
								</h1>
								<p className="font-semibold text-[18px]">{data.user}</p>
								<p className="mb-2 ">{data.gmail}</p>
								<p className="text-[17px]">Total Barang : {data.qty}</p>
								<p className="text-[17px] mb-3">Total Harga : {data.amount}</p>
								<Button className="px-3 py-2 rounded-md text-[15px] mb-2 ">
									<a href="/(shop)/">See Detail</a>
								</Button>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default CardOrders;
