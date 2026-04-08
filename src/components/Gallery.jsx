

function Gallery() {
  return (
    <div className="py-16 text-center">
      <h2 className="text-xl mb-6">Gallery</h2>

      <div className="grid grid-cols-2 gap-4 px-6">
        <img src="/img1.jpg" className="rounded" />
        <img src="/img2.jpg" className="rounded" />
        <img src="/img3.jpg" className="rounded" />
        <img src="/img4.jpg" className="rounded" />
      </div>
    </div>
  );
}

export default Gallery;