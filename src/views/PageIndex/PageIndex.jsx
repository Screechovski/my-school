import React, {memo, useEffect} from 'react';

import css from './PageIndex.module.sass'
import {CONSTANTS} from "../../assets/constants";
import {IndexSection} from "../../molecules/IndexSection/IndexSection";
import {IndexNews} from "../../components/IndexNews/IndexNews";
import {IndexEvents} from "../../components/IndexEvents/IndexEvents";

let fixStrict = false;

export const PageIndex = memo((

) => {

    useEffect(() => {
        if (fixStrict) return;

        fixStrict = true;

    }, [])

    return (
        <section className={css.index + " page-body r-container"}>
            <div className={css.index__container}>

                <img src="" className={css.index__slider} />

                <ul className={css.index__sections}>
                    <IndexSection
                        name="Новости"
                        nameAll="все новости"
                        linkPath={CONSTANTS.NAV_LINKS.news.path}
                    >
                        <IndexNews />
                    </IndexSection>
                    <IndexSection
                        name="Анонсы мероприятий"
                        nameAll="все анонсы мероприятий"
                        linkPath={"#"}
                    >
                        <IndexEvents />
                    </IndexSection>
                </ul>
            </div>
        </section>
    )
})