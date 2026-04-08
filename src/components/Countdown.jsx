

import { useEffect, useState } from "react";

function Countdown() {
  const weddingDate = new Date("2026-12-20");
  const [days, setDays] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const diff = weddingDate - new Date();
      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      setDays(d);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center py-16 bg-pink-50">
      <h2 className="text-xl mb-4">Countdown</h2>
      <p className="text-3xl font-bold">{days} Days Left 🎉</p>
    </div>
  );
}

export default Countdown;