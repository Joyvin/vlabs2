import React from "react";
import Link from "next/link";
import { useState } from "react";
import pb from "@/utils/mypb";

export default function Register() {
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const [cPassword, setCPassword] = useState();
	const [uName, setUName] = useState();

	const register = async (e) => {
		e.preventDefault();

		const data = {
			username: uName,
			email: email,
			emailVisibility: true,
			password: password,
			passwordConfirm: cPassword,
		};

		const record = await pb
			.collection("vlabs_users")
			.create(data)
			.then((e) => {
				window.location.replace("/");
			})
			.catch((err) => {
				console.log(err.data);
			});
	};

	return (
		<>
			<section className="bg-gray-50 dark:bg-gray-900">
				<div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 mb-16">
					<div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
						<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
							<div className="flex justify-center">
								<Link href="/" className="flex items-center">
									<img
										src="/img/crcelogo.jpg"
										className="h-10 pr-3 border-r-2"
									/>
									<img
										src="/img/logo-long.png"
										className="h-10 mx-3"
									/>
								</Link>
							</div>
							<h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
								Register
							</h1>
							<form
								className="space-y-4 md:space-y-6"
								onSubmit={register}
								action="#"
							>
								<div>
									<label
										for="email"
										className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
									>
										Username
									</label>
									<input
										value={uName}
										onChange={(e) => {
											setUName(e.target.value);
										}}
										type="text"
										name="name"
										id="name"
										className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
										placeholder="John Doe"
										required=""
									/>
								</div>
								<div>
									<label
										for="email"
										className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
									>
										Your email
									</label>
									<input
										value={email}
										onChange={(e) => {
											setEmail(e.target.value);
										}}
										type="email"
										name="email"
										id="email"
										className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
										placeholder="name@company.com"
										required=""
									/>
								</div>
								<div>
									<label
										for="password"
										className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
									>
										Password
									</label>
									<input
										value={password}
										onChange={(e) => {
											setPassword(e.target.value);
										}}
										type="password"
										name="password"
										id="password"
										placeholder="••••••••"
										className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
										required=""
									/>
									{password && password.length < 8 && (
										<p className="mt-2 text-sm text-red-600 dark:text-red-500">
											Length shold be greater than 8
										</p>
									)}
								</div>
								<div>
									<label
										for="confirm-password"
										className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
									>
										Confirm password
									</label>
									<input
										value={cPassword}
										onChange={(e) => {
											setCPassword(e.target.value);
										}}
										type="confirm-password"
										name="confirm-password"
										id="confirm-password"
										placeholder="••••••••"
										className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
										required=""
									/>
									{password != cPassword && (
										<p className="mt-2 text-sm text-red-600 dark:text-red-500">
											Passwords dont match
										</p>
									)}
								</div>
								<div className="flex items-start">
									<div className="flex items-center h-5">
										<input
											id="terms"
											aria-describedby="terms"
											type="checkbox"
											className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
											required=""
										/>
									</div>
									<div className="ml-3 text-sm">
										<label
											for="terms"
											className="font-light text-gray-500 dark:text-gray-300"
										>
											I accept the{" "}
											<a
												className="font-medium text-blue-600 hover:underline dark:text-blue-500"
												href="#"
											>
												Terms and Conditions
											</a>
										</label>
									</div>
								</div>
								<button
									disabled={
										!(
											email &&
											password &&
											cPassword &&
											password === cPassword
										)
									}
									type="submit"
									className="w-full disabled:opacity-50 text-white bg-blue-700 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
								>
									Create an account
								</button>
								{/* <div className="my-7 justify-center flex rounded-lg">
									<button
										onClick={registerWithGoogle}
										className="hover:text-white hover:bg-blue-700 flex w-full justify-center items-center p-3 border border-blue-700 rounded-lg"
									>
										<img
											className="h-5 mr-3"
											src="/img/gLogo.png"
											alt=""
										/>
										Sign Up With Google
									</button>
								</div> */}
								<p className="text-sm font-light text-gray-500 dark:text-gray-400">
									Already have an account?{" "}
									<Link
										href="/login"
										className="font-medium text-blue-600 hover:underline dark:text-blue-500"
									>
										Login here
									</Link>
								</p>
							</form>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
