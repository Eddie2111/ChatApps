import {NextPage} from 'next';
import {LogoutSpinner} from './spinner';
import logout from './handle';

export default function Logout(): NextPage{

    async function handleLogout(): Promise<void>{
        await logout();
    }
    handleLogout();
    return (
        <div className="logout">
            <LogoutSpinner />
        </div>
        )
}