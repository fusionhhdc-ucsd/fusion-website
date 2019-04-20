'use strict';

class Judge extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
    <figure className="figure">
        <img
        src={this.props.image}
        className="figure-img img-fluid rounded"
        alt={this.props.graphicAltText}
        />
    </figure>
      
    );
  }
}