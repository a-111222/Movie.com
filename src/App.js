import './App.css';
import Movie from './component/Movie'
function App() {
  const movies =["1","2","3"];

  return (
    <div className="App">
  {movies.map((movie)=>(
    <Movie/>
  ))}
    </div>
  );
}

export default App;
