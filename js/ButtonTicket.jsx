'use strict';

class ButtonTicket extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
     <div className="text-center center-block">
          <a
            href="https://www.eventbrite.com/e/fusion-xix-hip-hop-dance-competition-tickets-57350062581"
            target="_blank"
          >
            <button
              type="button"
              className="btn-lg btn-primary btn-ticket">
              Buy Tickets
            </button>
          </a>
      </div>
    );
  }
}
