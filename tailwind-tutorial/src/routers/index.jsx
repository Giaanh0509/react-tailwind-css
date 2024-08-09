import { Dashboard } from "../components/shared/Dashboard";
import { User } from "../components/shared/User";

export const publicRoutes = [
    {path: '/', component: Dashboard},
    {path: '/user', component: User},
]