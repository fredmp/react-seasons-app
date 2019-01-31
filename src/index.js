import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
import MessagePanel from './MessagePanel';

class App extends React.Component {
  state = { latitude: null, errorMessage: null };

  getLatitudeFromUser() {
    window.navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude } }) =>
        this.setState({ latitude, errorMessage: null }),
      err => this.setState({ errorMessage: err.message })
    );
  }

  componentDidMount() {
    this.getLatitudeFromUser();
  }

  renderContent() {
    const { latitude, errorMessage } = this.state;
    const loading = !errorMessage && !latitude;

    if (loading) return <Spinner message="Please accept the location request" />
    if (latitude) return <SeasonDisplay latitude={latitude} />
    return <MessagePanel message={errorMessage} backgroundColor="red" />
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App/>, document.querySelector('#root'));