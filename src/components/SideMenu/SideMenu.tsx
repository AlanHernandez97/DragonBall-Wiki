import { Link } from "react-router";
import { Earth, Users } from "lucide-react";

const SideMenu = () => {

	const sideMenuItems = [
		{
			label: "Personajes",
			path: "/",
			icon: <Users />
		},
		{
			label: "Planetas",
			path: "/planets",
			icon: <Earth />
		}
	];

	return (
		<div className="flex flex-col gap-4 w-150 h-screen p-4 bg-[#1A1D24] border-r border-black">

			<h1 className="text-5xl font-bold text-center text-[#FF8A00]">
				Wiki-Z
			</h1>

			<p className="text-xl text-gray-500 text-center">
				Una wiki sobre el universo de Dragon Ball
			</p>

			<div>
				{sideMenuItems.map((item) => (
					<Link
						key={item.label}
						to={item.path}
						className="flex items-center rounded-xl p-2 hover:bg-gray-100 hover:text-[#FF8A00] cursor-pointer transition-colors duration-300"
					>
						<div className="text-gray-500">
							{item.icon}
						</div>

						<span className="ml-2 text-gray-500">
							{item.label}
						</span>
					</Link>
				))}
			</div>
		</div>
	);
};

export default SideMenu;