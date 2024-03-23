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
		<div className="flex flex-wrap items-center justify-center gap-3 px-5 mt-12 md:justify-center">
			{itemList.map((data, index) => {
				return (
					<div
						className="w-[335px]  px-4 py-3 border rounded-md border-gray-500/40"
						key={index}
					>
						<div className="flex items-center justify-between mb-2 ">
							<h1 className="text-[18px] font-bold ">{data.title}</h1>
							<span className="text-[22px]">{data.tag}</span>
						</div>
						<p className="text-[26px] font-semibold">{data.amount}</p>
						<p className="text-white/60 text-[13px] ">{data.desc}</p>
					</div>
				);
			})}
		</div>
	);
};

export default CardContent;
