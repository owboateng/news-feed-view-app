import React from "react";
import {withRouter} from 'react-router-dom';
import styles from '../styles/sidebar.css';

class Sidebar extends React.Component {

    constructor(props){
        super(props);

        this.paths = [
            "general",
            "business",
            "entertainment",
            "health",
            "science",
            "sports",
            "technology"
        ];
    }

    capitalize(item) {
        return item.charAt(0).toUpperCase() + item.substring(1);
    }

  render() {
    let current_path = (this.props.match.params[0] === '') ? this.paths[0] : this.props.match.params[0];
    let sidebar_links = this.paths.map((path, index) => {
        let link = '';
        if (current_path === path){
            link = <li styleName={"active"} key={index}><a href={"/" + path}>{this.capitalize(path)}</a></li>
        }
        else {
            link = <li key={index}><a href={"/" + path}>{this.capitalize(path)}</a></li>;
        }

        return link;
    });
    return (
      <div styleName={"styles.sidebar"}>
        <nav styleName={"styles.nav"}>
        <h3>Categories</h3>
            <ul>
                {sidebar_links}
            </ul>
        </nav>
      </div>
    );
  }
}

export default withRouter(Sidebar);