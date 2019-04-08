import React from 'react'

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
        "link": "",
        "status": "reading"
    },
    {
        "title": "Sprint: How to Solve Big Problems and Test New Ideas in Just Five Days",
        "author": "Robert Caro",
        "link": "",
        "status": "reading"
    },
    {
        "title": "Bad Blood",
        "author": "John Carreyrou",
        "link": "",
        "status": "read"
    }
]

const standData = [
    {
        "title": "This is an example of an article",
        "publication": "Washington Post",
        "link": ""
    },
    {
        "title": "This is an example of an article",
        "publication": "Washington Post",
        "link": ""
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
        <BooksWrapper>
            <hr />
            {libraryData.filter(book => (book.status === "reading")).map(book => (
                <Book>
                    {book.title}
                </Book>
            ))}
        </BooksWrapper>
        <NewsStand>
            <hr />
            {standData.map(article => (
                <Article>
                    {article.title}
                </Article>
            ))}
        </NewsStand>
      
    </LibraryWrapper>
  )
}
