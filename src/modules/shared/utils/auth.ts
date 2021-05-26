import jwt, { JwtPayload } from 'jwt-decode';
import GlobalConfig from 'global.config';

const decodeToken = () => {
    return jwt<JwtPayload>(localStorage.getItem(GlobalConfig.LocalStorage.AccessTokenKey) as string);
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

export const isLoggedIn = (): boolean => {
    return localStorage.getItem(GlobalConfig.LocalStorage.AccessTokenKey) != null && !isTokenExpired();
}

export const refreshToken = () => {
    fetch(`${GlobalConfig.OAuthClient.tokenUri}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8', },
        body: new URLSearchParams({
            'client_id': GlobalConfig.OAuthClient.clientId,
            'client_secret': GlobalConfig.OAuthClient.clientSecret,
            'grant_type': 'refresh_token',
            'scope': GlobalConfig.OAuthClient.scope,
            'refresh_token': localStorage.getItem(GlobalConfig.LocalStorage.RefreshTokenKey) as string,
        })
    }).then(data => {
        data.json().then(responseBody => {
            if (data.ok){
                localStorage.setItem(GlobalConfig.LocalStorage.AccessTokenKey, responseBody.access_token);
                localStorage.setItem(GlobalConfig.LocalStorage.RefreshTokenKey, responseBody.refresh_token);
            } else {
                localStorage.removeItem(GlobalConfig.LocalStorage.AccessTokenKey);
                localStorage.removeItem(GlobalConfig.LocalStorage.RefreshTokenKey);
            }
        })
    })
}

export const logout = () => {
    localStorage.removeItem(GlobalConfig.LocalStorage.AccessTokenKey);
    localStorage.removeItem(GlobalConfig.LocalStorage.RefreshTokenKey);

    if (process.env.NODE_ENV === 'production'){
        window.location.href = 'https://www.kwetter.org';
        return false;
    } else {
        window.location.href = 'http://localhost:3000';
        return false;
    }
}
