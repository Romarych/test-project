import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import ProfileForm from "./ProfileForm";
import { getProfile, saveProfile } from "../../redux/profile-reduser";
import { useParams, useNavigate } from "react-router-dom";
import { compose } from "redux";
import { getProfileData } from "../../redux/profile-selector";
import { toast } from 'react-toastify'


const ProfileContainer = ({ profile, params, getProfile, saveProfile }) => {
    let userId = params.userId

    let navigate = useNavigate()
    
    useEffect(() => {
        getProfile(userId) 
    }, [userId, getProfile])

    const onSubmit = (formData) => {

        saveProfile(formData, userId).then(() => {
            navigate('/users')
            toast.success('Update data succes!')
        }).catch(() => {
            toast.error('Some ocured eror')
        })
    }

    return (
        <>
            <ProfileForm initialValues={profile}  onSubmit={onSubmit} profile={profile} params={params} />
        </>
    )
}

const withLocation = ProfileContainer => props => {
    let params = useParams()
    return <ProfileContainer {...props} params={params} />;
};

let mapStateToProps = (state) => ({
    profile: getProfileData(state)
})

export default compose(
    connect(mapStateToProps, { getProfile, saveProfile }),
    withLocation,
)(ProfileContainer)

