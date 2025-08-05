import { buttonVariants } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Logo from "@/public/logo.jpg"

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative flex min-h-svh flex-col items-center justify-center">

            <Link href={"/"} className={buttonVariants({
                variant: 'outline',
                className: "absolute top-4 left-4"
            })}>
                <ArrowLeft className="size-4" />
                Back
            </Link>

            <div className="flex w-full max-w-sm flex-col gap-6"><div>
                <Link
                    className="flex justify-center items-center gap-2 self-center font-medium" href={"/"}>
                    <Image src={Logo} alt="Logo" width={64} height={64} />
                    - Learning Management System.
                </Link>
            </div>
                {children}
                <div className="text-balance text-center text-xs text-muted-foreground">
                    By clicking continue, you are agree to our <span className="hover:text-primary hover:underline">Terms of service</span> and <span className="hover:text-primary hover:underline">Privacy Policy</span>
                </div>
            </div>
        </div>
    )
}