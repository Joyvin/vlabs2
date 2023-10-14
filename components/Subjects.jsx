import React from "react";
import Link from "next/link";

export default function Subjects() {
	return (
		<>
			<div className="lg:m-16">
				<div className="w-full my-10 flex justify-center">
					<div className="title text-5xl lg:text-7xl">
						Get Started
					</div>
				</div>
				<div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 grid-cols-1 sm:grid-cols-2 lg:ml-16 gap-10 px-10 lg:px-0 pb-10">
					<div className="">
						<Link
							style={{
								background:
									"url('/img/home/3.png') top no-repeat",
								backgroundSize: "cover",
							}}
							href="/c"
							class="block flex-col relative flex justify-end aspect-square max-w-sm border border-gray-200 rounded-3xl shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
						>
							<h5 class="mb-2 text-3xl font-bold text-white absolute mx-2.5 top-10 xl:text-[2.5rem] lg:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
								C <br />
								<div className="mt-4">Programming</div>
							</h5>
							<div className="bg-white w-full rounded-b-3xl h-[30%] flex flex-col justify-center">
								<div className="flex justify-around">
									<div className="">
										<div className="text-center">
											<strong className="xl:text-4xl text-2xl">
												13
											</strong>
										</div>
										<div className="text-center">
											<span className="text-xl">
												Chapters
											</span>
										</div>
									</div>
									<div className="">
										<div className="text-center">
											<strong className="xl:text-4xl text-2xl">
												18
											</strong>
										</div>
										<div className="text-center">
											<span className="text-xl">
												Challenges
											</span>
										</div>
									</div>
								</div>
							</div>
						</Link>
					</div>
					<div className="">
						<Link
							style={{
								background:
									"url('/img/home/2.png') top no-repeat",
								backgroundSize: "cover",
							}}
							href="/ds"
							class="block flex-col relative flex justify-end aspect-square max-w-sm border border-gray-200 rounded-3xl shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
						>
							<h5 class="mb-2 text-3xl font-bold text-white absolute mx-2.5 top-10  xl:text-[2.5rem] lg:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
								Data <br />
								<div className="mt-4">Structures</div>
							</h5>
							<div className="bg-white w-full rounded-b-3xl h-[30%] flex flex-col justify-center">
								<div className="flex justify-around">
									<div className="">
										<div className="text-center">
											<strong className="xl:text-4xl text-2xl">
												12
											</strong>
										</div>
										<div className="text-center">
											<span className="text-xl">
												Chapters
											</span>
										</div>
									</div>
									<div className="">
										<div className="text-center">
											<strong className="xl:text-4xl text-2xl">
												24
											</strong>
										</div>
										<div className="text-center">
											<span className="text-xl">
												Challenges
											</span>
										</div>
									</div>
								</div>
							</div>
						</Link>
					</div>
					<div className="">
						<Link
							style={{
								background:
									"url('/img/home/1.png') top no-repeat",
								backgroundSize: "cover",
							}}
							href="#"
							class="block flex-col relative flex justify-end aspect-square max-w-sm border border-gray-200 rounded-3xl shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
						>
							<h5 class="mb-2 text-3xl font-bold text-white absolute mx-2.5 top-10  xl:text-[2.5rem] lg:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
								NLP
							</h5>
							<div className="bg-white w-full rounded-b-3xl h-[30%] flex flex-col justify-center">
								<div className="flex justify-around">
									<div className="">
										<div className="text-center">
											<strong className="xl:text-4xl text-2xl">
												8
											</strong>
										</div>
										<div className="text-center">
											<span className="text-xl">
												Chapters
											</span>
										</div>
									</div>
									<div className="">
										<div className="text-center">
											<strong className="xl:text-4xl text-2xl">
												13
											</strong>
										</div>
										<div className="text-center">
											<span className="text-xl">
												Challenges
											</span>
										</div>
									</div>
								</div>
							</div>
						</Link>
					</div>
					<div className="hidden xl:block">
						<Link
							style={{
								background:
									"url('/img/home/4.png') right top no-repeat",
								backgroundSize: "cover",
							}}
							href="#"
							class="block flex-col relative flex justify-end aspect-square max-w-sm border border-gray-200 rounded-3xl shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
						>
							<h5 class="mb-2 text-3xl font-bold text-white absolute mx-2.5 top-10  xl:text-[2.5rem] lg:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
								Algorithms
							</h5>
							<div className="bg-white w-full rounded-b-3xl h-[30%] flex flex-col justify-center">
								<div className="flex justify-around">
									<div className="">
										<div className="text-center">
											<strong className="xl:text-4xl text-2xl">
												12
											</strong>
										</div>
										<div className="text-center">
											<span className="text-xl">
												Chapters
											</span>
										</div>
									</div>
									<div className="">
										<div className="text-center">
											<strong className="xl:text-4xl text-2xl">
												26
											</strong>
										</div>
										<div className="text-center">
											<span className="text-xl">
												Challenges
											</span>
										</div>
									</div>
								</div>
							</div>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}
