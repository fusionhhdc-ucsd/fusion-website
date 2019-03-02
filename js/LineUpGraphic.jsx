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
        <img
          class="img-fluid"
          src={this.props.image}
        />
      </div>
      
    );
  }
}