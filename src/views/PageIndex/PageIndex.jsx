import React, { useEffect } from 'react';
import CONSTANTS from '@/assets/constants';
import IndexSection from '@/molecules/IndexSection/IndexSection';
import css from './PageIndex.module.sass'
import { myFetch } from '@/assets/helper';

let fixStrict = false;

const PageIndex = () => {

    useEffect(() => {
        if (fixStrict) return;

        fixStrict = true;

        myFetch("/post/20")
            .then(console.log)
            .catch(console.warn)

        myFetch("/review/20")
            .then(console.log)
            .catch(console.warn)

        myFetch("/posts")
            .then(console.log)
            .catch(console.warn)

        myFetch("/reviews")
            .then(console.log)
            .catch(console.warn)
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
                        <div></div>
                    </IndexSection>
                </ul>
            </div>
        </section>
    )
}

export default PageIndex;