import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../constants/hoc/styles";
import SectionWrapper from "../constants/hoc/SectionWrapper";
import { github } from "../assets";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { useTranslation } from 'react-i18next';

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
    const { t } = useTranslation();
    return (
        <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
            <Tilt
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                }}
                className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
            >
                <div className='relative w-full h-[230px]'>
                    <img
                        src={image}
                        alt='project_image'
                        className='w-full h-full object-contain p-5 bg-[#1d1836] rounded-2xl'
                    />

                    <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
                        <div
                            onClick={() => window.open(source_code_link, "_blank")}
                            className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
                        >
                            <img
                                src={github}
                                alt='source code'
                                className='w-1/2 h-1/2 object-contain'
                            />
                        </div>
                    </div>
                </div>

                <div className='mt-5'>
                    <h3 className='text-white font-bold text-[24px]'>{t(name)}</h3>
                    <p className='mt-2 text-secondary text-[14px]'>{t(description)}</p>
                </div>

                <div className='mt-4 flex flex-wrap gap-2'>
                    {tags.map((tag) => (
                        <p
                            key={`${name}-${tag.name}`}
                            className={`text-[14px] ${tag.color}`}
                        >
                            #{tag.name}
                        </p>
                    ))}
                </div>
            </Tilt>
        </motion.div>
    );
};

const Works = () => {
    const { t } = useTranslation();
    return (
        <>
            <div className="flex flex-col items-center w-full text-center">
                <motion.div variants={textVariant()}>
                    <h2 className={`${styles.sectionHeadText}`}>{t('Projects')}</h2>
                </motion.div>

                <div className='w-full flex justify-center'>
                    <motion.p
                        variants={fadeIn("", "", 0.1, 1)}
                        className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
                    >
                        {t('projectsText')}
                    </motion.p>
                </div>
            </div>

            <div className='mt-20 flex flex-wrap gap-7 justify-center'>
                {projects.map((project, index) => (
                    <ProjectCard key={`project-${index}`} index={index} {...project} />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(Works, "projects");