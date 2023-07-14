import { createContext, useState, useContext } from "react";

interface IState {
    user: null | string;
    token: null | string;
    setUser: () => void;
    setToken: () => void;
}

const StateContext = createContext({
    user: null,
    token: null,
    setUser: () => {},
    setToken: () => {},
});

interface ContextProviderProps {
    children: React.ReactNode;
}

type Token = (token: string) => void;

export const ContextProvider: React.FC<ContextProviderProps> = ({
    children,
}) => {
    const [user, setUser] = useState({});
    const [token, _setToken] = useState(localStorage.getItem("ACCESS_TOKEN"));

    const setToken: Token = (token) => {
        _setToken(token);
        if (token) {
            localStorage.setItem("ACCESS_TOKEN", token);
        } else {
            localStorage.removeItem("ACCESS_TOKEN");
        }
    };

    return (
        <StateContext.Provider value={{ user, token, setUser, setToken }}>
            {children}
        </StateContext.Provider>
    );
};

export const useStateContext = () => useContext(StateContext);
