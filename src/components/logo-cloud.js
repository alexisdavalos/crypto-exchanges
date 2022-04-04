import React from "react";

const LogoCloud = () => {
	const companies = [
		{
			id: 1,
			logo: "https://tailwindui.com/img/logos/tuple-logo-gray-400.svg",
			alt: "Tuple",
		},
		{
			id: 2,
			logo: "https://tailwindui.com/img/logos/mirage-logo-gray-400.svg",
			alt: "Mirage",
		},
		{
			id: 3,
			logo: "https://tailwindui.com/img/logos/statickit-logo-gray-400.svg",
			alt: "StaticKit",
		},
		{
			id: 4,
			logo: "https://tailwindui.com/img/logos/transistor-logo-gray-400.svg",
			alt: "Transistor",
		},
		{
			id: 5,
			logo: "https://tailwindui.com/img/logos/workcation-logo-gray-400.svg",
			alt: "Workcation",
		},
	];
	return (
		<div>
			<div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
				<p className="text-center text-lg font-semibold uppercase text-purple-600 dark:text-yellow-500 tracking-wide">
					Trusted by over {companies.length} very small but crafty businesses
				</p>
				<div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
					{companies.map((company) => (
						<div
							key={company.id}
							className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1"
						>
							<img className="h-12" src={company.logo} alt={company.alt} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default LogoCloud;
