

function Gallery() {
  return (
    <div className="py-16 text-center">
      <h2 className="text-xl mb-6">Gallery</h2>

      <div className="grid grid-cols-2 gap-4 px-6">
        <img src="/gallery1.PNG" className="rounded" />
        <img src="/gallery2.PNG" className="rounded" />
        <img src="/gallery3.PNG" className="rounded" />
        <img src="/gallery4.PNG" className="rounded" />
      </div>
    </div>
  );
}

export default Gallery;