import Form from './form';
import GetData from './handle';

interface ServerSideProps{
    name: string;
    email: string;
}

export default function CreateProfile(){
    async function GetCookieData(){
        const response = await GetData<ServerSideProps | ''>();
        return response;
    }
    const maindata = GetCookieData();
    return(
        <Form dataset={maindata}/>
    )
};
