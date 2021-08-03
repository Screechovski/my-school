import React from 'react';
import { connect } from 'react-redux';
import URLS from '../../assets/urls';
import { initPostsAC } from '../../redux/actionCreators';
import RNewsCard from '../newsCard/newsCard';
import css from './sidebar.module.sass';

class Sidebar extends React.Component {
    componentDidMount(){
        const {initNews} = this.props;
        fetch(URLS.posts)
            .then(r=>r.json())
            .then(d=>d.slice(0, 20))
            .then(initNews)
            .catch(console.warn)
    }

    render(){
        const {parentClass, title, posts: {postsLoading, posts}} = this.props;

        return (
            <aside className={`${css.sidebar} ${parentClass}`}>
                <h2 className={css.sidebar__title}>{title}</h2>
                <ul className={css.sidebar__list}>
                    {posts.slice(0, 6).map(({id, title, createdAt, message, avatar}) => 
                        <li className={css.sidebar__item} key={id}>
                            <RNewsCard
                                loading={postsLoading}
                                title={title} 
                                id={id}
                                date={createdAt.slice(0,10)} 
                                body={message} 
                                mainImgUrl={avatar}
                            />
                        </li>)
                    }
                </ul>
            </aside>
        );
    }
}

const mapStateToProps = state => {
    return {
        posts: state.posts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        initNews: posts => {
            dispatch(initPostsAC(posts))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);