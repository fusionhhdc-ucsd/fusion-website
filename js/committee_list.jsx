'use strict';

class CommitteeList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="card-columns">
        <Committee
          title="Communications"
          description="Communications is part of the internal operations of
            FUSION Hip Hop Dance Competition Staff, working very closely with
            productions to ensure a successful FUSION. We are in charge of
            reaching out to dance teams, judges, and MCs from all over who
            are interested in participating in FUSION. We inform them of
            deadlines, collect materials, and answer any concerns or questions
            they may have before the day of FUSION. On the day of FUSION,
            we are responsible for checking in teams, ushering judges/MCs,
            and finalizing scores as dancers compete."
        />
        <Committee
          title="Decorations"
          description="The Fusion Decorations Committee is one of the more
            artistic committees that helps put the show together. Deco members
            work together on the stage banner for Fusion KickOff, the Fusion
            backdrop, and other decorations for the venue, including a new
            instagrammable prop wall for visitors and dancers to take pictures
            at. Despite being a space to build on each other’s artistic ideas,
            Deco provides the hugely rewarding experience of having members’
            artwork and hard work donning the background of every dance
            performance at the event."
        />
        <Committee
          title="Graphics"
          description="Graphics is responsible for creating the visuals that
            best represent FUSION and our theme. We work with the Marketing and
            Sponsorship committees to make graphics for flyers, posters,
            t-shirts, social media banners, and more. As the Graphics
            committee, we have the freedom to think creatively and work
            collaboratively to produce our best designs."
        />
        <Committee
          title="Marketing"
          description="Marketing establishes and enforces the image of FUSION
            as an organization with the purpose of promoting our events, most
            notably Kickoff and FUSION Dance Competition. We do advertising on
            and off campus, as well as online. We are in charge of the website
            and social media platforms, ensuring that content is up to date and
            publicized. Before and day-of the competition, we handle tickets
            sales, and during our shows, we manage raffles and giveaways."
        />
        <Committee
          title="Media"
          description="The media committee advertises and captures the Fusion
            experience through photograpy and videography. This involves the
            production of videos promoting the event, taking photos the day of,
            and more!"
        />
        <Committee
          title="Outreach"
          description="The goal of the Outreach committee is to help FUSION
            give back to the community from both within and out of UCSD. We
            plan events and other activities that help FUSION, as a non-profit
            organization, reach out to not only the UCSD dance community but
            also to the community of the greater San Diego Area. As FUSION's
            newest committee we want to brainstorm and work together to find
            ways to use the resources that FUSION has and set forth a bigger
            focus on community service."
        />
        <Committee
          title="Productions"
          description="Productions Committee is the backstage manager for
            FUSION day of. In preparation for competition day, our committee
            handles all event logistics, detailing an itinerary for both Fusion
            Staff and the dance teams. Productions is also in charge of
            planning FUSION Kickoff, an on-campus event showcasing the UCSD
            Dance Community."
        />
        <Committee
          title="Sponsorship"
          description="Sponsorship’s focus is to obtain sponsors to help
            support FUSION, with the form of support varying from actual
            sponsorships, gift or monetary donations, or fundraisers. Thus, the
            main duty of the sponsorship committee is to contact various
            businesses in the San Diego area through phone calls, emailing, and
            even face to face interactions with the company and its
            representatives, in order to find and secure partnerships with
            those who would be interested in supporting FUSION. In addition,
            sponsorship is largely in charge of handling potential vendors on
            the day of FUSION. The majority of Sponsorship work is done outside
            of FUSION staff meeting, while during meeting, we will give updates,
            assign new companies, and learn new techniques to market FUSION,
            overall acquiring valuable and transferable skills in professional
            communication with businesses."
        />
        <Committee
          title="Welcoming"
          description="Welcoming is the committee that is in charge of
          providing all important information to the teams and is their
          point-of-contact day-of Fusion. We are also responsible for ensuring
          that all teams have a positive and amicable experience at FUSION."
        />
      </div>
    );
  }
}
