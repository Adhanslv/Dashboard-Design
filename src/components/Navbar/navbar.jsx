import React from "react";
import NavbarMobile from "./mobile";
import { IoMdSearch } from "react-icons/io";

const Navbar = () => {
	return (
		<nav className="flex justify-between px-[4vw] py-2  shadow-sm md:px-[4vw] gap-x-3">
			<ul className="flex items-center justify-between gap-7 ">
				<li className=" text-[34px]">
					<a href="/">📦</a>
				</li>
				<li className="hidden font-semibold cursor-pointer ">
					<a href="/">Dashboard</a>
				</li>
				<li className="hidden font-semibold cursor-pointer md:block">
					<a href="/Orders">Orders</a>
				</li>
				<li className="hidden font-semibold cursor-pointer md:block">
					<a href="/">Products</a>
				</li>
				<li className="hidden font-semibold cursor-pointer md:block">
					<a href="/">Costumers</a>
				</li>
				<li className="hidden font-semibold cursor-pointer md:block">
					<a href="/">Analytics</a>
				</li>
			</ul>
			<div className="flex items-center justify-between gap-2 cursor-pointer ">
				<di className="relative flex items-center px-3 py-1 border rounded-sm border-black/15 ">
					<IoMdSearch size={22} />
					<input
						type="text"
						className="px-3 py-1 outline-none"
						placeholder="Search...."
					/>
				</di>
				<img
					src="https://i.pinimg.com/736x/43/de/a3/43dea3f49fe615d209db80ca3b1b6f98.jpg"
					alt="ini fotonya"
					className="hidden object-cover object-center w-12 rounded-full h-fit lg:block md:block"
				/>
				<NavbarMobile />
			</div>
		</nav>
	);
};

export default Navbar;
