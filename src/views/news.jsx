import React from 'react';
import { connect } from 'react-redux';
import URLS from '../assets/urls';
import { initPostsAC } from '../redux/actionCreators';
import RMain from './../components/mainContent/mainContent';
import RNewsCard from './../components/newsCard/newsCard';

class News extends React.Component {
    componentDidMount(){
        const {initNews} = this.props;
        fetch(URLS.posts)
            .then(r=>r.json())
            .then(d=>{
                console.log(d);
                return d;
            })
            .then(d=>d.slice(0, 20))
            .then(initNews)
            .catch(console.warn)
    }

    render(){
        const {news: {postsLoading, posts}} = this.props;
        
        return (
            <div className="r-container page-body__r-container">     
                <RMain 
                    parentClass="page-body__content" 
                    title="Новости" 
                    typeContent="news" 
                >
                    {posts.map(({avatar, id, createdAt, title, message})=>
                        <RNewsCard
                            key={id}
                            loading={postsLoading}
                            title={title} 
                            id={id}
                            date={createdAt.slice(0,10)} 
                            body={message} 
                            mainImgUrl={avatar}
                        />    
                    )} 
                </RMain>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    news: state.posts
})

const mapDispatchToProps = dispatch => ({
    initNews: posts => {
        dispatch(initPostsAC(posts))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(News);