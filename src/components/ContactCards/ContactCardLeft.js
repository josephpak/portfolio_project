import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

import twitter from '../../images/logos/social-twitter-outline.png'
import linkedin from '../../images/logos/social-linkedin-outline.png'
import github from '../../images/logos/social-github-outline.png'
import twitterWhite from '../../images/logos/twitter-white.png'
import linkedinWhite from '../../images/logos/linkedin-white.png'
import githubWhite from '../../images/logos/github-white.png'

import {
    ContactCardLeftWrapper,
    SocialWrapper
} from "../../page-styles/AboutMeStyles"

import {
    useTheme
} from "../../hooks/darkMode"

export default function ContactCardLeft() {
    const themeState = useTheme()

    return (
        <ContactCardLeftWrapper dark={themeState.dark}>
            <h1>Contact me</h1>
            <a href="mailto:josephpak2014@gmail.com">josephpak2014@gmail.com</a>
            <hr />
            <SocialWrapper>
                <OutboundLink href="http://twitter.com/josephpak" target="_blank" rel="noopener noreferrer"><img src={themeState.dark ? twitter : twitterWhite} alt="twitter"/></OutboundLink>
                <OutboundLink href="http://linkedin.com/in/josephjpak" target="_blank" rel="noopener noreferrer"><img src={themeState.dark ? linkedin :linkedinWhite}alt="linkedin"/></OutboundLink>
                <OutboundLink href="http://github.com/josephpak" target="_blank" rel="noopener noreferrer"><img src={themeState.dark ? github : githubWhite} alt="github"/></OutboundLink>
            </SocialWrapper>
        </ContactCardLeftWrapper>
    )
}
