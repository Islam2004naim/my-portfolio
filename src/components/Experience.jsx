import React from "react";
import { useTranslation } from 'react-i18next';
import i18n from "../assets/i18n";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../constants/hoc/styles";
import { experiences } from "../constants";
import SectionWrapper from "../constants/hoc/SectionWrapper";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
    const { t } = useTranslation();
    return (
        <VerticalTimelineElement
            contentStyle={{ background: "#1d1836", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid #232631" }}
            date={experience.date}
            iconStyle={{ background: experience.iconBg }}
            icon={
                <div className='flex justify-center items-center w-full h-full'>
                    <img
                        src={experience.icon}
                        alt={t(experience.title)}
                        className='w-[60%] h-[60%] object-contain'
                    />
                </div>
            }
        >
            <div>
                <h3 className='text-white text-[24px] font-bold'>{t(experience.title)}</h3>
                <p className='text-secondary text-[16px] font-semibold' style={{ margin: 0 }}>
                    {t(experience.company_name)}
                </p>
            </div>



        </VerticalTimelineElement>
    );
};

const Experience = () => {
    const { t } = useTranslation();
    return (
        <>
            <motion.div variants={textVariant()} className='text-center'>
                <h2 className={styles.sectionHeadText}>{t("Learning Journey")}</h2>
            </motion.div>

            <div className='mt-20 flex flex-col'>
                <VerticalTimeline>
                    {experiences.map((experience, index) => (
                        <ExperienceCard key={index} experience={experience} />
                    ))}
                </VerticalTimeline>
            </div>
        </>
    );
};

export default SectionWrapper(Experience, "experience");