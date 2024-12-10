import React from 'react';
import { Route, Switch } from 'wouter';
import { Layout } from './components/Layout';
import { ExerciseAdmin } from './pages/exercises/ExerciseAdmin';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <div className="container mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold mb-4">Welcome to 40s</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Start your workout journey with 40-second exercise intervals.
              Choose a session from the menu to begin.
            </p>
          </div>
        </Route>
        <Route path="/admin/exercises" component={ExerciseAdmin} />
      </Switch>
    </Layout>
  );
}

export default App;