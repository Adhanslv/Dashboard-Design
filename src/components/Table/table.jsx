import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableFooter,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

const invoices = [
	{
		invoice: "INV001",
		paymentStatus: "Paid",
		totalAmount: "$250.00",
		paymentMethod: "Credit Card",
	},
	{
		invoice: "INV002",
		paymentStatus: "Pending",
		totalAmount: "$150.00",
		paymentMethod: "PayPal",
	},
	{
		invoice: "INV003",
		paymentStatus: "Unpaid",
		totalAmount: "$350.00",
		paymentMethod: "Bank Transfer",
	},
	{
		invoice: "INV004",
		paymentStatus: "Paid",
		totalAmount: "$450.00",
		paymentMethod: "Credit Card",
	},
	{
		invoice: "INV005",
		paymentStatus: "Paid",
		totalAmount: "$550.00",
		paymentMethod: "PayPal",
	},
	{
		invoice: "INV006",
		paymentStatus: "Pending",
		totalAmount: "$200.00",
		paymentMethod: "Bank Transfer",
	},
	{
		invoice: "INV007",
		paymentStatus: "Unpaid",
		totalAmount: "$300.00",
		paymentMethod: "Credit Card",
	},
];

import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";

const TableContent = () => {
	return (
		<div className="mt-10">
			<Table>
				<TableCaption>A list of your recent invoices.</TableCaption>
				<TableHeader>
					<TableRow>
						<TableHead className="w-[80px] font-bold text-black uppercase ">
							Invoice
						</TableHead>
						<TableHead className="font-bold text-black uppercase">
							Status
						</TableHead>
						<TableHead className="font-bold text-black uppercase">
							Method
						</TableHead>
						<TableHead className="font-bold text-black uppercase">
							Amount
						</TableHead>
						<TableHead className="font-bold text-black uppercase">
							Action
						</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{invoices.map((invoice) => (
						<TableRow key={invoice.invoice}>
							<TableCell className="font-medium">{invoice.invoice}</TableCell>
							<TableCell>{invoice.paymentStatus}</TableCell>
							<TableCell>{invoice.paymentMethod}</TableCell>
							<TableCell className="">{invoice.totalAmount}</TableCell>
							<TableCell>
								<div className="flex items-center cursor-pointer gap-x-1">
									<span className="p-1.5 rounded-sm bg-gray-500/10 hover:bg-gray-600/40">
										<FaRegTrashAlt />
									</span>
									<span className="p-1.5 rounded-sm bg-gray-500/10 hover:bg-gray-600/40">
										<FaPencil />
									</span>
								</div>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
				<TableFooter>
					<TableRow>
						<TableCell colSpan={3}>Total</TableCell>
						<TableCell colSpan={2} className="">
							$2,500.00
						</TableCell>
					</TableRow>
				</TableFooter>
			</Table>
		</div>
	);
};

export default TableContent;
