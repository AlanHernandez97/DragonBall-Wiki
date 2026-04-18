import { Outlet } from "react-router";
import SideMenu from "./components/SideMenu/SideMenu";

export function Layout() {
	return (
		<div>
			<main className="flex">
				<SideMenu />

				<Outlet />

			</main>
		</div>
	);
}