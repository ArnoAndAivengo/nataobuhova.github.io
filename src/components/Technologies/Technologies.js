import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import {
    Section,
    SectionDivider,
    SectionText,
    SectionTitle,
} from "../../styles/GlobalComponents";
import {
    List,
    ListContainer,
    ListItem,
    ListParagraph,
    ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
    <Section id="tech">
        <SectionDivider divider/>
        <SectionTitle>Технологии</SectionTitle>
        <SectionText>
            Я работал с целым рядом технологий в области веб-разработки. От клиентской части до серверной.
        </SectionText>
        <List>
            <ListItem>
                <picture>
                    <DiReact size="3rem"/>
                </picture>
                <ListContainer>
                    <ListTitle>Front-End</ListTitle>
                    <ListParagraph>
                        Опыт работы c Nuxt.js, Vue.js, JQuery, Bootstrap, MaterialUi,
                        Ant Design, HTML5, CSS3, SASS, JavaScript & TypeScript
                    </ListParagraph>
                </ListContainer>
            </ListItem>
            <ListItem>
                <picture>
                    <DiFirebase size="3rem"/>
                </picture>
                <ListContainer>
                    <ListTitle>Back-End</ListTitle>
                    <ListParagraph>
                        Опыт работы с Node.js
                        <br/>
                        Express.js, GraphQL
                        <br/>
                        TypeScript, Microservices
                        <br/>
                        Docker, PubSub, RabbitMQ
                        <br/>
                        Prisma, Sequelize, MongoDB
                        <br/>
                        MYSQL & Postgres
                    </ListParagraph>
                </ListContainer>
            </ListItem>
            <ListItem>
                <picture>
                    <DiZend size="3rem"/>
                </picture>
                <ListContainer>
                    <ListTitle>UI/UX</ListTitle>
                    <ListParagraph>
                        Опыт работы с Figma & Photoshop
                    </ListParagraph>
                </ListContainer>
            </ListItem>
        </List>
    </Section>
);

export default Technologies;
