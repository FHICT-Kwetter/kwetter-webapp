import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { connect, Provider } from 'react-redux';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { store } from "store/store";
import createTheme from "theme/theme";

import HomePage from "./modules/home/pages/home-page/home-page.component";
import ExplorePage from "./modules/explore/pages/explore-page/explore-page.component";
import NotificationPage from "./modules/notifications/pages/notification-page.component";
import MessagesPage from "./modules/messages/pages/messages-page/messages-page.component";
import SettingsPage from "modules/settings/pages/settings-page.component";
import { ThemeState } from "modules/settings/store";
import ProfilePage from "./modules/profile/pages/profile-page/profile-page.component";
import StartPage from "./modules/start-page/pages/start-page/start-page.component";
import ProtectedRoute from "./modules/shared/components/protected-route/protected-route.component";
import { isLoggedIn } from "./modules/shared/utils/auth";

interface AppProps {
    theme: ThemeState
}

const App: React.FC<AppProps> = (props: AppProps) => {

    const theme = createTheme(props.theme.background, props.theme.color);

    const loggedIn = isLoggedIn();

    return (
        <ThemeProvider theme={theme}>
            <Switch>
                <Route exact={true}              path='/'                        component={() => loggedIn ? <Redirect to='/home' /> : <StartPage /> } />
                <ProtectedRoute exact={true}     path='/home'                    Component={HomePage} />
                <ProtectedRoute exact={true}     path='/explore'                 Component={ExplorePage} />
                <ProtectedRoute exact={true}     path='/notifications'           Component={NotificationPage} />
                <ProtectedRoute exact={true}     path='/messages'                Component={MessagesPage} />
                <ProtectedRoute exact={false}    path='/profile/:username?'     Component={ProfilePage} />
                <ProtectedRoute exact={true}     path='/settings'                Component={SettingsPage} />
            </Switch>

        </ThemeProvider>
    );
}

const mapStateToProps = (state) => ({
    theme: state.theme
})

const AppComponent = connect(mapStateToProps)(App);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <React.StrictMode>
                <CssBaseline />
                <AppComponent />
            </React.StrictMode>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
