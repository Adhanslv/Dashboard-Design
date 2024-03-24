import React from "react";

const CardHead = () => {
	return (
		<div className="px-[5vw] mt-10 font-bold mb-10  ">
			<div className="flex flex-wrap items-center justify-between">
				<h1 className="mb-6 text-2xl">Dashboard</h1>
				<div className="flex items-center gap-x-4">
					<div className="px-2.5 py-2 border border-gray-500/40 rounded-md whitespace-nowrap">
						Jan 20,2024 - Mar 09,2024
					</div>
					<button className="px-2.5 py-2 font-bold text-white bg-black rounded-md">
						Download
					</button>
				</div>
			</div>
		</div>
	);
};

export default CardHead;
