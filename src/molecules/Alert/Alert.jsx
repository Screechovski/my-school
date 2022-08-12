import React, {useEffect} from "react";
import PropTypes from "prop-types";
import css from "./Alert.module.sass";
import {ShortText} from "../../molecules/ShortText/ShortText";
import {WarningIconSVG} from "../../svg/WarningIconSVG";
import {SuccessIconSVG} from "../../svg/SuccessIconSVG";
import {ErrorIconSVG} from "../../svg/ErrorIconSVG";
import {InfoIconSVG} from "../../svg/InfoIconSVG";
import {useDispatch} from "react-redux";
import {removeAlert} from "../../store/alerts/alertsSlice";

export const Alert = ({type, message, id}) => {
    const dispatch = useDispatch();
    let timer = null;

    const getSVG = () => {
        switch (type) {
            case "warning": {
                return <WarningIconSVG cssClass={css.alert__svg} />;
            }
            case "success": {
                return <SuccessIconSVG cssClass={css.alert__svg} />;
            }
            case "error": {
                return <ErrorIconSVG cssClass={css.alert__svg} />;
            }
            case "info": {
                return <InfoIconSVG cssClass={css.alert__svg} />;
            }
        }
    };

    useEffect(() => {
        timer = setTimeout(() => dispatch(removeAlert({id})), 5000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={css.alert + " " + css[`alert_${type}`]} onClick={() => dispatch(removeAlert({id}))}>
            <i className={css.alert__icon}>{getSVG()}</i>
            <ShortText
                text={message}
                lineCount={2}
                tagName="p"
                lineHeight={1.2}
                parentClass={css.alert__text}
            />
        </div>
    );
};

Alert.propTypes = {
    type: PropTypes.oneOf(["success", "error", "warning", "info"])
};
