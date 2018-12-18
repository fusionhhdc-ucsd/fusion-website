'use strict';

class Banner extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div id="myCarousel" className="carousel slide" data-ride="carousel">

        <ol className="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>

        <div className="carousel-inner">
          <div className="item active">
            <img src="/images/fusion-xix-banner.jpg" alt="Los Angeles"/>
          </div>

          <div className="item">
            <img src="/images/fusion-xix-banner.jpg" alt="Chicago"/>
          </div>

          <div className="item">
            <img src="/images/fusion-xix-banner.jpg" alt="New York"/>
          </div>
        </div>

        <a className="left carousel-control" href="#myCarousel" data-slide="prev">
          <span className="glyphicon glyphicon-chevron-left"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="right carousel-control" href="#myCarousel" data-slide="next">
          <span className="glyphicon glyphicon-chevron-right"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}