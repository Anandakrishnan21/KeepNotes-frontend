import { Poppins } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "./Provider";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/ThemeProvider";

const poppins = Poppins({ weight: "400", style: "normal", subsets: ["latin"] });

export const metadata = {
  title: "Keep Notes",
  description: "Note keeping app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="min-h-screen box-border" suppressHydrationWarning>
      <body className={cn(poppins.className, "dark:bg-neutral-950")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          storageKey="keepNotes"
        >
          <AuthProvider>{children}</AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
