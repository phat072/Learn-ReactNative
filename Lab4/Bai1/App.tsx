import { GestureHandlerRootView } from "react-native-gesture-handler"
import "core-js/stable/atob"
import React from "react"
import { RecoilRoot } from "recoil"
import Screen from "./screen"

export default function App() {
	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<RecoilRoot>
				<Screen />
			</RecoilRoot>
		</GestureHandlerRootView>
	)
}
