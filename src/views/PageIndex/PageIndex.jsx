import React, { useEffect } from 'react';
import CONSTANTS from '@/assets/constants';
import IndexSection from '@/molecules/IndexSection/IndexSection';
import css from './PageIndex.module.sass'
import { myFetch } from '@/assets/helper';
import { IndexNews } from '@/components/IndexNews/IndexNews';

let fixStrict = false;

const PageIndex = () => {

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
                        <span />
                    </IndexSection>
                </ul>
            </div>
        </section>
    )
}

export default PageIndex;