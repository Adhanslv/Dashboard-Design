import CardAnalytics from "@/components/Card/cardAnalytics";
import CardContent from "@/components/Card/cardContent";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import TableContent from "../Table/table";

const TabContentData = () => {
	return (
		<Tabs defaultValue="Overview" className=" px-[5vw] overflow-hidden ">
			<TabsList className="flex w-full px-2 py-6 bg-black rounded-sm b gap-x-1 lg:w-fit md:w-fit ">
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
			<TabsContent value="Analytics">
				<TableContent />
			</TabsContent>
			<TabsContent value="Reports">
				<TableContent />
			</TabsContent>
			<TabsContent value="Notification">
				<TableContent />
			</TabsContent>
		</Tabs>
	);
};

export default TabContentData;
