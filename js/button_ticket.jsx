'use strict';

class ButtonTicket extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
     <div className="text-center center-block">
          <a href="#">
            <button
              type="button"
              class="btn-lg btn-primary btn-ticket">
              Buy Tickets
            </button>
          </a>
      </div>
    );
  }
}
