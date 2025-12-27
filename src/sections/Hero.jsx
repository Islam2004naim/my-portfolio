import { PerspectiveCamera, OrbitControls, Preload } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import CanvasLoader from "./canvasloader";
import Programmer from "../sections/programaing";
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";

const Hero = () => {
  const { i18n, t } = useTranslation();

  // إعدادات الموديل الثلاثي الأبعاد
  const scale = 0.5;
  const positionX = 0;
  const positionY = -2;
  const positionZ = 0;

  // دالة النزول السلس عند الضغط
  const handleScrollDown = (e) => {
    e.preventDefault();
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Fallback for direct window scroll if ID not found
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative w-full h-screen mx-auto overflow-hidden bg-primary">

      {/* 1. طبقة الـ Canvas (الخلفية ثلاثية الأبعاد) */}
      <div className="absolute inset-0 z-0">
        <Canvas className="w-full h-full" shadows>
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 8]} />

            <OrbitControls
              enableZoom={false}
              enablePan={false}
              enableDamping={true}
              dampingFactor={0.05}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2.5}
            />

            <Programmer
              scale={scale}
              position={[positionX, positionY, positionZ]}
              rotation={[0, -Math.PI / 4, 0]}
            />

            <ambientLight intensity={1.5} />
            <directionalLight position={[10, 10, 10]} intensity={1} />
          </Suspense>
          <Preload all />
        </Canvas>
      </div>

      {/* 2. طبقة النصوص (المحتوى العلوي) */}
      <div className="absolute inset-0 top-[100px] max-w-7xl mx-auto flex flex-row items-start justify-center gap-10 z-10 px-6 sm:px-18 pointer-events-none">

        {/* الزخرفة الجانبية */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#a855f7]" />
          <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-[#a855f7] to-transparent" />
        </div>

        {/* كتلة النصوص */}
        <div className="pointer-events-auto">
          <h1 className="text-white lg:text-[45px] sm:text-[35px] xs:text-[25px] text-[30px] lg:leading-[55px] font-bold">
            <span className="text-[#a855f7]">{t('hi')} {t('name')}</span>
          </h1>
          <div className="w-full h-1 bg-gradient-to-r from-[#a855f7] to-transparent mt-2 rounded-full" />
          <p className="text-[#dfd9ff] font-medium lg:text-[20px] sm:text-[18px] text-[16px] lg:leading-[30px] mt-4">
            {t('description')} <br />
            {t('description2')}
          </p>
        </div>
      </div>

      {/* 3. صورة البروفايل (اختياري) */}
      <div className="absolute top-[230px] left-6 sm:left-96 flex flex-row items-start gap-5 z-20 pointer-events-none">
        <div className="w-40 h-20 rounded-full border-2 border-[#a855f7] overflow-hidden shadow-sm shadow-[#a855f7]/50">
          <img src="../assets/islamfo.png" alt="logo" className="w-full h-full object-cover " />
        </div>
      </div>

      {/* 4. زر الماوس للتمرير (Mouse Scroll Button) */}
      <div className="absolute bottom-10 w-full flex justify-center items-center z-[100]">
        <a
          href="#about"
          onClick={handleScrollDown}
          className="cursor-pointer pointer-events-auto"
        >
          <motion.div
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            className="w-[35px] h-[64px] rounded-3xl border-4 border-[#aaa6c3] flex justify-center items-start p-2 transition-all duration-300 hover:border-[#a855f7] hover:shadow-[0_0_15px_rgba(168,85,247,0.5)]"
          >
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              variants={{
                initial: { backgroundColor: "#aaa6c3" },
                hover: {
                  backgroundColor: "#a855f7",
                  scale: 1.2
                },
                tap: {
                  backgroundColor: "#ffffff",
                  scale: 0.8
                }
              }}
              transition={{
                y: {
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                },
                backgroundColor: { duration: 0.2 }
              }}
              className="w-3 h-3 rounded-full"
            />
          </motion.div>
        </a>
      </div>

    </section>
  );
};

export default Hero;