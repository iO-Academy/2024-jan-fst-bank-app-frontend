import { createContext } from "react";

interface IuserInterface {
    firstName?: string,
    lastName?: string,
    email?: string
}
type ContextType =  {
    userInfo : IuserInterface;
    setUserInfo : (userInfo: IuserInterface) => void;
};

const UserContext = createContext<ContextType | null>(null);

export default UserContext;