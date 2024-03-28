import React from "react";
import { SiAdminer } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { FiArrowRightCircle } from "react-icons/fi";

const ProfilePage = () => {
	return (
		<div className="px-[5vw] mt-10 ">
			<div className="grid gap-x-3">
				<div className="flex items-center justify-between">
					<div>
						<img
							src="https://i.pinimg.com/736x/43/de/a3/43dea3f49fe615d209db80ca3b1b6f98.jpg"
							width={100}
							alt="logo-profile"
							height={100}
							className="w-32 p-1 border border-black rounded-full h-fit"
						/>
					</div>
					<div className="flex flex-col items-center gap-y-3 md:gap-y-12">
						<h1 className="flex items-center gap-x-2 text-[16px]">
							Current Role <SiAdminer size={30} />
						</h1>
						<h1 className="rounded-full bg-gray-500/10 px-5 py-2.5 font-semibold">
							Admin Role
						</h1>
					</div>
				</div>
				<div>
					<h1 className="mt-5 text-3xl font-bold text-black/80">
						Asyhab Ramadhan
					</h1>
				</div>
				<div className="flex items-center justify-between ">
					<p className="text-black/80 ">asyhab2002@gmail.com</p>
					<p className="text-black/80 ">Acess Roles </p>
				</div>
			</div>
			<div className="grid justify-between grid-cols-2 gap-12 mt-8">
				<div className="flex gap-x-1">
					<Button className="px-4 font-semibold rounded-full">
						Edit Profile
					</Button>
					<Button
						variant="ghost"
						className="px-4 font-semibold border border-black rounded-full "
					>
						Settings
					</Button>
				</div>
				<div className="flex flex-wrap col-span-2 gap-x-1 lg:col-span-1 md:col-span-2 gap-y-3 ">
					<Button
						variant="ghost"
						className="px-4 py-2 font-semibold rounded-full bg-[#F5F5DC]"
					>
						Add New Product
					</Button>
					<Button
						variant="ghost"
						className="px-4 py-2 font-semibold rounded-full bg-[#F5F5DC]"
					>
						Edit Product
					</Button>
					<Button
						variant="ghost"
						className="px-4 py-2 font-semibold rounded-full bg-[#F5F5DC]"
					>
						Deleted Product
					</Button>
					<Button
						variant="ghost"
						className="px-4 py-2 font-semibold rounded-full bg-[#F5F5DC]"
					>
						Approved Order
					</Button>
					<Button
						variant="ghost"
						className="px-4 py-2 font-semibold rounded-full bg-[#F5F5DC]"
					>
						Admit Status
					</Button>
				</div>
			</div>
			<div className="grid justify-center grid-cols-3 gap-4 mt-12 cursor-pointer">
				<div className="flex  justify-between md:gap-x-40 gap-x-5 items-center border border-black shadow-md px-3 py-2.5 rounded-md col-span-3 md:col-span-1  hover:translate-x-1 transition ease-out duration-300  ">
					<div>
						<h1 className="text-xl font-semibold">Ready For Work</h1>
						<p>Show recruites that youre ready for work.</p>
					</div>
					<div>
						<FiArrowRightCircle size={34} />
					</div>
				</div>
				<div className="flex  justify-between md:gap-x-5  gap-x-5items-center border border-black shadow-md px-3 py-2.5 rounded-md col-span-3 md:col-span-1  hover:translate-x-1 transition ease-out duration-300   ">
					<div>
						<h1 className="text-xl font-semibold">Share Post</h1>
						<p>Share latest news to get connected with others.</p>
					</div>
					<div>
						<FiArrowRightCircle size={34} />
					</div>
				</div>
				<div className="flex  justify-between md:gap-x-5  gap-x-5items-center border border-black shadow-md px-3 py-2.5 rounded-md col-span-3 md:col-span-1  hover:translate-x-1 transition ease-out duration-300  ">
					<div>
						<h1 className="text-xl font-semibold">Update</h1>
						<p>Keep your profile update so that recruiters know you better.</p>
					</div>
					<div>
						<FiArrowRightCircle size={34} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfilePage;
