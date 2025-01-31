"use client";

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation';
import Header from './components/Header';
import Sidebar from './components/sidebar';

export default function Home() {

	const [name, setName] = useState("");
	const [department, setDepartment] = useState("");

	const router = useRouter();

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!name || !department) {
			alert("Please complete all inputs");
			return;
		}
		try {
			const res = await fetch("http://localhost:3000/api/posts", {
				method: "POST",
				header: {
					"content-Type": "application/json"
				},
				body: JSON.stringify({ name, department })
			})
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<main>
			<div>
				<Header />
				<div className="container">
					<Sidebar />
					<div className="content">
						<form onSubmit={handleSubmit}>
							<input onChange={(e) => setName(e.target.value)} type="text" placeholder='Enter name' />
							<input onChange={(e) => setDepartment(e.target.value)} type="text" placeholder='Enter department' />
							<button type="submit">Submit</button>
						</form>
					</div>
				</div>
			</div>
		</main>
	);
}
