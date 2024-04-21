import { MEME_IMAGES } from "@/assets/memes";
import Link from "next/link";

export default function Memes() {
    return (
        <div className="h-fit pt-20 pb-40">
            <div className="h-full flex flex-col gap-10 justify-center items-center">
                <h1 className="text-6xl font-semibold mb-4">
                    Tag $YUKI on X
                </h1>

                <div className="w-[94%] lg:w-3/4 mx-auto">
                    <div className="flex justify-center">
                        <img src="/images/harold.jpg" alt="" className="object-cover mb-6 rounded-md drop-shadow-md" />
                    </div>

                    <div className="flex flex-col lg:flex-row gap-6 items-center mb-6">
                        <Link href={"https://twitter.com/YukiSamuraiCat"} target='_blank'
                            className="flex justify-center items-center cursor-pointer w-full lg:w-1/2">
                            <img src="/images/leonardo.jpg" alt="" className="rounded-md drop-shadow-md w-full" />
                        </Link>
                        <Link href={"https://twitter.com/YukiSamuraiCat"} target='_blank'
                            className="flex justify-center items-center cursor-pointer w-full lg:w-1/2">
                            <img src="/images/meme2.jpg" alt="" className="rounded-md drop-shadow-md w-full" />
                        </Link>
                    </div>

                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
                        {MEME_IMAGES.map((meme: any, index: number) => (
                            <Link href={"https://twitter.com/YukiSamuraiCat"} target='_blank'
                                key={index} className='drop-shadow-lg flex justify-center items-center cursor-pointer'>
                                <img src={meme.src} alt={meme.alt} className='rounded-lg' />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )
}