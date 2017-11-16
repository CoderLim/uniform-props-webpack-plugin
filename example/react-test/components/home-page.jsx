const styles = {
  h1: {
    fontSize: '18px'
  }
};

class Me extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      me: null
    };
  }

  componentWillMount() {
    setTimeout(() => {
      import('./me.jsx').then(me => {
        this.setState({ me });
      });
    }, 5000);
  }

  render = () => {
    return this.state.me ? <this.state.me.default /> : <span>error</span>;
  }
}

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    Test();
  }

  componentWillMount() {
    require.ensure([], () => {
      this.setState({
        about: require('./about.jsx').default
      });
    })
  }

  render () {
    return <div>
      <h1 style={styles.h1}>Home Page</h1>
      { 'about' in this.state && <this.state.about />}
      <Me prop1="hello"/>
    </div>
  }
}
