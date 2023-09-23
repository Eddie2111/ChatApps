import Top from './top';
import Intro from './intro';
import Handler from './handler';
export default function Profile(): JSX.Element{
    async function getData(){
        const response = await Handler();
        return response;
    }
    const data = getData();
    return(
        <>
        <Top/>
        <Intro/>
        </>
    )
}
