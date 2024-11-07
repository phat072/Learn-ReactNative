// AppContext.tsx
import React, { createContext, useState } from "react";

type AppProps = {
    children: React.ReactNode;
};

type AppContextProps = {
    data: { email: string; password: string }[];
    isLoggedIn: "idle" | "success" | "hasError";
    setIsLoggedIn: React.Dispatch<React.SetStateAction<"idle" | "success" | "hasError">>;
};

export const AppContext = createContext<AppContextProps | null>(null);

export const AppContextProvider: React.FC<AppProps> = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState<"idle" | "success" | "hasError">("idle");

    return (
        <AppContext.Provider
            value={{
                data: [
                    {
                        email: `21520389@gm.uit.edu.vn`,
                        password: `123456`,
                    },
                ],
                isLoggedIn,
                setIsLoggedIn,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};
