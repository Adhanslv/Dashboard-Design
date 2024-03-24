import React from "react";
import { FaGithubAlt, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
	return (
		<div className="flex flex-col items-center justify-center mt-12 mb-12">
			<div>
				Created by{" "}
				<span className="text-gray-500 underline cursor-pointer ">
					Adhanslv
				</span>{" "}
				also available on{" "}
				<span className="text-gray-500 underline cursor-pointer ">
					<a href="https://github.com/Adhanslv" target="_blank">
						Github
					</a>
				</span>
			</div>
			<div className="flex items-center justify-between mt-6 social-media-content gap-x-10 ">
				<a href="https://www.instagram.com/ash4rr/" target="_blank">
					<FaInstagram size={25} />
				</a>
				<a
					href="https://api.whatsapp.com/send/?phone=6281345220865&text&type=phone_number&app_absent=0"
					target="_blank"
				>
					<FaWhatsapp size={25} />
				</a>
				<a
					href="https://api.whatsapp.com/send/?phone=6281345220865&text&type=phone_number&app_absent=0"
					target="_blank"
				>
					<FaXTwitter size={25} />
				</a>
			</div>
		</div>
	);
};

export default Footer;
