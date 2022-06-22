import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import ProfileForm from "./ProfileForm";
import { getProfile, saveProfile } from "../../redux/profile-reduser";
import { useParams, useNavigate } from "react-router-dom";
import { compose } from "redux";
import { getProfileData } from "../../redux/profile-selector";
import { toast } from 'react-toastify'
import { getCurrentPage } from "../../redux/users-selector";


const ProfileContainer = ({currentPage, profile, params, getProfile, saveProfile }) => {
    let userId = params.userId

    let navigate = useNavigate()
    
    useEffect(() => {
        getProfile(userId) 
    }, [userId, getProfile])

    const onSubmit = (formData) => {

        saveProfile(formData, userId).then(() => {
            navigate('/users/' + currentPage)
            toast.success('Update data success!')
        }).catch(() => {
            toast.error('Some occured error')
        })
    }

    return (
        <>
            <ProfileForm initialValues={profile}  onSubmit={onSubmit} profile={profile} />
        </>
    )
}

const withLocation = ProfileContainer => props => {
    let params = useParams()
    return <ProfileContainer {...props} params={params} />;
};

let mapStateToProps = (state) => ({
    profile: getProfileData(state),
    currentPage: getCurrentPage(state),
})

export default compose(
    connect(mapStateToProps, { getProfile, saveProfile }),
    withLocation,
)(ProfileContainer)

