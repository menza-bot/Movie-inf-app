export interface newsType {
    status: string,
    totalResults: number,
    articles: ArticlesType[]
}

export interface additionalNewsType {
    status: string,
    sources: AdditionalSourcesType[]
}

export interface contextType {
    category: string
}

export interface AdditionalSourcesType {
    id: string
    name: string,
    description: string,
    url: string,
    country: string
}


export interface ArticlesType {
        source: {
            id: number,
            name: string
        },
        author: string,
        title: string,
        description: string,
        url: string,
        urlToImage: string,
        publishedAt: string,
        content: string,
        email: string
}
