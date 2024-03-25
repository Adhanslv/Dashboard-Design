import CardAnalytics from "@/components/Card/cardAnalytics";
import CardContent from "@/components/Card/cardContent";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import TableContent from "../Table/table";

const TabContentData = () => {
	return (
		<Tabs defaultValue="Overview" className="mt-10">
			<TabsList className="gap-1 px-2 bg-black whitespace-nowrap ">
				<TabsTrigger
					className="text-white rounded-full hover:bg-white/30 hover:text-white"
					value="Overview"
				>
					Overview
				</TabsTrigger>
				<TabsTrigger
					className="text-white rounded-full hover:bg-white/30 hover:text-white"
					value="Analytics"
				>
					Reports
				</TabsTrigger>
			</TabsList>
			<TabsContent value="Overview">
				<CardContent />
				<CardAnalytics />
			</TabsContent>
			<TabsContent value="Analytics">
				<TableContent />
			</TabsContent>
		</Tabs>
	);
};

export default TabContentData;
