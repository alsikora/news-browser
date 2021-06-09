export interface Article {
    source: { id: string; name: string; };
    author: string;
    title: string;
    url: string;
    urlToImage: string;
    content: string;
    description: string;
    publishedAt: string;
}

export interface NewsDetailsState {
    title: string;
    urlToImage: string;
    content: string;
    backLink: string;
}

export interface Country {
    name: string;
    countryCode: string;
}