import LibrarySong from './librarySong'
import navBack from '../images/navBack.jpg';

const Library = ({ songs, setCurrentSong, audioRef, isPlaying, setSongs, libraryStatus }) => {

  return (
    <div className={`library ${libraryStatus ? "active-library" : ""}`}>
      <div className="library-header" style={{ backgroundImage: `url(${navBack})` }} >
        <h2>Library</h2>
      </div>
      <div className="library-songs">
        {songs.map((song) => <LibrarySong 
          audioRef={audioRef}
          setCurrentSong={setCurrentSong} 
          song={song} 
          key={song.id} 
          isPlaying={isPlaying}
          songs={songs}
          setSongs={setSongs}
        />)}

      </div>
    </div>
  );
}
  
export default Library;