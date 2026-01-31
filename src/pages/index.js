import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
// import HomepageFeatures from "../components/HomepageFeatures";
import Carousel from "../components/Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SpaceViewport from "../components/SpaceViewport";

function Island({ x, y, width, aspectRatio, padding, children }) {
	return (
		<div
			className="island"
			style={{ top: y, left: x, width, aspectRatio, padding }}
		>
			{children}
		</div>
	);
}

function HeroIsland() {
	const { siteConfig } = useDocusaurusContext();
	return (
		<Island x="0px" y="0px" padding={"32px"}>
			<img src="img/icon.gif" alt="Stardust Logo" width={"300px"} />
			<link rel="me" href="https://fosstodon.org/@stardustxr"></link>
			<h1>
				<center>Stardust XR</center>
			</h1>
			<h2>
				True spatial computing! 2D apps and 3D apps in the same space with
				direct interaction.
			</h2>
			<div className={styles.buttons}>
				<Link
					className="button button--secondary button--lg"
					to="/docs/telescope/install"
				>
					Try Telescope (overlay)
				</Link>
			</div>
		</Island>
	);
}

function VideoIsland() {
	return (
		<Island x="-750px" y="800px">
			<iframe
				width="1020"
				src="https://www.youtube.com/embed/v2WblwbaLaA"
				allow="autoplay; encrypted-media"
				allowFullScreen
				style={{
					display: "block",
					margin: "32px 0px",
					textAlign: "center",
					aspectRatio: "16/9",
				}}
			/>
			<center>
				<i>Demo reel of things you can do on Stardust.</i>
			</center>
		</Island>
	);
}

function CarouselIsland() {
	return (
		<Island x="750px" y="800px" width="1020px" aspectRatio="16/9">
			<Carousel />
		</Island>
	);
}

export default function Home() {
	return (
		<body>
			<main>
				<SpaceViewport
					backgroundImage="img/home_bg.png"
					manualCanvasWidth={2000}
					manualCanvasHeight={2000}
					style={{
						width: "100vw",
						height: "100vh",
					}}
				>
					<HeroIsland />
					<VideoIsland />
					<CarouselIsland />
				</SpaceViewport>
			</main>
		</body>
	);
}
