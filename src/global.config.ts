const isProd = process.env.NODE_ENV === "production";

const GlobalConfig = {

    Apis: {
        IdentityServer: isProd ? 'https://kwetter.org/api/auth' : 'http://localhost:5000',
        ProfileService: 'http://localhost:5001'
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
        tokenUri: isProd ? 'https://kwetter.org/api/auth/connect/token' :  'http://localhost:5000/connect/token',
        authorizationUri: isProd ? 'https://kwetter.org/api/auth/connect/authorize' : 'http://localhost:5000/connect/authorize',
        grantType: 'password',
        scope: 'openid email profile offline_access kweet.list'
    }
}

export default GlobalConfig;
