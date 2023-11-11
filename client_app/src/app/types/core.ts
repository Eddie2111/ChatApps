interface IResponseProps{
    id: string;
    iat: string;
    exp: string;
}
interface IProfileProps{
    data: {
        status: number;
        message: string;
        result: {
            _id: string;
            id: string;
            username: string;
            email: string;
            location: string;
            name: string;
            image?: string;
        }
    }
}

export type { IResponseProps, IProfileProps };
