interface IData {
    firstName: String;
    lastName: String;
    email: String;
    phone: String;
    message: String;
}
export default async function Handler(data: IData){
    console.log(data)
    return {
        message: 'received',
        status: 200
    }
}