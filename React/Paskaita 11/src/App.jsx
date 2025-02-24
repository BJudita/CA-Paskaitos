import { useState } from 'react';
import SlideInPanel from './SideInPanel/SideInPanel';


function App() {
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsPanelOpen(true)}>Atidaryti Slide-in Panelį</button>
      {isPanelOpen && <SlideInPanel closePanel={() => setIsPanelOpen(false)} />}
    </>
  );
}

export default App;