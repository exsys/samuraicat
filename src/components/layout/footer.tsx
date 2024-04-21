import Link from "next/link";

export default function Footer() {
    return (
        <footer>
            <div className="flex justify-center items-center py-8">
                <Link href={"https://twitter.com/YukiSamuraiCat"} target="_blank">
                    <img src="/images/samuraicat.jpg" alt="" className="w-32 h-32 rounded-full drop-shadow-md cursor-pointer" />
                </Link>
            </div>
        </footer>
    )
}