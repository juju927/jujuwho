import { NavLink } from "react-router-dom";

const NavBar = () => {
	const navs = {
		about: {
			label: "about",
			abbrvLabel: "abt",
			linkTo: "/about",
		},
		projects: {
			label: "projects",
			abbrvLabel: "proj",
			linkTo: "/projects",
		},
		experience: {
			label: "experience",
			abbrvLabel: "exp",
			linkTo: "/experience",
		},
	};

	return (
		<div className="w-fit my-1 flex gap-4 text-black dark:text-white">
			{Object.keys(navs).map((nav) => (
				<NavLink to={navs[nav].linkTo} key={nav}>
					{({ isActive }) => (
						<>
							{/* nav link label */}
							<div className="hidden md:block">
								<div className="relative group text-lg font-mono font-medium tracking-widest">
									{navs[nav].label}
									<span
										className={`absolute left-0 bottom-1 w-full h-0.5 bg-pink-500 ${
											isActive
												? "scale-x-100"
												: "scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"
										}`}
									></span>
								</div>
							</div>

							{/* nav link label for smaller screens */}
							<div className="block md:hidden">
								<div className="relative group text-lg font-mono font-medium tracking-widest">
									{navs[nav].abbrvLabel}
									<span
										className={`absolute left-0 bottom-1 w-full h-0.5 bg-pink-500 ${
											isActive
												? "scale-x-100"
												: "scale-x-0"
										}`}
									></span>
								</div>
							</div>
						</>
					)}
				</NavLink>
			))}
		</div>
	);
};

export default NavBar;
