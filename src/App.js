import React from "react";
import "./App.css";
import Row from "./Components/Rows/Row";
import requests from "./requests";
import Banner from "./Components/Banner/Banner";
import Nav from "./Components/Navs/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRatedMovies} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Mystery Movies" fetchUrl={requests.fetchMystery} />
      <Row title="SciFi Movies" fetchUrl={requests.fetchSciFi} />
      <Row title="Western Movies" fetchUrl={requests.fetchWestern} />
      <Row title="Animation Movies" fetchUrl={requests.fetchAnimation} />
      <Row title="TV" fetchUrl={requests.fetchTV} />
      <Row
        title="Documentaries Movies"
        fetchUrl={requests.fetchDocumentaries}
      />
    </div>
  );
}

export default App;
