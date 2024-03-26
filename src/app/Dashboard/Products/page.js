import ProductContent from "@/components/Products/cardProducts";
import React from "react";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { IoAddCircleSharp } from "react-icons/io5";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const metadata = {
	title: "Products",
};
const ProductsPage = () => {
	return (
		<div className="px-[5vw] mt-10">
			<div>
				<Dialog>
					<DialogTrigger asChild>
						<Button
							variant="outline"
							className="flex items-center font-bold capitalize border border-black/60 gap-x-3"
						>
							<IoAddCircleSharp size={26} />
							Add new product
						</Button>
					</DialogTrigger>
					<DialogContent className="md:w-full w-[365px]">
						<DialogHeader>
							<DialogTitle>Add new product</DialogTitle>
							<DialogDescription>
								Make changes to your profile here. Click save when you re done.
							</DialogDescription>
						</DialogHeader>
						<div className="grid gap-3 py-4 ">
							<div className="grid items-center grid-cols-6 gap-4 md:grid-cols-7 md:gap-10">
								<Label htmlFor="name" className="text-right">
									Article
								</Label>
								<Input id="name" className="col-span-6 border border-black " />
							</div>
							<div className="grid items-center grid-cols-6 gap-4 md:grid-cols-7 md:gap-10">
								<Label htmlFor="username" className="text-right">
									Color
								</Label>
								<Input
									id="username"
									className="col-span-6 border border-black"
								/>
							</div>
							<div className="grid items-center grid-cols-6 gap-4 md:grid-cols-7 md:gap-10">
								<Label htmlFor="username" className="text-right">
									Quantity
								</Label>
								<Input
									id="username"
									className="col-span-6 border border-black"
								/>
							</div>
							<div className="grid items-center grid-cols-6 gap-4 md:grid-cols-7 md:gap-10">
								<Label htmlFor="username" className="text-right">
									Price
								</Label>
								<Input
									id="username"
									className="col-span-6 border border-black"
								/>
							</div>
						</div>
						<DialogFooter>
							<Button type="submit" className="w-full">
								Save
							</Button>
						</DialogFooter>
					</DialogContent>
				</Dialog>
			</div>
			<ProductContent />
		</div>
	);
};

export default ProductsPage;
