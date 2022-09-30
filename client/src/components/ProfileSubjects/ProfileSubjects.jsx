import {useQuery} from "@tanstack/react-query";
import {QUERY_CONFIG} from "../../assets/constants";
import {Loader} from "../../molecules/CoolLoader/Loader";
import React from "react";
import css from "./ProfileSubjects.module.sass";
import {getSubjects} from "../../api/profile";
import {ProfileSubjectItem} from "./ProfileSubjectItem";

export const ProfileSubjects = () => {
    const {isLoading, isSuccess, data} = useQuery(
        ["profile-subjects"],
        getSubjects,
        QUERY_CONFIG
    );

    if (isLoading) {
        return (
            <div className="p-6 flex items-center justify-center">
                <Loader/>
            </div>
        );
    }

    if (isSuccess) {
        return (
            <ul className={css.profileSubjects}>
                {data.data.map((subject) => (
                    <li key={subject.id} className={css.profileSubjects__item}>
                        <ProfileSubjectItem
                            id={subject.id}
                            title={subject.title}
                            image={subject.image}
                            description={subject.description}
                            years={subject.years}
                        />
                    </li>
                ))}
            </ul>
        );
    }

    return <span></span>;
};
