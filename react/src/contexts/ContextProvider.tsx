import { createContext, useContext, useState } from "react";

interface IUser {
    user: string | null;
    token: string | null;
    setUser: any;
    setToken: () => void;
}

const StateContext = createContext<IUser>({
    user: null,
    token: null,
    setUser: () => {},
    setToken: () => {},
});

export const ContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, _setToken] = useState<string | null>(
        localStorage.getItem("ACCESS_TOKEN")
    );

    const setToken = () => {
        _setToken(token);
        if (token) {
            localStorage.setItem("ACCESS_TOKEN", token);
        } else {
            localStorage.removeItem("ACCESS_TOKEN");
        }
    };

    return (
        <StateContext.Provider
            value={{
                user,
                token,
                setUser,
                setToken,
            }}
        >
            {children}
        </StateContext.Provider>
    );
};

export const useStateContext = () => useContext(StateContext);
