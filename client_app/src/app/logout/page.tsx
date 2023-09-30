import {NextPage} from 'next';
import {LogoutSpinner} from './spinner';

export default function Logout(): NextPage{
    return (
        <div className="logout">
            <LogoutSpinner />
        </div>
        )
}