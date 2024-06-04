import React, {useState, useRef, useEffect} from "react";

import {
    CarouselButton,
    CarouselButtonDot,
    CarouselButtons,
    CarouselContainer,
    CarouselItemText,
    CarouselItemTitle,
    CarouselMobileScrollNode,
} from "./TimeLineStyles";
import {
    Section,
    SectionDivider,
    SectionText,
    SectionTitle,
} from "../../styles/GlobalComponents";
import {TimeLineData} from "../../constants/constants";

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
    return (
        <Section id="about">
            <SectionDivider divider/>

            <SectionTitle>Обо мне</SectionTitle>
            <SectionText>
                Опытный Full Stack Developer с опытом работы более 8 лет.
                Увлечен разработкой высококачественных веб-решений с применением Nuxt.js & Node.js.
                Пишу чистый и поддерживаемый код, развиваюсь и обучаюсь в области инновационных решений.
            </SectionText>
            <CarouselContainer>
                {TimeLineData.map((item, index) => (
                    <CarouselMobileScrollNode key={index}>
                        <CarouselItemTitle>{item.company}</CarouselItemTitle>
                        <CarouselItemText><b>Год:</b> {item.year}</CarouselItemText>
                        <CarouselItemText><b>Должность:</b> {item.position}</CarouselItemText>
                        <CarouselItemText><b>Технологии:</b> {item.technology}</CarouselItemText>
                        <CarouselItemText><b>Обязаности:</b> {item.text}</CarouselItemText>
                    </CarouselMobileScrollNode>
                ))}
            </CarouselContainer>
        </Section>
    );
};

export default Timeline;
