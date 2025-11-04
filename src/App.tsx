import {createHashRouter, RouterProvider} from "react-router-dom";
import MainLayout from "./MainLayout.tsx";
import {Deck} from "./Deck.tsx";
import {Characters} from "./Characters.tsx";
import {useEffect, useReducer} from "react";
import {BuildContext, initializeState, reducer} from "./BuildContext.ts";

export const App = () => {
  const [state, dispatch] = useReducer(reducer, null, initializeState);

  console.log("render")
  useEffect(() => {
    localStorage.setItem("character_id", state.characterId);
    localStorage.setItem(`build_${state.characterId}`, JSON.stringify({selectedCards: state.selectedCards}));
  }, [state.characterId, state.selectedCards])

  const router = createHashRouter([
      {
        element: <MainLayout/>,
        children: [
          {
            path: "/",
            element: <Characters/>
          },
          {
            path: ":characterId",
            element: <Deck/>
          },
        ]
      }
    ]
  );

  return (
    <>
      <BuildContext.Provider value={{state, dispatch}}>
        <RouterProvider router={router}/>
      </BuildContext.Provider>
    </>
  )
}