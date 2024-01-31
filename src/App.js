
// import './App.css';
// import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './Component/Header/Header';


// function App() {
//   return (

//     <div className="App">
//    <Router>
//     <Header/>
//     <Routes>
//       <Route index element={<h1>Ram Ram sariyane</h1>}></Route>
//     <Route path="movie/:id" element={<h1>Movie detail page</h1>}></Route>
//     <Route path="movies/:type" element={<h1>movies list page</h1>}></Route>
//     <Route path="/*" element={<h1>Error page</h1>}></Route>
//     </Routes>
//    </Router> 
   
//     </div>
//   );
// }

// export default App;


import './App.css'; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from './Component/Header/Header';
import Home from './pages/home/home';
import MovieList from './Component/movieList/movieList';
import Movie from './pages/movieDetail/movie';

function App() {
  return (
    <div className="App">
        <Router>
          <Header />
            <Routes>
                <Route index element={<Home />}></Route>
                <Route path="movie/:id" element={<Movie />}></Route>
                <Route path="movies/:type" element={<MovieList />}></Route>
                <Route path="/*" element={<h1>Error Page</h1>}></Route>
            </Routes>
        </Router>
    </div>
  );
}

export default App;