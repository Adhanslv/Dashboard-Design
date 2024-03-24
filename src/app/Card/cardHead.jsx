import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import CardContent from "./cardContent";
import CardAnalytics from "./cardAnalytics";

const CardHead = () => {
	return (
		<div className="px-[5vw] mt-10 font-bold  ">
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
			<Tabs defaultValue="Overview" className="mt-12 ">
				<TabsList className="px-2 py-6 bg-black rounded-sm">
					<TabsTrigger
						className="text-white rounded-full hover:rounded-full hover:bg-white/35"
						value="Overview"
					>
						Overview
					</TabsTrigger>
					<TabsTrigger
						className="text-white rounded-full hover:rounded-full hover:bg-white/35"
						value="Analytics"
					>
						Analytics
					</TabsTrigger>
					<TabsTrigger
						className="text-white rounded-full hover:rounded-full hover:bg-white/35"
						value="Reports"
					>
						Reports
					</TabsTrigger>
					<TabsTrigger
						className="text-white rounded-full hover:rounded-full hover:bg-white/35"
						value="Notification"
					>
						Notification
					</TabsTrigger>
				</TabsList>
				<TabsContent value="Overview">
					<CardContent />
					<CardAnalytics />
				</TabsContent>
			</Tabs>
		</div>
	);
};

export default CardHead;
