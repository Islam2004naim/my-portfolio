import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { styles } from '../constants/hoc/styles';
import { fadeIn, textVariant } from '../utils/motion';
import SectionWrapper from '../constants/hoc/SectionWrapper';

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center w-full relative z-[999]">
      <motion.div variants={textVariant()} className="flex flex-col items-center w-full text-center">
        <h2 className={styles.sectionHeadText}>{t('OverView')}</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] text-center"
      >
        {t('OverViewText')}
      </motion.p>


    </div>
  );
};

export default SectionWrapper(About, "about");