import { Accounts } from "@pages/api/accounts/getUserAccount";
import { User } from "./getUser";

export const activeUser = () => {
    const account = Accounts.filter(acc => acc.userId.toLowerCase() === User?.id?.toLowerCase());
    const user = account[0]
    return user
}