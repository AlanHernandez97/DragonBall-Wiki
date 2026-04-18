import { Earth, NotebookPen, Users, Zap } from "lucide-react"


const SideMenu = () => {
	const sideMenuItems = [
		{
			label: "Personajes",
			path: "/",
			icon: <Users />
		},
		{
			label: "Sagas",
			path: "/sagas",
			icon: <NotebookPen />
		},
		{
			label: "Planetas",
			path: "/planets",
			icon: <Earth />
		},
		{
			label: "Poder",
			path: "/power",
			icon: <Zap />
		}
	]
	return (
		<div className="flex flex-col gap-4 w-3/12 p-4 h-screen bg-[#1A1D24]">
			<h1 className="text-5xl font-bold text-center text-[#FF8A00]">Wiki-Z</h1>
			<p className="text-xl text-gray-500 text-center">Una wiki sobre el universo de Dragon Ball</p>
			<div>
				{sideMenuItems.map((item) => (
					<div key={item.label} className="flex items-center p-2 hover:bg-gray-100">
						<div className="text-gray-500">{item.icon}</div>
						<span className="ml-2 text-gray-500">{item.label}</span>
					</div>
				))}
			</div>
		</div>
	)
}

export default SideMenu