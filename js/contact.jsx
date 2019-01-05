'use strict';

class Contact extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <NavBar/>
        <Banner/>
        <div>
          <h2>
            Contact Info
          </h2>
          <table class="table">
            <tbody>
              <tr>
                <td>Facebook:</td>
                <td>
                  <a
                    href="http://www.facebook.com/fusionhhdc"
                  >
                    http://www.facebook.com/fusionhhdc
                  </a>
                </td>
              </tr>
              <tr>
                <td>Email:</td>
                <td>fusionhhdc.marketing@gmail.com</td>
              </tr>
            </tbody>
          </table>
        </div>
        <Footer/>
      </div>
      
    );
  }
}

// Render the App.
const dom_container = document.querySelector('#contact-container');
ReactDOM.render(<Contact/>, dom_container);