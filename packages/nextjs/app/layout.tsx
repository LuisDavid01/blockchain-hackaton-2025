import { ClerkProvider } from "@clerk/nextjs";
import "@rainbow-me/rainbowkit/styles.css";
import { ScaffoldEthAppWithProviders } from "~~/components/ScaffoldEthAppWithProviders";
import { ThemeProvider } from "~~/components/ThemeProvider";
import "~~/styles/globals.css";
import { getMetadata } from "~~/utils/scaffold-eth/getMetadata";

export const metadata = getMetadata({
  title: "Next Core - Crypto Services Platform",
  description: "Buy and sell professional services with cryptocurrencies",
});

const ScaffoldEthApp = ({ children }: { children: React.ReactNode }) => {
  return (
    <html suppressHydrationWarning>
      <body className="min-h-screen bg-black">
        <ThemeProvider enableSystem>
          <ClerkProvider
            appearance={{
              variables: {
                colorPrimary: "#dc2626", // red-600
                colorBackground: "#000000",
                colorText: "#ffffff",
                colorInputBackground: "#171717",
              },
              elements: {
                rootBox: "mx-auto",
                card: "bg-gray-900 border border-gray-800",
                headerTitle: "text-white",
                headerSubtitle: "text-gray-300",
                socialButtonsBlockButton: "bg-gray-800 border-gray-700 hover:bg-gray-700",
                dividerLine: "bg-gray-700",
                dividerText: "text-gray-300",
                formFieldLabel: "text-white",
                formFieldInput: "bg-gray-800 border-gray-700 text-white",
                footer: "hidden",
              },
            }}
          >
            <ScaffoldEthAppWithProviders>{children}</ScaffoldEthAppWithProviders>
          </ClerkProvider>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default ScaffoldEthApp;