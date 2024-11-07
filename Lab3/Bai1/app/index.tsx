// App.tsx
import React from "react";
import { AppContextProvider } from "../context/AppContext";
import Screen from "../screen/Screen";

export default function App() {
    return (
        <AppContextProvider>
            <Screen />
        </AppContextProvider>
    );
}
