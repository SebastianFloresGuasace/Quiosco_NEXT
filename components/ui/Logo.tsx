import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex justify-center mt-5">
        <div className="relative w-32 h-40">
            <Image 
                src='/logo.svg'
                fill 
                alt="Logotipo Fresh Coffee"
            />
        </div>
    </div>
  )
}
