import { UpdateFollower } from 'react-mouse-follower';
import Hero from './components/Hero';

function App() {
  return (
    <div className="overflow-x-hidden">
      <UpdateFollower
        mouseOptions={{
          backgroundColor: 'white',
          zIndex: 10,
          followSpeed: 1.5,
        }}
      >
        <Hero />
      </UpdateFollower>
    </div>
  );
}

export default App;
