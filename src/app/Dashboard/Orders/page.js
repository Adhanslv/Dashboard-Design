import React from "react";
import Link from "next/link";
import { DataOrders } from "@/utils/dataOrder";
import { Button } from "@/components/ui/button";
export const metadata = {
	title: "Orders",
};
const OrdersPage = () => {
	return (
		<div className="px-[5vw]  mt-10">
			<h1 className="text-2xl font-bold capitalize">Costumer orders</h1>
			<div className="grid grid-cols-3 mt-10 gap-x-2 gap-y-2 md:gap-x-2 ">
				{DataOrders.map((data, index) => {
					return (
						<div
							className="flex flex-col col-span-3 md:col-span-1 "
							key={index}
						>
							<div className="border border-black rounded-t-sm">
								<img
									src={data.image}
									alt={data.article}
									className="object-cover aspect-square "
								/>
							</div>
							<div className="flex items-center border shadow-md border-black rounded-b-sm px-5 py-2.5 b">
								<div className="">
									<h1 className="mt-2 text-2xl font-bold uppercase">
										{data.article}
									</h1>
									<p className="mt-4 text-xl font-semibold">{data.user}</p>
									<p className="text-[17px] font-light">{data.gmail}</p>
									<p className="text-[19px] font-semibold">
										{" "}
										<span className="text-xl ">x</span> {data.qty}
									</p>
									<p className="text-[22px] mb-3 font-semibold">
										{data.amount}
									</p>
									<Link
										href={`/Shop/Order/${data.id}`}
										className="flex gap-x-1"
									>
										<Button className=" rounded-md text-[15px] mb-2    ">
											Detail Order
										</Button>
										<Button className=" rounded-md text-[15px] mb-2 bg-gray-500/85 hover:bg-gray-400   ">
											Confirm Order
										</Button>
									</Link>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default OrdersPage;
