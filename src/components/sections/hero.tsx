import styles from "./hero.module.css";

export default function HeroSection() {
    return (
        <div className="h-full">
            <img src="/images/wave.jpg" alt="" className={`fixed w-full h-full bg-cover -z-10 ${styles["object-cover-bg"]}`} />

            <div className="h-full flex justify-center items-center">
                <div className="pt-48 flex flex-col items-center gap-8" data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">
                    <img src="/images/samuraicat.jpg" alt="" className="w-[350px] h-[350px] drop-shadow-lg rounded" />

                    <div className="text-center">
                        <h1 className="text-7xl font-semibold">
                            $YUKI
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
}