import { useLayoutEffect } from "react";
import { useRouter } from "next/router";
import PocketBase from "pocketbase";

const pb = new PocketBase(`${process.env.NEXT_PUBLIC_POCKETBASE_URL}`);

export default function GuardedPage({ children }) {
	const router = useRouter();
	const isAuth = () => {
		if (!pb.authStore.model?.id) router.push("/login");
	};

	useLayoutEffect(() => {
		isAuth();
	}, []);

	return <>{children}</>;
}
