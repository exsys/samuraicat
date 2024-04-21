export default function HeroSection() {
    return (
        <div className="h-full">
            <img src="/images/wave.jpg" alt="" className="fixed w-full h-full bg-cover -z-10" />

            <div className="h-full flex justify-center lg:justify-end items-center w-[92%] lg:w-[60%] mx-auto">
                <div className="mt-28 lg:-mt-32 flex flex-col gap-8">
                    <img src="/images/samuraicat.jpg" alt="" className="w-[350px] h-[350px] drop-shadow-lg rounded-sm" />

                    <div className="text-center">
                        <h1 className="text-7xl">
                            $YUKI
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
}