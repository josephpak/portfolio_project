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
        "title": "Trick Mirror: Reflections on Self-Delusion",
        "author": "Jia Tolentino",
        "link": "https://www.amazon.com/Trick-Mirror-Self-Delusion-Jia-Tolentino/dp/0525510540",
        "status": "reading"
    },
    {
        "title": "The Master Algorithm",
        "author": "Pedro Domingos",
        "link": "https://www.amazon.com/dp/0465094279/ref=cm_sw_em_r_mt_dp_U_ocQeFb3SYF3R5",
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
