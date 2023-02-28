import Link from "next/link";
import React from "react";
import Image from "next/image";
import CoinList from "@/component/CoinList";
import { useState, useEffect } from "react";

export const getServerSideProps = async () => {
	const res = await fetch(
		"https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
	);
	const data = await res.json();

	return {
		props: {
			data,
		},
	};
};

const UserDashboard = ({ data }) => {
	return (
		<div>
			<h1>
				<Link href="/">Back home</Link>
			</h1>

			<CoinList data={data} />
		</div>
	);
};
export default UserDashboard;
