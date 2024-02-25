import { useLayoutEffect, useState } from 'react';
import Home from './pages/home/Home';

function App() {
  const [bg, setBg] = useState('/bg1.webp');

  useLayoutEffect(() => {
    const newBg = "/bg" + (Math.floor(Math.random() * 7) + 1) + ".webp" ;

    setBg(newBg)
  }, []);
  
  return (
    <main
    className={`w-full relative min-h-screen bg-[url('${bg}')] bg-fixed bg-center z-0 bg-no-repeat	bg-cover after:absolute after:top-0 after:z-[-1] after:w-full after:h-full after:bg-gradient-to-r from-gray-900/20 to-gray-900/20`}
    >
      <section className="p-4 h-screen flex items-center justify-center">
        <Home />
      </section>
    </main>
  );
}

export default App;
