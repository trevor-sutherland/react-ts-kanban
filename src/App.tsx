import React from "react";
import './App.scss';
import Navigation from './components/Navigation/Navigation';
import Card from './components/Kanban/Card/Card';
import KanbanColumn from "./components/Kanban/KanbanColumn/KanbanColumn";

const App = () => {
  return (
    <div className="container-fluid">
        <Navigation />
        <KanbanColumn />
    </div>

  );
};
export default App;
