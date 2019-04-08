import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

import {
    Book,
    Article,
    BooksWrapper,
    NewsStand,
    LibraryWrapper
} from "./LibraryStyles"

import {
    useTheme
} from "../../hooks/darkMode";

const libraryData = [
    {
        "title": "The Power Broker",
        "author": "Robert Caro",
        "link": "https://www.amazon.com/Power-Broker-Robert-Moses-Fall/dp/0394720245",
        "status": "reading"
    },
    {
        "title": "Sprint: How to Solve Big Problems and Test New Ideas in Just Five Days",
        "author": "Jake Knapp",
        "link": "https://www.amazon.com/Sprint-Solve-Problems-Test-Ideas/dp/150112174X",
        "status": "reading"
    },
    {
        "title": "Bad Blood",
        "author": "John Carreyrou",
        "link": "https://www.amazon.com/Bad-Blood-Secrets-Silicon-Startup/dp/152473165X",
        "status": "read"
    }
]

const standData = [
    {
        "title": "Introducing Hooks",
        "publication": "Facebook Open Source",
        "link": "https://reactjs.org/docs/hooks-intro.html"
    },
    {
        "title": "Status as a Service (StaaS)",
        "publication": "Remains of the Day",
        "link": "https://www.eugenewei.com/blog/2019/2/19/status-as-a-service"
    },
    {
        "title": "Eloquent Javascript",
        "publication": "Marijn Haverbeke",
        "link": "https://eloquentjavascript.net/"
    }
]



export default function Library() {
  const themeState = useTheme()

  return (
    <LibraryWrapper dark={themeState.dark}>
        <h1 style={{
            width: '100%'
        }}>
            What I'm Reading
        </h1>
        <BooksWrapper dark={themeState.dark}>
            <hr />
            {libraryData.filter(book => (book.status === "reading")).map(book => (
                <Book dark={themeState.dark}>
                    <OutboundLink href={book.link} target="_blank" rel="noopener noreferrer">{book.title}</OutboundLink>
                </Book>
            ))}
        </BooksWrapper>
        <NewsStand dark={themeState.dark}>
            <hr />
            {standData.map(article => (
                <Article dark={themeState.dark}>
                    <OutboundLink href={article.link} target="_blank" rel="noopener noreferrer">{article.title}</OutboundLink>
                </Article>
            ))}
        </NewsStand>
      
    </LibraryWrapper>
  )
}
