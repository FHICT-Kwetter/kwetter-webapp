import React from 'react';
import MainTemplate from "../../../shared/templates/main-template/main-template.component";
import ProfileHeader from "../../components/profile/profile-header.component";


const ProfilePage: React.FC = () => {
    return (
        <MainTemplate activeMenuOption='profile'>
            <ProfileHeader />
        </MainTemplate>
    )
};

export default ProfilePage;
