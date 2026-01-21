import Image from "next/image"
import FadeUp from "../animations/FadeUp"
import FadeDown from "../animations/FadeDown"


type PersonCardProps = {
    image: string
    name: string
    fullName: string
    born: string
    reverse?: boolean
    parent: string
}

export default function PersonCard({
    image,
    name,
    fullName,
    born,
    parent
}: PersonCardProps) {

    return (
        <div className={"flex flex-col items-center gap-6 px-5"}>
            {/* IMAGE */}
                <FadeDown className="w-full flex justify-center">
                    <div className="relative w-full max-w-45 max-h-65 aspect-2/4 rounded-t-full overflow-hidden border-4 border-double border-gray-400">
                        <Image
                            src={image}
                            alt={fullName}
                            fill
                            priority={true}
                            sizes="(max-width: 260px) 40vw, 180px"
                            className="object-cover"
                        />
                    </div>
                </FadeDown>
            {/* TEXT */}
            <div className="flex-1">
                <FadeUp>
                    <h3 className="text-[20px] font-amalfi text-[#a7a69a] mb-5">
                        {name}
                    </h3>
                </FadeUp>
                <FadeUp>
                    <p className="text-2xl font-ivy-mode text-[#815150] mb-5">
                        {fullName}
                    </p>
                </FadeUp>
                <FadeUp>
                    <p className="text-sm font-semibold text-[#5f5f5f] mb-2">
                        {born}
                    </p>
                    <p className="text-sm text-[#5f5f5f]">{parent}</p>
                </FadeUp>
            </div>
        </div>
    )
}
