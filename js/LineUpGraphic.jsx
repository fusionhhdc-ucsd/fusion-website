'use strict';

class LineUpGraphic extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <h2>
          Line Up
        </h2>
        <figure className="figure">
          <img
            src={this.props.image}
            className="figure-img img-fluid rounded"
            alt={this.props.graphicAltText}
          />
          <figcaption
            className="figure-caption"
          >
            Designed by {this.props.graphicDesigner}
          </figcaption>
        </figure>
      </div>
      
    );
  }
}