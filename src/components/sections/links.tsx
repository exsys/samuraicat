import Link from "next/link";
import TwitterX from "../icons/twitterx";
import Telegram from "../icons/telegram";
import DexScreener from "../icons/dexscreener";

export default function LinksSection() {
    return (
        <div className="h-full">
            <div className="sm:h-fit lg:h-full flex flex-col-reverse lg:flex-row items-center justify-between
            w-[94%] lg:w-3/4 mx-auto py-10 gap-12 lg:gap-8 xl:gap-2">
                <div className="flex-1 flex flex-col items-center justify-center gap-12">
                    <div className="flex flex-col items-center justify-center gap-6">
                        <h1 className="text-6xl font-semibold">
                            Links
                        </h1>

                        <div>
                            <nav>
                                <ul className="flex gap-8 items-center">
                                    <li className={`nav-link -mr-1`}>
                                        <Link href={"https://twitter.com/YukiSamuraiCat"} target="_blank">
                                            <TwitterX className="w-[60px] h-[60px]" />
                                        </Link>
                                    </li>
                                    <li className={`nav-link`}>
                                        <Link href={"https://t.me/YukiSamuraiCat"} target="_blank">
                                            <Telegram className="w-12 h-12" />
                                        </Link>
                                    </li>
                                    <li className={`nav-link -mb-1`}>
                                        <Link href={"https://dexscreener.com/solana/7t6kjukuwkdeawjkaz8mbqw1wgndasti3ttnfdsmsksh"} target="_blank">
                                            <DexScreener className="w-[60px] h-[60px]" />
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>

                    <div className="flex flex-col items-center justify-center gap-10">
                        <h2 className="text-6xl font-semibold">
                            Buy $YUKI
                        </h2>

                        <div>
                            <nav>
                                <ul className="flex gap-8 items-center">
                                    <li>
                                        <Link href={"https://raydium.io/swap/?inputCurrency=sol&outputCurrency=53yANribNp1WzRsciY6upAN2VPY85waZEtADTeJhtQGN&fixed=in"}
                                            target="_blank" className="main-button">
                                            Raydium
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={"https://jup.ag/swap/SOL-53yANribNp1WzRsciY6upAN2VPY85waZEtADTeJhtQGN"}
                                            target="_blank" className="main-button">
                                            Jupiter
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>

                <div className="flex-1 flex flex-col justify-center items-center gap-3"
                    data-aos="fade-left" data-aos-duration="600" data-aos-delay="100">
                    <h1 className="text-4xl">
                        Founder Eronu Masuku
                    </h1>
                    <img src="/images/elon.webp" alt="" className="rounded-lg drop-shadow-lg sm:w-3/4 lg:w-full 2xl:w-[85%]" />
                </div>
            </div>
        </div>
    )
}