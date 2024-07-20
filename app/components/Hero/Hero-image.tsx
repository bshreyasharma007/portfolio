import Image from "next/image"

export const HeroImage = () => {
  return (
    <div className="h-full w-full object-cover">
      <Image
        alt="Coder Girl Image"
        src="/images/coder-girl.png"
        width={600}
        height={600}
      />
    </div>
  )
}
