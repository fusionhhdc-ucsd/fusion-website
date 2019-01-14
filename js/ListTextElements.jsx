'use strict';

class ListTextElements extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const infoTexts = this.props.infoTexts;
    const listItems = infoTexts.map((infoText) => 
      <li key={infoText} >
        {infoText}
      </li>
    );

    return (
      <div>
        {listItems}
      </div>
      
    );
  }
}