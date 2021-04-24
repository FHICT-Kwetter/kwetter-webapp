import React from 'react';
import MainTemplate from "../../../shared/templates/main-template/main-template.component";
import Profile from "../../../shared/components/profile/profile.component";


const ProfilePage: React.FC = () => {
    return (
        <MainTemplate activeMenuOption='profile'>
            <Profile />
        </MainTemplate>
    )
};

export default ProfilePage;
