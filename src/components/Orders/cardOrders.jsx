import React from "react";
import { Button } from "../ui/button";

const CardOrders = () => {
	const dataOrder = [
		{
			image:
				"https://imgcdn.carhartt.com/is/image/Carhartt/bs1_Backpacks_Desktop?&fmt=png-alpha",
			article: "Carhartt Bag",
			user: "Asyhab Ramadhan",
			gmail: "asyhab2002@gmail.com",
			qty: "12",
			amount: "$12000",
		},
		{
			image:
				"https://static.flexdog.com/flexdog-1/products/images/fa302d83-4736-4072-93fb-b799de4c37cb.png?width=750&quality=70",
			article: "Vetement Jacket",
			user: "Brent Faiyaz",
			gmail: "brenfaiyaz@gmail.com",
			qty: "12",
			amount: "$12000",
		},
		{
			image:
				"https://media.karousell.com/media/photos/products/2021/1/31/converse_chuck_taylor_70s_1612084992_b0fa05ba_progressive.jpg",
			article: "Converse 70s",
			user: "Asap Rocky",
			gmail: "asaprocky@gmail.com",
			qty: "12",
			amount: "$12000",
		},
		{
			image:
				"https://img.vitkac.com/uploads/product_thumb/CZAPKA%207915N22C3%200-V0037/lg/1.png",
			article: "Stone Island Bucket Hat",
			user: "Tyler The Creator",
			gmail: "wordfang@gmail.com",
			qty: "12",
			amount: "$12000",
		},
		{
			image:
				"https://www.matsisland.com/cdn/shop/files/pixelcut_10_236f33c7-3c9c-476d-8c9e-e9c5ff26877c_600x.png?v=1704386075",
			article: "Stone Island X NB",
			user: "Spike  Speigel",
			gmail: "cowboybeebop@gmail.com",
			qty: "12",
			amount: "$12000",
		},
		{
			image:
				"https://images.tokopedia.net/img/cache/900/VqbcmM/2022/10/13/229cd570-a2ca-45e2-b574-c6e37097de18.jpg",
			article: "99 CLover X Morteils",
			user: "Asyhab Ramadhan",
			gmail: "asyhab2002@gmail.com",
			qty: "12",
			amount: "$12000",
		},
	];

	return (
		<div className="flex flex-col mt-10">
			<div className="grid grid-cols-2 gap-3 gap-y-3 ">
				{dataOrder.map((data, index) => {
					return (
						<div
							className="flex items-center border shadow-md border-black rounded-sm px-3 py-2.5 col-span-2 
            lg:col-span-1 md:col-span-1"
						>
							<div className="">
								<h1 className="mb-3 text-2xl font-semibold whitespace-pre-wrap ">
									{data.article}
								</h1>
								<p className="">{data.user}</p>
								<p className="mb-2">{data.gmail}</p>
								<p className="text-[17px]">Total : {data.qty}</p>
								<p className="text-[17px] mb-7">Amount : {data.amount}</p>
								<Button className="px-3 py-2 rounded-md text-[15px]">
									See Detail
								</Button>
							</div>
							<div>
								<img
									src={data.image}
									alt={data.article}
									className="object-cover aspect-square lg:aspect-video "
								/>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default CardOrders;
