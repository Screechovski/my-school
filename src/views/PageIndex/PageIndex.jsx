import React, {memo} from 'react';
import css from './PageIndex.module.sass'
import {CONSTANTS} from "../../assets/constants";
import {IndexSection} from "../../molecules/IndexSection/IndexSection";
import {IndexNews} from "../../components/IndexNews/IndexNews";
import {IndexEvents} from "../../components/IndexEvents/IndexEvents";

export const PageIndex = memo(() => {
    return (
        <section className={css.index + " r-container"}>
            <img src="" className={css.index__slider}/>

            <ul className={css.index__sections}>
                <IndexSection
                    name="Новости"
                    nameAll="все новости"
                    linkPath={CONSTANTS.NAV_LINKS.news.path}
                >
                    <IndexNews/>
                </IndexSection>
                <IndexSection
                    name="Анонсы мероприятий"
                    nameAll="все анонсы мероприятий"
                    linkPath={"#"}
                >
                    <IndexEvents/>
                </IndexSection>
            </ul>
        </section>
    )
})