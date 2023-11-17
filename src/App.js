import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Favorites from "./components/Favorites";
import { RecipePage } from "./components/page/RecipePage/RecipePage";
import SearchForm from "./components/SearchForm";
import Page404 from "./components/page/Error404/Error404";
import { RecipePageItem } from "./components/page/RecipePageItem/RecipePageItem";

const App = () => {
  
  return (
       
      <div className="App">
        <Header />
        <main>
        <Routes>
            <Route path="/" element={<SearchForm />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/recipe" element={<RecipePage />} />
            <Route exact path="/recipe/:uri" element={<RecipePageItem />}/>
            <Route path="*" element={<Page404/>}/>
        </Routes>
        </main>
      </div>
    
  );
};

export default App;
