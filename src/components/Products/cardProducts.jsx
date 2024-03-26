import React from "react";
import { productData } from "@/utils/productData";
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
import { FaRegTrashAlt } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";

const ProductContent = () => {
	return (
		<div className="mt-10">
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead className="w-[150px] font-bold text-black uppercase ">
							Article
						</TableHead>
						<TableHead className="font-bold text-black uppercase">
							Color
						</TableHead>
						<TableHead className="font-bold text-black uppercase">
							Quantity
						</TableHead>
						<TableHead className="font-bold text-black uppercase">
							Price
						</TableHead>
						<TableHead className="font-bold text-black uppercase">
							Action
						</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{productData.map((items) => (
						<TableRow key={items.productId}>
							<TableCell className="font-medium">{items.article}</TableCell>
							<TableCell>{items.color}</TableCell>
							<TableCell className="">{items.qty}</TableCell>
							<TableCell className="">{items.amount}</TableCell>
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
				{/* <TableFooter>
					<TableRow>
						<TableCell colSpan={3}>Total</TableCell>
						<TableCell colSpan={2} className="">
							$2,500.00
						</TableCell>
					</TableRow>
				</TableFooter> */}
			</Table>
		</div>
	);
};

export default ProductContent;
