"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Bars3Icon, BugAntIcon } from "@heroicons/react/24/outline";
import { WdkConnectButton } from "~~/components/scaffold-eth/WdkConnectButton";
import { AVALANCHE_NETWORKS, NetworkId } from "~~/config/networks";
import { useWdk } from "~~/contexts/WdkContext";
import { useOutsideClick } from "~~/hooks/scaffold-eth";
import { WalletIcon } from "@heroicons/react/20/solid";
import { SwitchTheme } from "./SwitchTheme";

type HeaderMenuLink = {
	label: string;
	href: string;
	icon?: React.ReactNode;
};

export const menuLinks: HeaderMenuLink[] = [

	{
		label: "Home",
		href: "/",
	},
	{
		label: "Avalanche Wallet",
		href: "/wallet",
	},
	{
		label: "Market",
		href: "/market",
	},
	{
		label: "Debug Contracts",
		href: "/debug",
		icon: <BugAntIcon className="h-4 w-4" />,
	},

];


export const HeaderMenuLinks = () => {
	const pathname = usePathname();

	return (
		<>
			{menuLinks.map(({ label, href, icon }) => {
				const isActive = pathname === href;
				return (
					<li key={href}>
						<Link
							href={href}
							passHref
							className={`${isActive ? "bg-secondary shadow-md" : ""
								} hover:bg-secondary hover:shadow-md focus:!bg-secondary active:!text-neutral py-1.5 px-3 text-sm rounded-full gap-2 grid grid-flow-col`}
						>
							{icon}
							<span>{label}</span>
						</Link>
					</li>
				);
			})}
		</>
	);
};
const DotIcon = () => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor">
			<path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
		</svg>
	)
}
/**
 * Network Selector Component for Header
 */
const NetworkSelector = () => {
	const { currentNetwork, switchNetwork, isSwitchingNetwork, isInitialized } = useWdk();
	const networkMenuRef = useRef<HTMLDetailsElement>(null);

	const handleNetworkSwitch = async (networkId: NetworkId) => {
		// Close the dropdown
		networkMenuRef.current?.removeAttribute("open");

		try {
			await switchNetwork(networkId);
		} catch (error) {
			console.error("Failed to switch network:", error);
		}
	};

	// Only show if wallet is initialized
	if (!isInitialized) {
		return null;
	}

	const networkColors = {
		local: "bg-yellow-500",
		fuji: "bg-blue-500",
		mainnet: "bg-red-500",
	};

	const networkColor = networkColors[currentNetwork.id as keyof typeof networkColors] || "bg-gray-500";

	return (
		<details className="dropdown dropdown-end" ref={networkMenuRef}>
			<summary
				className="btn btn-sm btn-ghost gap-2 normal-case list-none cursor-pointer"
				style={{ listStyle: "none" }}
			>
				<div className={`w-2.5 h-2.5 rounded-full ${networkColor}`} />
				<span className="hidden sm:inline text-sm font-medium">{currentNetwork.displayName}</span>
				<span className="sm:hidden text-xs">{currentNetwork.id.toUpperCase()}</span>
				{isSwitchingNetwork && <span className="loading loading-spinner loading-xs"></span>}
				<svg className="fill-current w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
					<path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
				</svg>
			</summary>
			<ul className="menu dropdown-content mt-2 p-2 shadow-lg bg-base-200 rounded-box w-56 z-50">
				{Object.values(AVALANCHE_NETWORKS).map(network => (
					<li key={network.id}>
						<button
							onClick={() => handleNetworkSwitch(network.id as NetworkId)}
							className={`flex items-center gap-3 ${currentNetwork.id === network.id ? "active" : ""}`}
							disabled={isSwitchingNetwork}
						>
							<div className={`w-2.5 h-2.5 rounded-full ${networkColors[network.id as keyof typeof networkColors]}`} />
							<div className="flex flex-col items-start">
								<span className="font-medium">{network.displayName}</span>
								<span className="text-xs text-base-content/60">Chain ID: {network.chainId}</span>
							</div>
							{currentNetwork.id === network.id && <span className="ml-auto text-success">✓</span>}
						</button>
					</li>
				))}
			</ul>
		</details>
	);
};

/**
 * Site header
 */
export const Header = () => {
	const { currentNetwork } = useWdk();
	const isLocalNetwork = currentNetwork.id === "local";

	const burgerMenuRef = useRef<HTMLDetailsElement>(null);
	useOutsideClick(burgerMenuRef, () => {
		burgerMenuRef?.current?.removeAttribute("open");
	});
	return (
		<div className="bg-background shadow-sm sticky z-60">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Desktop: Logo, menú y acciones */}
				<div className="hidden lg:flex justify-between items-center py-4">
					{/* Logo */}
					<Link href="/" className="flex items-center gap-2 shrink-0">
						<div className="relative w-10 h-10">
							<Image alt="SE2 logo" className="cursor-pointer" fill src="/logo.svg" />
						</div>
						<div className="flex flex-col">
							<span className="font-bold leading-tight">WDK Avalanche</span>
							<span className="text-xs">Powered by Scaffold-ETH 2</span>
						</div>
					</Link>

					{/* Menú desktop */}
					<ul className="flex flex-nowrap gap-2">
						<HeaderMenuLinks />
						<SignedOut>
							<li key="signupButton-desktop">
								<Link
									href="/signup"
									className="hover:bg-secondary hover:shadow-md focus:bg-secondary active:text-neutral py-1.5 px-3 text-sm rounded-full inline-flex items-center gap-2"
								>
									<span>Sign Up</span>
								</Link>
							</li>
						</SignedOut>

					</ul>

					{/* Acciones desktop */}
					<div className="flex items-center gap-2 shrink-0">
						<NetworkSelector />
						<SignedIn>
							<UserButton>
								<UserButton.MenuItems>
									<UserButton.Link label="Wallet" labelIcon={<WalletIcon />} href="/wallet" />
								</UserButton.MenuItems>
								<UserButton.UserProfileLink label="Wallet" url="/wallet" labelIcon={<DotIcon />} />
							</UserButton>
						</SignedIn>
						<SwitchTheme className="inline-flex items-center gap-2" />
					</div>
				</div>

				{/* Mobile: Logo a la izquierda, menú hamburguesa a la derecha */}
				<div className="lg:hidden flex justify-between items-center py-3">
					{/* Logo mobile */}
					<Link href="/" className="flex items-center gap-2">
						<div className="relative w-8 h-8">
							<Image alt="SE2 logo" className="cursor-pointer" fill src="/logo.svg" />
						</div>
						<div className="flex flex-col">
							<span className="font-bold leading-tight text-sm">WDK Avalanche</span>
							<span className="text-[10px] leading-tight">Powered by Scaffold-ETH 2</span>
						</div>
					</Link>

					{/* Menú hamburguesa */}
					<details className="relative" ref={burgerMenuRef}>
						<summary className="p-2 cursor-pointer list-none hover:bg-secondary/10 rounded-md">
							<Bars3Icon className="w-6 h-6" />
						</summary>
						<ul className="absolute right-0 mt-2 p-2 shadow-lg bg-background rounded-lg w-52 z-50 border">
							<SignedOut>
								<li key="signupButton">
									<Link
										href="/signup"
										className="block hover:bg-secondary hover:shadow-md focus:bg-secondary active:text-neutral py-2 px-3 text-sm rounded-md"
									>
										<span>Sign Up</span>
									</Link>
								</li>
							</SignedOut>
							<HeaderMenuLinks />
							<li className="pt-2 border-t mt-2">
								<div className="flex items-center gap-2 px-3 py-2">
									<NetworkSelector />
									<SignedIn>
										<UserButton>
											<UserButton.MenuItems>
												<UserButton.Link label="Wallet" labelIcon={<WalletIcon />} href="/wallet" />
											</UserButton.MenuItems>
											<UserButton.UserProfileLink
												label="Wallet"
												url="/wallet"
												labelIcon={<DotIcon />}
											/>
										</UserButton>
									</SignedIn>
								</div>
							</li>
						</ul>
					</details>
				</div>
			</div>
		</div>
	);
};
