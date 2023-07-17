import axios from "axios";
import {
    createContext,
    useState,
    useContext,
    Dispatch,
    SetStateAction,
} from "react";
interface User {
    name: string;
}
interface IState {
    user: null | User;
    token: null | string;
    setUser: Dispatch<SetStateAction<User>>;
    setToken: (token: any) => void;
    csrfToken: () => Promise<boolean>;
}

const defaultState = {
    user: null,
    token: null,
    setUser: () => {},
    setToken: () => {},
    csrfToken: () => {
        return Promise.resolve(false);
    },
} as IState;

const StateContext = createContext(defaultState);

interface ContextProviderProps {
    children: React.ReactNode;
}

type Token = (token: string) => void;

export const ContextProvider: React.FC<ContextProviderProps> = ({
    children,
}) => {
    const [user, setUser] = useState<User | null>(null);
    const [token, _setToken] = useState(localStorage.getItem("ACCESS_TOKEN"));

    const setToken: Token = (token) => {
        _setToken(token);
        if (token) {
            localStorage.setItem("ACCESS_TOKEN", token);
        } else {
            localStorage.removeItem("ACCESS_TOKEN");
        }
    };

    const csrfToken = async () => {
        await axios.get("http://wire/sanctum/csrf-cookie");
        return true;
    };

    return (
        <StateContext.Provider
            value={{ user, token, setUser, setToken, csrfToken }}
        >
            {children}
        </StateContext.Provider>
    );
};

export const useStateContext = () => useContext(StateContext);
