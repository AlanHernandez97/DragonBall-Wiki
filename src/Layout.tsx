import { Outlet } from "react-router";
import SideMenu from "./components/SideMenu/SideMenu";

export function Layout() {
	return (
		<div className="w-full">
			<main className="w-full flex">
				<SideMenu />

				<Outlet />

			</main>
		</div>
	);
}