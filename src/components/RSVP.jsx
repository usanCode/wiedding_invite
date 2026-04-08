


function RSVP() {
  return (
    <div className="py-16 text-center bg-pink-100">
      <h2 className="text-xl mb-6">RSVP</h2>

      <form className="flex flex-col items-center gap-4">
        <input
          type="text"
          placeholder="Your Name"
          className="p-2 border rounded"
        />

        <select className="p-2 border rounded">
          <option>Will you attend?</option>
          <option>Yes</option>
          <option>No</option>
        </select>

        <button className="bg-pink-500 text-white px-4 py-2 rounded">
          Submit
        </button>
      </form>
    </div>
  );
}

export default RSVP;