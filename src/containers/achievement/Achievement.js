import React, {useContext} from "react";
import "./Achievement.scss";
import AchievementCard from "../../components/achievementCard/AchievementCard";
import {achievementSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
export default function Achievement() {
  const {isDark} = useContext(StyleContext);
  if (!achievementSection.display) {
    return null;
  }
  return (
    <div className="main" id="achievements">
      <div className="achievement-main-div">
        <Fade bottom duration={1000} distance="20px">
          <div className="achievement-header">
            <h1
              className={
                isDark
                  ? "dark-mode heading achievement-heading"
                  : "heading achievement-heading"
              }
            >
              {achievementSection.title}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle achievement-subtitle"
                  : "subTitle achievement-subtitle"
              }
            >
              {achievementSection.subtitle}
            </p>
          </div>
        </Fade>
        <div className="achievement-cards-div">
          {achievementSection.achievementsCards.map((card, i) => {
            return (
              <Fade bottom duration={1000} distance="20px">
                <AchievementCard
                  key={i}
                  isDark={isDark}
                  cardInfo={{
                    title: card.title,
                    description: card.subtitle,
                    image: card.image,
                    imageAlt: card.imageAlt,
                    footer: card.footerLink
                  }}
                />
              </Fade>
            );
          })}
        </div>
      </div>
    </div>
  );
}
