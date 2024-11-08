import React from "react"
import { Router } from "../src/view"
import { NavigationContainer } from "@react-navigation/native"
import { ThemeProvider } from "@/src/hook/useTheme"
export default function App() {
	return (
		<ThemeProvider>
			<NavigationContainer independent={true}>
				<Router />
			</NavigationContainer>
		</ThemeProvider>
		
	)
}