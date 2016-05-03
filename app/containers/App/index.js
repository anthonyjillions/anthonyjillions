
import React, { Component } from 'react';
import Icon from 'components/Icon';
import SideBar from 'components/SideBar';
import styles from './styles.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.state.showSideBar = false;
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      showSideBar: this.props.location.pathname !== nextProps.location.pathname ? false : null,
    });
  }

  closeSidebar() {
    this.setState({ showSideBar: false });
  }

  openSideBar() {
    this.setState({ showSideBar: true });
  }

  render() {
    const icon = {
      style: {
        cursor: 'pointer',
        color: 'red',
      },
    };
    return (
      <div className={styles.App}>
        <div className={styles.Header} onClick={() => this.openSideBar()}>
          <Icon name="bars" {...icon} />
        </div>
          {this.state.showSideBar ?
            <SideBar close={() => this.closeSidebar()} />
          :
            null
          }
        <div className={styles.Content}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.node,
  location: React.PropTypes.any,
};

export default App;
