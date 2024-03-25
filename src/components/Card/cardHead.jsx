import React from "react";
import TabContentData from "../TabsContent/tabs";

const CardHead = () => {
	return (
		<div className="px-6 mt-12 lg:px-[5vw] ">
			<div className="flex flex-wrap items-center justify-between">
				<h1 className="mb-6 text-2xl font-semibold">Dashboard</h1>
				<div className="flex items-center gap-2 font-semibold">
					<div className="px-2.5 py-2 border border-gray-500/40 rounded-md whitespace-nowrap">
						Jan 20,2024 - Mar 09,2024
					</div>
					<button className="px-2.5 py-2 font-bold text-white bg-black rounded-md ">
						Download
					</button>
				</div>
			</div>
			<TabContentData />
		</div>
	);
};

export default CardHead;
