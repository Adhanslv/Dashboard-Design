import React from "react";

const isActive = false;

const Navlink = (href) => {
	return (
		<a
			href={href}
			className={`${
				isActive
					? "bg-black/30 text-white rounded-full px-3"
					: "text-black hover:bg-black hover:text-white rounded-full px-3 py-1"
			}`}
		>
			Halo
		</a>
	);
};

export default Navlink;
