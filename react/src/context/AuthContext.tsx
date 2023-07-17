import {
    Dispatch,
    ReactNode,
    SetStateAction,
    createContext,
    useContext,
    useState,
} from "react";
import axiosClient from "../axiosClient";

interface AuthProviderProps {
    children: ReactNode;
}

interface User {
    user: Object;
}

interface AuthContextIntarface {
    user: string | null;
    setUser: Dispatch<SetStateAction<User>>;
    csrfToken: () => Promise<boolean>;
}

const defaultContext = {
    user: null,
    setUser: () => {},
    csrfToken: () => {
        return Promise.resolve(false);
    },
} as AuthContextIntarface;

const AuthContext = createContext(defaultContext);

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [user, _setUser] = useState(localStorage.getItem("user"));

    const setUser = (user: any) => {
        if (user) {
            localStorage.setItem("user", JSON.stringify(user));
        } else {
            localStorage.removeItem("user");
        }
        _setUser(JSON.stringify(user));
    };

    const csrfToken = async () => {
        await axiosClient.get("http://wire/sanctum/csrf-cookie");
        return true;
    };

    return (
        <AuthContext.Provider value={{ user, setUser, csrfToken }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
