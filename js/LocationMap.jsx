'use strict';

class LocationMap extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div
        className="text-center"
        style={{
                'margin-left': 'auto',
                'margin-right': 'auto'
        }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3356.8111694209247!2d-117.16551168481942!3d32.71764508099002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d9543fc8a194cd%3A0x64836d4d79a1c138!2sGolden+Hall!5e0!3m2!1sen!2sus!4v1545120776575"
          width="400"
          height="300"
          frameBorder="0"
          style={{border: 0}}
          allowFullScreen>
        </iframe>
      </div>
    );
  }
}