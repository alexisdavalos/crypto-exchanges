import React from "react";

const ExchangeUpdates = ({ statusUpdates, exchangeId }) => {
	return statusUpdates.length ? (
		<div className="pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
			<div className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 dark:divide-gray-600 lg:max-w-7xl">
				<div>
					<h2 className="text-3xl tracking-tight font-extrabold text-purple-600 dark:text-yellow-500 sm:text-4xl">
						Recent Status Updates
					</h2>
					<p className="mt-3 text-xl text-gray-700 dark:text-white sm:mt-4">
						Read up on all the latest status and product updates from{" "}
						{exchangeId}
					</p>
				</div>
				<div className="mt-12 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
					{statusUpdates.map((post, idx) => (
						<div
							key={`${post.project.id}-status-update-${idx}`}
							className="bg-gray-300 bg-opacity-20 dark:bg-gray-900 dark:bg-opacity-30 p-4 rounded-md flex flex-col justify-between items-start"
						>
							<div>
								<span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium capitalize bg-purple-500 text-gray-50 dark:bg-yellow-500">
									{post.category.split("_").join(" ")}
								</span>
							</div>
							<div href={post.href} className="block mt-4">
								<p className="text-xl font-semibold text-gray-700 dark:text-white">
									{post.title}
								</p>
								<p className="mt-3 text-base text-gray-500 dark:text-white">
									{post.description.split("➡️")[0]}:
									<a
										className="font-medium text-purple-500 dark:text-yellow-500"
										href={post.description.split("➡️")[1]}
										target="_blank"
										rel="noreferrer"
									>
										{post.description.split("➡️")[1]}
									</a>
								</p>
							</div>
							<div className="mt-6 flex items-center border-t-2 border-gray-200 dark:border-gray-600 w-full">
								<div className="p-2">
									<p className="text-sm font-medium text-gray-700 dark:text-white">
										{post.user} - {post.user_title}
									</p>
									<div className="flex space-x-1 text-sm text-purple-500 dark:text-yellow-500">
										<time dateTime={post.created_at}>{post.created_at}</time>
										<span aria-hidden="true">&middot;</span>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	) : null;
};
export default ExchangeUpdates;
