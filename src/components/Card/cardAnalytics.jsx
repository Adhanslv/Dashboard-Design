import React from "react";

const CardAnalytics = () => {
	const itemList = [
		{
			image:
				"https://i.pinimg.com/736x/43/de/a3/43dea3f49fe615d209db80ca3b1b6f98.jpg",
			title: "Asyhab Ramadhan",
			gmail: "asyhab2002@gmail.com",
			amount: "+$1,999.00",
		},
		{
			image:
				"https://i.pinimg.com/564x/12/ec/91/12ec910af9cd15f6c79360fdc8f0e988.jpg",
			title: "Budi Hartono",
			gmail: "budihartono@gmail.com",
			amount: "+$2,999.00",
		},
		{
			image:
				"https://i.pinimg.com/564x/a5/3e/a6/a53ea6dfe0ec712bdfc415a83e3d34c3.jpg",
			title: "Isryad Panjaitan",
			gmail: "irsyadpanjaitan@gmail.com",
			amount: "+$4,120.00",
		},
		{
			image:
				"https://i.pinimg.com/564x/a0/f2/2d/a0f22d8ede00e52b8efef965e2ad0090.jpg",
			title: "Sandikha Galih",
			gmail: "sandikhagalih@gmail.com",
			amount: "+$4,999.00",
		},
		{
			image:
				"https://i.pinimg.com/564x/83/ea/1e/83ea1e62e0812fe6974cf3521e77ddc2.jpg",
			title: "Ulqoira",
			gmail: "ulqoira@gmail.com",
			amount: "+$12,999.00",
		},
		{
			image:
				"https://i.pinimg.com/564x/7b/82/1c/7b821ce74b776b3db647740e14b6228a.jpg",
			title: "Sukuna",
			gmail: "sukuna@gmail.com",
			amount: "+$1,999.00",
		},
	];
	return (
		<div className="grid grid-cols-2 mt-14 gap-x-3 gap-y-4">
			<div className="flex col-span-2 px-4 py-3 border border-black rounded-md md:col-span-1 ">
				<div className="font-light ">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi quo
					iste autem officiis perspiciatis, a corrupti beatae eum dolore ut
					rerum qui omnis molestias ipsum ab consequatur similique dolorem
					repudiandae assumenda fugit minus nobis porro. Debitis deserunt
					laudantium necessitatibus, ducimus enim tempora pariatur! Nesciunt
					iure impedit veniam ab doloribus veritatis deserunt voluptatem soluta
					hic esse tempore excepturi, dolor, temporibus sapiente voluptatibus
					obcaecati ullam officiis suscipit omnis. Odit, excepturi. Dolorem
					officia officiis molestias neque, minima explicabo blanditiis
					laboriosam praesentium doloribus. Voluptatibus provident explicabo sit
					quos cupiditate eaque, placeat, blanditiis, temporibus modi veritatis
					a atque voluptatem. Minima officia iste tempora hic fuga id! Beatae
					ducimus ex expedita rerum ab vero quidem ratione quibusdam, autem
					debitis recusandae quaerat error quos fugiat voluptates eos. Lorem
					ipsum dolor sit, amet consectetur adipisicing elit. Ipsam neque
					explicabo amet architecto accusantium eos? Consequatur eveniet maiores
					quis aut porro quo quidem perferendis dolores fugit quia adipisci
					consectetur ratione expedita eaque autem nam labore dignissimos,
					officiis impedit corrupti aperiam iusto eius laborum? Hic facere natus
					vel optio voluptates, quo in reprehenderit harum id molestiae?
					Voluptas itaque rem sint magnam, enim placeat dolorem officia veniam
					error illo quibusdam totam! Alias, sapiente quas saepe itaque id sit
					ipsum fuga explicabo nostrum!
				</div>
			</div>
			<div className="col-span-2 px-4 py-3 border border-black rounded-md md:col-span-1">
				<h1>Recent Sales</h1>
				<p>You made 265 sales this month.</p>
				<div className="mt-8">
					{itemList.map((data, index) => {
						return (
							<div
								className="flex justify-between text-[13px]  lg:text-[16px]"
								key={index}
							>
								<div className="flex items-center mb-6 gap-x-2">
									<img
										src={data.image}
										alt={data.title}
										className="object-cover object-center w-12 rounded-full h-fit"
									/>
									<div>
										<h1 className="font-bold ">{data.title}</h1>
										<p className="text-sm text">{data.gmail}</p>
									</div>
								</div>
								<div className="font-bold ">{data.amount}</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default CardAnalytics;
