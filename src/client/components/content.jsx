import React from "react";
import {withRouter} from 'react-router-dom';
import {news_api_info} from './constants';
import axios from 'axios';
import styles from '../styles/content.css';

class Content extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        category: '',
        news_items: []
    }
    this.fetchNews = this.fetchNews.bind(this);
  }

  componentDidMount(){
      let clicked_category = 'general';
      if (this.props.match.params[0] !== ''){
        clicked_category = this.props.match.params[0];
      }
      this.setState({category: clicked_category});
      this.fetchNews(clicked_category);
  }

  fetchNews(category) {
      axios.get(news_api_info.headlines_url, {
        params: {
            category: category,
            apiKey: news_api_info.api_key,
            country: 'us'
        }
      })
      .then((response) => {
          this.setState({news_items: response.data.articles});
      })
      .catch((error) =>{
          console.log(error);
      })
  }

  stripPattern(text) {
      return text.replace(/\[.*\]/g, "");
  }

  render() {
      let news_elements = this.state.news_items.map((news, index) => {
          if (news.title && news.content && news.url){
            return <div key={index}>
                <h5>{news.title}</h5>
                <span>{this.stripPattern(news.content)}</span>
                <a href={news.url} target="_blank">read more</a> 
            </div>;
          }
      }
      );
    return (
      <div styleName={"styles.content"}>
      {news_elements}
      </div>
    );
  }
}
export default withRouter(Content);