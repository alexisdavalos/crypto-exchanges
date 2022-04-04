import React from "react";

const Banner = () => {
	return (
		<div data-testid="main-banner" className="relative bg-primary p-8">
			<div className="absolute inset-x-0 bottom-0 h-1/2"></div>
			<div className="mx-auto sm:px-6 lg:px-8">
				<div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
					<div className="absolute inset-0">
						<img
							className="h-full w-full object-cover"
							src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=2830&q=80&sat=-100"
							alt="People working on laptops"
						/>
						<div className="absolute inset-0 bg-gradient-to-r from-red-800 to-indigo-700 dark:to-yellow-600 mix-blend-multiply"></div>
					</div>
					<div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
						<h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
							<span className="block text-white">Take control of your</span>
							<span className="block text-purple-400 dark:text-yellow-400 shadow-sm">
								crypto knowledge
							</span>
						</h1>
						<p className="mt-6 max-w-lg mx-auto text-center text-lg text-white sm:max-w-3xl">
							Get insights into the top 10 crypto exchanges in the world. Break
							down metrics, see the positives and negatives, figure out what
							works best for you and always stay on top of what is important to
							you.. all from the palm of your hand.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
