import { Routes, BrowserRouter as Router, Route, Navigate } from 'react-router-dom';

import Layout from './layouts/Layout';
import Home from './pages/Home';
import SearchPage from './pages/Search';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Layout>
                            <Home />
                        </Layout>
                    }
                />
                <Route
                    path="/search"
                    element={
                        <Layout>
                            <SearchPage />
                        </Layout>
                    }
                />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Router>
    );
};

export default App;
