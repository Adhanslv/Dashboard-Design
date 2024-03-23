import React from "react";

const Navbar = () => {
	return (
		<nav className="flex justify-between px-[4vw] py-4 border-b border-white/15">
			<ul className="flex justify-between gap-2 ">
				<li className="px-3.5 py-2 font-semibold cursor-pointer">
					<a href="/">Home</a>
				</li>
				<li className="px-3.5 py-2 font-semibold cursor-pointer hidden lg:block">
					<a href="/">About</a>
				</li>
				<li className="px-3.5 py-2 font-semibold cursor-pointer hidden lg:block">
					<a href="/">Article</a>
				</li>
				<li className="px-3.5 py-2 font-semibold cursor-pointer hidden lg:block">
					<a href="/">Contact</a>
				</li>
			</ul>
			<div className="flex items-center justify-between gap-1 cursor-pointer">
				<div className="hidden px-3 py-2 font-semibold lg:block ">
					Asyhab Ramadhan ⚡
				</div>
				<img
					src="https://i.pinimg.com/736x/43/de/a3/43dea3f49fe615d209db80ca3b1b6f98.jpg"
					alt="ini fotonya"
					className="object-cover object-center w-12 rounded-full h-fit"
				/>
			</div>
		</nav>
	);
};

export default Navbar;
