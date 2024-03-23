import React from "react";

const CardHead = () => {
	return (
		<div className="px-[5vw] mt-10 font-bold  ">
			<div className="flex flex-wrap items-center justify-between">
				<h1 className="mb-6 text-2xl">Dashboard</h1>
				<div className="flex items-center gap-x-4">
					<div className="px-2.5 py-2 border border-gray-500/40 rounded-md whitespace-nowrap">
						Jan 20,2024 - Mar 09,2024
					</div>
					<button className="px-2.5 py-2 font-bold text-black bg-white rounded-md">
						Download
					</button>
				</div>
			</div>
			<div className="flex items-center px-4 py-1 rounded-xl gap-1 bg-gray-500/30 w-fit text-[13px] cursor-pointer mt-4 whitespace-nowrap overflow-x-hidden ">
				<h1 className="px-4 py-2.5 bg-black rounded-full">Overview</h1>
				<h1 className="px-4 py-2.5 text-white rounded-full hover:bg-black/30">
					Analytics
				</h1>
				<h1 className="px-4 py-2.5 text-white rounded-full hover:bg-black/30">
					Reports
				</h1>
				<h1 className="px-4 py-2.5 text-white rounded-full hover:bg-black/30">
					Notifications
				</h1>
			</div>
		</div>
	);
};

export default CardHead;
