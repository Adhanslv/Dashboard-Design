import React from "react";
import NavbarMobile from "./mobile";
import { IoMdSearch } from "react-icons/io";
import Link from "next/link";
import { Button } from "../ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const Navbar = () => {
	return (
		<nav className="flex justify-between px-[4vw] py-2  shadow-sm md:px-[2vw] gap-x-3">
			<ul className="flex items-center justify-between gap-5 ">
				<li className=" text-[34px]">
					<Link href="">📦</Link>
				</li>
				<li className="hidden font-semibold cursor-pointer md:block">
					<Link href="/">Dashboard</Link>
				</li>
				<li className="hidden font-semibold cursor-pointer md:block">
					<Link href="/Dashboard/Orders">Orders</Link>
				</li>
				<li className="hidden font-semibold cursor-pointer md:block">
					<Link href="/Dashboard/Products">Products</Link>
				</li>
				<li className="hidden font-semibold cursor-pointer md:block">
					<Link href="/">Costumers</Link>
				</li>
				<li className="hidden font-semibold cursor-pointer md:block">
					<Link href="/">Analytics</Link>
				</li>
			</ul>
			<div className="flex items-center justify-between gap-4 cursor-pointer lg:gap-2 ">
				<di className="relative flex items-center px-3 py-1 border rounded-sm border-black/45 ">
					<IoMdSearch size={22} />
					<input
						type="text"
						className="w-full px-3 py-1 outline-none"
						placeholder="Search...."
					/>
				</di>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="outline" className="p-0 border-none outline-none ">
							<img
								src="https://i.pinimg.com/736x/43/de/a3/43dea3f49fe615d209db80ca3b1b6f98.jpg"
								alt="ini fotonya"
								className="hidden object-cover object-center w-12 rounded-full h-fit lg:block md:block"
							/>
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent className="mr-6 border cursor-pointer border-black/20 ">
						<DropdownMenuLabel className="cursor-not-allowed">
							Actions
						</DropdownMenuLabel>
						<DropdownMenuGroup>
							<DropdownMenuItem className="cursor-pointer">
								<span>Profile</span>
							</DropdownMenuItem>
							<DropdownMenuItem className="cursor-pointer">
								<span>Logout</span>
							</DropdownMenuItem>
						</DropdownMenuGroup>
					</DropdownMenuContent>
				</DropdownMenu>
				<NavbarMobile />
			</div>
		</nav>
	);
};

export default Navbar;
