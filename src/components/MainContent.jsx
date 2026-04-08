

import CoupleSection from "./CoupleSection";
import EventDetails from "./EventDetails";
import Countdown from "./Countdown";
import Gallery from "./Gallery";
import RSVP from "./RSVP";
import MusicPlayer from "./MusicPlayer";

function MainContent() {
  return (
    <div className="bg-white">
      <MusicPlayer />
      <CoupleSection />
      <EventDetails />
      <Countdown />
      <Gallery />
      <RSVP />
    </div>
  );
}

export default MainContent;