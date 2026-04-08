

function EventDetails() {
  return (
    <div className="text-center py-16">
      <h2 className="text-xl font-semibold mb-6">Event Details</h2>

      <p>📅 Date: 20 December 2026</p>
      <p>⏰ Time: 3:00 PM</p>
      <p>
        📍 Location: 
        <a
          href="https://maps.google.com"
          className="text-pink-500 ml-2"
          target="_blank"
        >
          View Map
        </a>
      </p>
    </div>
  );
}

export default EventDetails;