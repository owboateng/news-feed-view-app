/*
 * This is a demo component the Eletrode app generator included
 * to show using Milligram CSS lib and Redux
 * store for display HTML elements and managing states.
 *
 * To start your own app, please replace or remove these files:
 *
 * - this file (home.jsx)
 * - demo-buttons.jsx
 * - demo-pure-states.jsx
 * - demo-states.jsx
 * - reducers/index.jsx
 * - styles/*.css
 *
 */

import React from "react";
import { connect } from "react-redux";
import Sidebar from './sidebar';
import Content from './content';
import '../styles/home.css';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Sidebar/>
        <Content />
      </div>
    );
  }
}

Home.propTypes = {};

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  dispatch => ({ dispatch })
)(Home);
