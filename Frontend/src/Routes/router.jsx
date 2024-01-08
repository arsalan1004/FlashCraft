import React from "react";
import {createBrowserRouter} from 'react-router-dom';


import FlashCraft, {loader as setsLoader} from "../Components/FlashCraft/FlashCraft";
import SetCreation from "../Components/FlashCraft/FlashCraftMain/SetCreation/SetCreation";
import FlashCardSet, {loader as cardsLoader} from "../Components/FlashCraft/FlashCraftMain/FlashCardSet/FlashCardSet";
import Home from "../Components/Home/Home";
import LearningUnit from "../Components/learningUnit/LearningUnit";
import Result from "../Components/learningUnit/result/Result";

const router = createBrowserRouter([
    {
        path: '/',
        children: [
            {
                index: true, 
                element: <Home />,
                
            },
            {
                path: 'FlashCraft',
                children: [
                    {
                        index: true,
                        element: <FlashCraft />,
                        loader: setsLoader 
                    },
                    {
                        path: 'SetCreation',
                        element: <SetCreation />
                    },
                    {
                        path: ':id',
                        element: <FlashCardSet />,
                        loader: cardsLoader
                    }
                ]
            },
            {
                path: 'learningUnit/:id',
                children: [
                  {
                    path: 'slides/:slideId',
                    element: <LearningUnit />
                  },
                  {
                    path: 'result',
                    element: <Result />
                  }
                ]
            }
        ]
     }
]);


export default router;