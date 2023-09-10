interface IDataProps{
    body: string;
    mood: string;
    file: any;
}
export default function CreatingPostFunction(data:IDataProps){
    console.log(data)
}