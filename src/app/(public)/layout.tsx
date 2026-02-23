
import Link from "next/link"
import { getCurrentUser } from "@/services/clerk"
import { canAccessMemberPages } from "../permissions/general"
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs"
import { Button } from "@/components/ui/button"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdownMenu";


// app/dashboard/page.js
export const metadata = {
  title: "Decal-Punk",
  icons: {
    icon: { url: 'src\components\icons\icons8-star-24.png' },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

      <body>
        <Navbar />
        {children}
      </body>

  );
}

function Navbar() {
  return (
    <header className="h-12 shadow z-10 bg-black">
      <nav className="mr-10 ml-10 flex flex-row">
        <Link
          className="mr-10 mt-2 text-white"
          href="/"
        >
          Decal Punk
        </Link>
        <ul className="flex flex-row mt-2 gap-2 text-white">
          <li>
          <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="text-white">
              Products
            </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Products</DropdownMenuLabel>
                <DropdownMenuItem>
                    Stickers
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    Labels
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  Magnets
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  Buttons
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  Packaging
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  Apparel
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  Acrylics
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  More Products
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  Samples
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu></li>
          <li><Link href="/">Materials</Link></li>
         <li><Link href="/">Support</Link></li>
         <li><Link href="/">decal-punk-v4</Link></li>
      <div>

      </div>
        </ul>
      </nav>
    </header>
  )
}
