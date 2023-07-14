import {
    Dispatch,
    ReactNode,
    SetStateAction,
    createContext,
    useContext,
    useState,
} from "react";

type User = {
    name: string;
};
type Token = {
    token: string;
};

interface UserContextInterface {
    user: User | null;
    setUser: Dispatch<SetStateAction<User>>;
    token: Token | null;
    setToken: Dispatch<SetStateAction<Token>>;
}

const defalueState = {
    user: null,
    token: null,
    setUser: (user: User) => {},
    setToken: (token: Token) => {},
} as UserContextInterface;

const UserContext = createContext(defalueState);

type UserProviderProps = {
    children: ReactNode;
};

export const UserProvider = ({ children }: UserProviderProps) => {
    const [user, setUser] = useState({
        name: "",
    });
    const [token, _setToken] = useState(localStorage.getItem("ACCESS_TOKEN"));
    const setToken = (token: Token) => {
        _setToken(JSON.stringify(token));
        if (token) {
            localStorage.setItem("ACCESS_TOKEN", JSON.stringify(token));
        } else {
            localStorage.removeItem("ACCESS_TOKEN");
        }
    };

    return (
        <UserContext.Provider value={{ user, token, setUser, setToken }}>
            {children}
        </UserContext.Provider>
    );
};

export const useStateContext = useContext(UserContext);
