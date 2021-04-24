const GlobalConfig = {

    Apis: {
        IdentityServer: 'http://localhost:5000',
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
        tokenUri: 'http://localhost:5000/connect/token',
        authorizationUri: 'http://localhost:5000/connect/authorize',
        grantType: 'password',
        scope: 'openid email profile offline_access kweet.list'
    }
}

export default GlobalConfig;
