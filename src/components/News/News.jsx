
import React from 'react';
import classes from './News.module.css'

const News = (props) => {
    return(
        <div>
        <div className={classes.item}>
            <a>News</a>
        </div>

            <div className={classes.newsImg}>
                <img src={require("../../assets/images/news2.png")} alt="news"/>
            </div>

        </div>
    )
};

export default News;