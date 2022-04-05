import React from "react";

const Banner = ({ perPage }) => {
	return (
		<section
			data-test="main-banner"
			className="relative p-4 md:p-8 lg:p-12 xl:p-16"
		>
			<div className="absolute inset-x-0 bottom-0 h-1/2"></div>
			<div className="mx-auto sm:px-6 lg:px-8">
				<div className="relative shadow-xl rounded-2xl overflow-hidden">
					<div className="absolute inset-0">
						<img
							data-test="banner-img"
							className="h-full w-full object-cover"
							src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=2830&q=80&sat=-100"
							alt="People working on laptops"
						/>
						<div className="absolute inset-0 bg-gradient-to-r from-red-800 to-indigo-700 dark:to-yellow-600 mix-blend-multiply"></div>
					</div>
					<div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
						<h1
							data-test="banner-title"
							className="text-center text-2xl lg:text-4xl xl:text-6xl font-extrabold tracking-tight"
						>
							<span className="block text-white">Take control of your</span>
							<span className="block text-purple-400 dark:text-yellow-400 shadow-sm">
								crypto knowledge
							</span>
						</h1>
						<p
							data-test="banner-content"
							className="mt-6 max-w-lg mx-auto text-center text-xs sm:text-sm md:text-md lg:text-lg text-white sm:max-w-3xl"
						>
							Get insights into the top {perPage} crypto exchanges in the world.
							Break down metrics and always stay on top of what is important to
							you.. all from the palm of your hand.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Banner;
