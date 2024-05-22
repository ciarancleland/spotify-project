import SearchBar from '../searchBar/searchBar'
import './App.css';

function App() {
  return (
    <div>
      <h1>
        Spotify Playlist Creator
      </h1>
      <SearchBar/>
      
      <section id='trackListSection'>
      </section>
      
      <section is='selectedTracks'>
      </section>
    </div>
  );
}

export default App;
