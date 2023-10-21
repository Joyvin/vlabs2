import "@/styles/globals.css";
import { ToastContainer, toast } from "react-toastify";

export default function App({ Component, pageProps }) {
	return (
		<div className="">
			<Component {...pageProps} />
			<ToastContainer />
		</div>
	);
}
