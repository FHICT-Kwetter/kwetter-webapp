import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { createMuiTheme, Paper, ThemeProvider, } from '@material-ui/core';
import ProfilePage from "../pages/profile-page/profile-page.component";

const lightTheme = createMuiTheme({});

const App : React.FC = () =>
    <ThemeProvider theme={{ ...lightTheme }}>
        <Paper style={{ backgroundColor: '#000', height: '100vh', width: '100vw' }}>
            <Paper style={{ backgroundColor: '#000', height: '100vh', display: 'flex', justifyContent: 'center', maxWidth: '1280px', margin: '0 auto'}}>
                <Switch>
                    <Route exact path='/' component={ProfilePage} />;
                </Switch>
            </Paper>
        </Paper>
    </ThemeProvider>;

export default App;
