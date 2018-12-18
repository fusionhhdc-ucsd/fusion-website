'use strict';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>                        
            </button>
            <a className="navbar-brand" href="/index.html">Fusion</a>
          </div>
          <div class="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav">
              <li><a href="/index.html">Home</a></li>
              <li><a href="/about.html">About</a></li>
              <li><a href="/staff.html">Our Staff</a></li>
            </ul>
            <a href="https://tinyurl.com/applyfusionxix" target="_blank">
              <button className="btn btn-primary navbar-btn">Apply</button>
            </a>
          </div>
          
        </div>
      </nav>
    );
  }
}