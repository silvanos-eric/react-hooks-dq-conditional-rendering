import React, { useState } from "react";
import MenuBar from "./MenuBar";
import { Profile, Photos, Cocktails, Pokemon } from "./pages";

function MainBox() {
  /*
    Replace the code below! Depending on what menu item is selected in the menu, 
    I should render either a Profile, Photos, Cocktails, or Pokemon component.
    Think of a way to track which menu item was selected. 
    - Which component should have state? 
    - Which component should have methods to control state? 
    - Where should these methods be called?
  */

  const [viewName, setViewName] = useState("profile");

  const viewMap = {
    profile: Profile,
    photos: Photos,
    cocktails: Cocktails,
    pokemon: Pokemon,
  };

  const ViewComponent = viewMap[viewName];

  return (
    <div>
      <MenuBar viewName={viewName} setViewName={setViewName} />
      <ViewComponent />
    </div>
  );
}

export default MainBox;
