import styles from "./hero.module.css";

export default function Tokenomics() {
    return (
        <div className="h-full text-white tracking-wide my-20">
            <div className="z-10 absolute h-full w-full py-20 sm:py-0">
                <div className="h-full flex flex-col gap-10 justify-center items-center w-[94%] mx-auto text-center lg:text-left">
                    <p className="text-4xl text-center drop-shadow-md">
                        It’s a samurai, it’s a cat, it’s a samurai cat. Swords up!
                    </p>

                    <h1 className="text-7xl font-semibold drop-shadow-md">
                        Tokenomics
                    </h1>

                    <div className="flex flex-col gap-4 justify-center items-center">
                        <h2 className="text-5xl drop-shadow-md">
                            Token Address
                        </h2>

                        <div className="text-lg sm:text-3xl lg:text-4xl drop-shadow-md">
                            53yANribNp1WzRsciY6upAN2VPY85waZEtADTeJhtQGN
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 justify-center items-center">
                        <h2 className="text-5xl drop-shadow-md">
                            Supply
                        </h2>

                        <div className="text-4xl drop-shadow-md">
                            999,999,997.85
                        </div>
                    </div>

                    <div className="text-4xl drop-shadow-md">
                        Ownership renounced & Liquidity burned
                    </div>
                </div>
            </div>

            <img src="/images/bg2.jpg" alt="" className={`absolute w-full h-[120%] sm:h-full bg-cover z-0 ${styles["object-cover-bg"]}`} />
        </div>
    )
}