import React, { useEffect } from "react";
import { useState } from "react";
import CoinList from "@/component/CoinList";
import Link from "next/link";

export default function UserDashboard() {
	const [count, setCount] = useState(0);
	const [data, setData] = useState(null);

	useEffect(() => {
		async function fetchData() {
			try {
				const res = await fetch(
					"https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
				);
				const data = await res.json();
				// setData(data);
			} catch (err) {
				console.log(err);
			}
		}
		fetchData();
		// const interval = setInterval(() => fetchData(), 2000);
		// return () => {
		// 	clearInterval(interval);
		// };
	}, []);

	return (
		<div>
			<h1>
				<Link href="/">Back home</Link>
			</h1>

			{data.map((coins) => {
				<li>{coins.id}</li>;
			})}
		</div>
	);
}
