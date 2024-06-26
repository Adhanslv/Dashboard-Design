import React from "react";
const CardContent = () => {
	const itemList = [
		{
			title: "Total Revenue",
			tag: "💲",
			amount: "$45,231.89",
			desc: "+20.1% from last month",
		},
		{
			title: "Subscriptions       ",
			tag: "🗳️",
			amount: "+235",
			desc: "+180.1% from last month",
		},
		{
			title: "Sales",
			tag: "📦",
			amount: "+12,234",
			desc: "+19% from last month",
		},
		{
			title: "Active Now",
			tag: "📈",
			amount: "+573",
			desc: "+201 since last hour",
		},
	];
	return (
		<div className="grid justify-center grid-cols-4 gap-3 mt-12 md:justify-evenly ">
			{itemList.map((data, index) => {
				return (
					<div
						className="w-full col-span-4 px-4 py-3 border border-black rounded-md shadow-md cursor-pointer md:col-span-2 lg:col-span-1"
						key={index}
					>
						<div className="flex items-center justify-between mb-2 ">
							<h1 className="text-[18px] font-bold ">{data.title}</h1>
							<span className="text-[22px]">{data.tag}</span>
						</div>
						<p className="text-[26px] font-semibold">{data.amount}</p>
						<p className=" text-[13px] ">{data.desc}</p>
					</div>
				);
			})}
		</div>
	);
};

export default CardContent;
