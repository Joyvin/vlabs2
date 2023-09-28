import React from "react";

export default function Subjects() {
	return (
		<>
			<div className="m-16">
				<div className="w-full my-10 flex justify-center">
					<div className="title text-[56px]">Get Started</div>
				</div>
				<div className="grid xl:grid-cols-4 lg:grid-cols-3 ml-16 gaps-4">
					<div className="">
						<a
							style={{
								background:
									"url('/img/home/3.png') top no-repeat",
								backgroundSize: "cover",
							}}
							href="#"
							class="block flex-col relative flex justify-end aspect-square max-w-sm border border-gray-200 rounded-3xl shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
						>
							<h5 class="mb-2 text-[2.5rem] font-bold text-white absolute mx-2.5 top-10 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
								C <br />
								<div className="mt-4">Programming</div>
							</h5>
							<div className="bg-white w-full rounded-b-3xl p-5 px-10 h-[30%]">
								<div className="flex justify-between">
									<div className="">
										<div className="text-center">
											<strong className="text-[2rem]">
												13
											</strong>
										</div>
										<div className="text-center">
											<span className="text-[1.5rem]">
												Chapters
											</span>
										</div>
									</div>
									<div className="">
										<div className="text-center">
											<strong className="text-[2rem]">
												18
											</strong>
										</div>
										<div className="text-center">
											<span className="text-[1.5rem]">
												Challenges
											</span>
										</div>
									</div>
								</div>
							</div>
						</a>
					</div>
					<div className="">
						<a
							style={{
								background:
									"url('/img/home/2.png') top no-repeat",
								backgroundSize: "cover",
							}}
							href="#"
							class="block flex-col relative flex justify-end aspect-square max-w-sm border border-gray-200 rounded-3xl shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
						>
							<h5 class="mb-2 text-[2.5rem] font-bold text-white absolute mx-2.5 top-10 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
								Data <br />
								<div className="mt-4">Structures</div>
							</h5>
							<div className="bg-white w-full rounded-b-3xl p-5 px-10 h-[30%]">
								<div className="flex justify-between">
									<div className="">
										<div className="text-center">
											<strong className="text-[2rem]">
												12
											</strong>
										</div>
										<div className="text-center">
											<span className="text-[1.5rem]">
												Chapters
											</span>
										</div>
									</div>
									<div className="">
										<div className="text-center">
											<strong className="text-[2rem]">
												24
											</strong>
										</div>
										<div className="text-center">
											<span className="text-[1.5rem]">
												Challenges
											</span>
										</div>
									</div>
								</div>
							</div>
						</a>
					</div>
					<div className="">
						<a
							style={{
								background:
									"url('/img/home/1.png') top no-repeat",
								backgroundSize: "cover",
							}}
							href="#"
							class="block flex-col relative flex justify-end aspect-square max-w-sm border border-gray-200 rounded-3xl shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
						>
							<h5 class="mb-2 text-[2.5rem] font-bold text-white absolute mx-2.5 top-10 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
								NLP
							</h5>
							<div className="bg-white w-full rounded-b-3xl p-5 px-10 h-[30%]">
								<div className="flex justify-between">
									<div className="">
										<div className="text-center">
											<strong className="text-[2rem]">
												8
											</strong>
										</div>
										<div className="text-center">
											<span className="text-[1.5rem]">
												Chapters
											</span>
										</div>
									</div>
									<div className="">
										<div className="text-center">
											<strong className="text-[2rem]">
												13
											</strong>
										</div>
										<div className="text-center">
											<span className="text-[1.5rem]">
												Challenges
											</span>
										</div>
									</div>
								</div>
							</div>
						</a>
					</div>
					<div className="hidden xl:block">
						<a
							style={{
								background:
									"url('/img/home/4.png') right top no-repeat",
								backgroundSize: "cover",
							}}
							href="#"
							class="block flex-col relative flex justify-end aspect-square max-w-sm border border-gray-200 rounded-3xl shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
						>
							<h5 class="mb-2 text-[2.5rem] font-bold text-white absolute mx-2.5 top-10 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
								Algorithms
							</h5>
							<div className="bg-white w-full rounded-b-3xl p-5 px-10 h-[30%]">
								<div className="flex justify-between">
									<div className="">
										<div className="text-center">
											<strong className="text-[2rem]">
												12
											</strong>
										</div>
										<div className="text-center">
											<span className="text-[1.5rem]">
												Chapters
											</span>
										</div>
									</div>
									<div className="">
										<div className="text-center">
											<strong className="text-[2rem]">
												26
											</strong>
										</div>
										<div className="text-center">
											<span className="text-[1.5rem]">
												Challenges
											</span>
										</div>
									</div>
								</div>
							</div>
						</a>
					</div>
				</div>
			</div>
		</>
	);
}
