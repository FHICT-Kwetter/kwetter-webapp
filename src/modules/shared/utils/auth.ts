import jwt, { JwtPayload } from 'jwt-decode';

const LOCALSTORAGE_ACCESS_TOKEN_KEY = "kwetter-access-token";
const LOCALSTORAGE_REFRESH_TOKEN_KEY = "kwetter-refresh-token";

const decodeToken = () => {
    return jwt<JwtPayload>(localStorage.getItem(LOCALSTORAGE_ACCESS_TOKEN_KEY) as string);
}

const getTokenExpirationDate = (): Date => {
    const token = decodeToken();

    const issuedAt = token.iat as number;
    const expiresAt = token.exp as number;

    const tokenLifetime = expiresAt - issuedAt;

    return new Date(issuedAt * 1000 + tokenLifetime * 1000);
}

export const isTokenExpired = (): boolean => {
    const expirationDate = getTokenExpirationDate();
    const currentDate = new Date();

    return expirationDate < currentDate;
}
