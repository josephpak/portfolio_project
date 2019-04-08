import React from 'react'

import {
    ContactCardLeftWrapper
} from "../../page-styles/AboutMeStyles"

import {
    useTheme
} from "../../hooks/darkMode"

export default function ContactCardLeft() {

    const themeState = useTheme()
    return (
        <ContactCardLeftWrapper dark={themeState.dark}>
            <h1>Contact me</h1>
            <h2>josephpak2014@gmail.com</h2>
            <hr />
        </ContactCardLeftWrapper>
    )
}
