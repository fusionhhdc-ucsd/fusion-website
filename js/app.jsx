'use strict';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <h1>Fusion XIX</h1>
        <SocialMedia href="http://www.facebook.com/fusionhhdc" company="facebook"/>
      </div>
      
    );
  }
}

// Render the App.
const dom_container = document.querySelector('#app-container');
ReactDOM.render(<App/>, dom_container);