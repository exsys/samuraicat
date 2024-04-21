import Link from "next/link";
import Telegram from "../icons/telegram";
import DexScreener from "../icons/dexscreener";
import Jupiter from "../icons/jupiter";
import TwitterX from "../icons/twitterx";

export default function Header() {
    return (
        <header className="absolute w-full z-50">
            <div className="flex flex-col lg:flex-row items-center justify-between py-3 w-3/4 mx-auto">
                <div>
                    <img src="/images/samuraicat.jpg" alt="" className="w-32 h-32 rounded-full drop-shadow-lg cursor-pointer" />
                </div>

                <nav>
                    <ul className="flex gap-10 items-center justify-center">
                        <li className={`nav-link -mr-1`}>
                            <Link href={"https://twitter.com/YukiSamuraiCat"} target="_blank">
                                <TwitterX className="w-[52px] h-[52px]" />
                            </Link>
                        </li>
                        <li className={`nav-link`}>
                            <Link href={"https://t.me/YukiSamuraiCat"} target="_blank">
                                <Telegram className="w-10 h-10" />
                            </Link>
                        </li>
                        <li className={`nav-link`}>
                            <Link href={"https://dexscreener.com/solana/7t6kjukuwkdeawjkaz8mbqw1wgndasti3ttnfdsmsksh"} target="_blank">
                                <DexScreener className="w-12 h-12" />
                            </Link>
                        </li>
                        <li className={`nav-link`}>
                            <Link href={"https://jup.ag/swap/SOL-53yANribNp1WzRsciY6upAN2VPY85waZEtADTeJhtQGN"} target="_blank">
                                <Jupiter className="w-10 h-10" />
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}