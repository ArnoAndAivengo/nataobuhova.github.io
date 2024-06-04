import Link from "next/link";
import React from "react";
import { AiFillGithub } from "react-icons/ai";

import {
    Container,
    Div2,
    Div3,
    NavLink,
    SocialIcons,
} from "./HeaderStyles";
import { GithubUrl } from "../../constants/constants";

const Header = () => (
    <Container>
        {/*<Div1>*/}
        {/*    <Link href="/">*/}
        {/*        <a style={{display: "flex", alignItems: "center", color: "white"}}>*/}
        {/*            <DiCssdeck size="3rem"/> <span>Portfolio Anoa</span>*/}
        {/*        </a>*/}
        {/*    </Link>*/}
        {/*</Div1>*/}
        <Div2>
            {/*<li>*/}
            {/*    <Link href="#projects">*/}
            {/*        <NavLink>Projects</NavLink>*/}
            {/*    </Link>*/}
            {/*</li>*/}
            <li>
                <Link href="#about">
                    <NavLink>Обо мне</NavLink>
                </Link>
            </li>
            <li>
                <Link href="#tech">
                    <NavLink>Технологии</NavLink>
                </Link>
            </li>

        </Div2>
        <Div3>
            <SocialIcons href={GithubUrl} target="_blank">
                <AiFillGithub size="3rem"/>
            </SocialIcons>
        </Div3>
    </Container>
);

export default Header;
