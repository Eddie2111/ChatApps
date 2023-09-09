interface IGetCookie {
    (name: string): string | null;
}
const getCookie:IGetCookie = (name:string) => {
    const cookies = document.cookie.split("; ");
    for (const cookie of cookies) {
      const [cookieName, cookieValue] = cookie.split("=");
      if (cookieName === name) {
        return decodeURIComponent(cookieValue);
      }
    }
    return null;
};
export {getCookie}