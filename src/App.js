import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import HomePage from "./components/Home.page";
import RQSuperHerosPage from "./components/RQSuperHeros.page";
import SuperHerosPage from "./components/SuperHeros.page";

const client = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={client}>
      <BrowserRouter>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/super-heroes">Traditional Super Heroes</Link>
              </li>
              <li>
                <Link to="/rq-super-heroes">RQ Super Heroes</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/super-heroes" element={<SuperHerosPage />} />

            <Route path="/rq-super-heroes" element={<RQSuperHerosPage />} />

            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
