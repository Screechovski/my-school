import React from "react";
import {MainForm} from "../../molecules/MainForm/MainForm";
import {ResetPasswordForm} from "../../components/ResetPasswordForm/ResetPasswordForm";

export const PageResetPasswordForm = ({}) => {
    return (
        <MainForm cssClass="flex items-center justify-center">
            <ResetPasswordForm />
        </MainForm>
    );
};
