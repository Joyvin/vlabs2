import Pocketbase from "pocketbase";

const pb = new Pocketbase(`${process.env.NEXT_PUBLIC_POCKETBASE_URL}`);

export default pb;
