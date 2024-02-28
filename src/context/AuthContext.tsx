import { ReactNode, createContext, useEffect, useState } from "react";
import usePost from "../usePost";
import IUser from "../types/IUser";
import { Navigate } from "react-router-dom";

type Props = {
    children?: ReactNode;
};

interface ILogin {
    email: string;
    password: string;
}

type AuthContextType = {
    currentUser: IUser | undefined;
    signed: boolean;
    signIn: ({ email, password }: ILogin) => Promise<void>;
    singOut: () => void;
};

export const AuthContext = createContext<AuthContextType>({
    currentUser: undefined,
    signed: false,
    signIn: async () => {},
    singOut: async () => {},
});

export const AuthProvider = ({ children }: Props) => {
    const { postData, data, success, error } = usePost();
    const [currentUser, setCurrentUser] = useState<IUser | undefined>();

    useEffect(() => {
        const loadingStorageData = async () => {
            const storageUserData = localStorage.getItem("@Auth:user");
            const storageUser = storageUserData ? JSON.parse(storageUserData) as IUser : undefined;
            const storageToken = localStorage.getItem("@Auth:token");
    
            if (storageUser && storageToken) {
                setCurrentUser(storageUser);
            }
        };
        loadingStorageData();
    }, []);
    
    const signIn = async ({ email, password }: ILogin) => {
        await postData({
            url: 'login',
            body: { email, password },
        });

        if (error) {
            alert(data);
        } else if (success && data && ('token' in data)) {
            const { user: userData, token } = data as { user: IUser, token: string };
            setCurrentUser(userData);
            localStorage.setItem("@Auth:token", token);
            localStorage.setItem("@Auth:user", JSON.stringify(userData));
        }
    };

    const singOut = () => {
        localStorage.clear();
        setCurrentUser(undefined);
        return <Navigate to="/" />;
      };
  

    return (
        <AuthContext.Provider value={{
            currentUser,
            signIn,
            singOut,
            signed : !!currentUser
        }}>
            {children}
        </AuthContext.Provider>
    )
}
