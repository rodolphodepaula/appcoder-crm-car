import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CircularProgress } from '@mui/material';


const App = () => (
  <Router>
    <Suspense fallback={<div className="d-flex justify-content-center mt-5 pt-5"><CircularProgress /></div>}>
      <Routes>
        <Route exact path="/" Component={() => ( <h1>Home</h1> )} />
      </Routes>
    </Suspense>
  </Router>
);

export default App;
