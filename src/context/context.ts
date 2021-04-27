import { contextType } from './../types';
import React from 'react'



export const categories: contextType[] =
    [
        {
            category: 'business',
        },
        {
            category: 'entertainment',
        },
        {
            category: 'health',
        },
        {
            category: 'science',
        },
        {
            category: 'sports',
        },
        {
            category: 'technology',
        }

    ]

const CategoryContext = React.createContext({ categories })

export default CategoryContext