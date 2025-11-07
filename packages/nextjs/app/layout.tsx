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
		<html suppressHydrationWarning lang="en" className="hide-scroll">
			<head>
				<script
					dangerouslySetInnerHTML={{
						__html: `
                (function() {
                  try {
                    var theme = localStorage.getItem('theme');
                    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                    if (theme === 'dark' || (!theme && prefersDark)) {
                      document.documentElement.classList.add('dark');
                    }
                  } catch (e) {}
                })();
              `,
					}}
				/>
			</head>
			<body >
				<ClerkProvider
					appearance={{
						variables: {
							colorPrimary: "var(--primary)",
							colorBackground: "var(--background)",
							colorInputBackground: "var(--input)",
							colorNeutral: "var(--foreground)",
							colorShimmer: "var(--accent)",
							colorText: "var(--text-foreground)",
						},
					}}
				>
					<ScaffoldEthAppWithProviders>{children}</ScaffoldEthAppWithProviders>
				</ClerkProvider>
			</body>
		</html>
	);
};

export default ScaffoldEthApp;
