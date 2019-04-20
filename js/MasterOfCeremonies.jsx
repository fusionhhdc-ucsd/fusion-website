'use strict';

class MasterOfCeremonies extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <h2>
          Master of Ceremonies (MC)
        </h2>
        <figure className="figure">
          <img
            src={this.props.image}
            className="figure-img img-fluid rounded"
            alt={this.props.graphicAltText}
          />
        </figure>
      </div>
      
    );
  }
}