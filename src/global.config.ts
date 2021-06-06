const isProd = process.env.NODE_ENV === "production";

const GlobalConfig = {

    Apis: {
        IdentityServer: isProd ? 'https://www.kwetter.org/api/auth' : 'http://localhost:5000/api/auth',
        ProfileService: isProd ? 'https://www.kwetter.org/api/profile' : 'http://localhost:5001/api/profile',
        KweetService: isProd ? 'https://www.kwetter.org/api/kweets' : 'http://localhost:5005/api/kweets',
    },

    LocalStorage: {
        AccessTokenKey: "kwetter-access-token",
        RefreshTokenKey: "kwetter-refresh-token",
        ThemeBackgroundKey: "kwetter-theme-background",
        ThemeColorKey: "kwetter-theme-color"
    },

    OAuthClient: {
        clientId: 'kwetter-web-app',
        clientSecret: 'kwetter-web-app-secret',
        grantType: 'password',
        scope: 'openid email profile offline_access kweet.list',
        tokenUri: isProd ? 'https://www.kwetter.org/api/auth/connect/token' : 'http://localhost:5000/api/auth/connect/token',
        authorizationUri: isProd ? 'https://www.kwetter.org/api/auth/connect/authorize' : 'http://localhost:5000/api/auth/connect/authorize',
    }
}

export default GlobalConfig;
