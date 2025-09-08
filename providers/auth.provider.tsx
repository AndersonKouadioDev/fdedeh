'use client'
import {SessionProvider} from "next-auth/react"
import React from 'react'

const AuthProvider = ({children}: { children: React.ReactNode }) => {
	React.useEffect(() => {
		if ("serviceWorker" in navigator) {
			navigator.serviceWorker
				.register("/service-worker.js")
				.then((registration) => {
					console.log("Service Worker registered with scope:", registration.scope);
				})
				.catch((error) => {
					console.error("Service Worker registration failed:", error);
				});
		}
	}, []);
	return (
		<SessionProvider>
			{children}
		</SessionProvider>
	)
}

export default AuthProvider