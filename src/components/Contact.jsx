import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../constants/hoc/styles";
import SectionWrapper from "../constants/hoc/SectionWrapper";
import { slideIn } from "../utils/motion";
import { useTranslation } from 'react-i18next';

const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

    };
    const { t } = useTranslation();

    return (
        <div className="mt-12 flex flex-col gap-20 overflow-hidden py-20 items-center w-full">
            {/* Contact Form Container */}
            <motion.div
                variants={slideIn("left", "tween", 0.2, 1)}
                className="bg-black-100 p-8 rounded-2xl w-full max-w-3xl flex flex-col items-center text-center"
            >
                <h3 className={styles.sectionHeadText}>{t("contact")}</h3>

                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="mt-12 flex flex-col gap-8 w-full"
                >
                    <label className="flex flex-col items-center w-full">
                        <span className="text-white font-medium mb-4">{t("Name")}</span>
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder={t("NameQuestion")}
                            className="bg-white py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium w-full"
                        />
                    </label>

                    <label className="flex flex-col items-center w-full">
                        <span className="text-white font-medium mb-4">{t("Email")}</span>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder={t("EmailQuestion")}
                            className="bg-white py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium w-full"
                        />
                    </label>

                    <label className="flex flex-col items-center w-full">
                        <span className="text-white font-medium mb-4">{t("Message")}</span>
                        <textarea
                            rows="7"
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            placeholder={t("MessageQuestion")}
                            className="bg-white py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium w-full"
                        />
                    </label>

                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
                        >
                            {loading ? t("Sending") : t("Send")}
                        </button>
                    </div>
                </form>
            </motion.div>

            {/* Social Media Container - Centered */}
            <motion.div
                variants={slideIn("up", "tween", 0.2, 1)}
                className="flex flex-col justify-center items-center text-center p-8 bg-black-100/50 rounded-2xl border border-white/5 w-full max-w-3xl"
            >
                <h3 className="text-white font-black md:text-[60px] sm:text-[40px] text-[30px]">
                    {t("Follow Me")}
                </h3>

                <div className="flex flex-wrap justify-center items-center gap-10 mt-10">
                    {/* LinkedIn */}
                    <a href="https://www.linkedin.com/in/islam-naim-941224383?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer" className="group">
                        <div className="w-16 h-16 rounded-xl border border-[#0077b5] flex justify-center items-center shadow-[0_0_15px_rgba(0,119,181,0.5)] group-hover:shadow-[0_0_25px_#0077b5] transition-all duration-300">
                            <svg className="w-10 h-10 fill-white" viewBox="0 0 24 24">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                        </div>
                    </a>

                    {/* GitHub */}
                    <a href="https://github.com/Islam2004naim" target="_blank" rel="noreferrer" className="group">
                        <div className="w-16 h-16 rounded-xl border border-white flex justify-center items-center shadow-[0_0_15px_rgba(255,255,255,0.3)] group-hover:shadow-[0_0_25px_rgba(255,255,255,0.6)] transition-all duration-300">
                            <svg className="w-10 h-10 fill-white" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                        </div>
                    </a>


                </div>
            </motion.div>
        </div>
    );
};

export default SectionWrapper(Contact, "contact");