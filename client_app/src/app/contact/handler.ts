interface IData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    message: string;
}
export default async function Handler(data: IData){
    console.log(data)
    return {
        message: 'received',
        status: 200
    }
}