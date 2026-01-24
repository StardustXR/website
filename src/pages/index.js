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

function HomepageHeader() {
	const { siteConfig } = useDocusaurusContext();
	return (
		<header className={clsx("hero hero--primary", styles.heroBanner)}>
			<div className="container">
				<link rel="me" href="https://fosstodon.org/@stardustxr"></link>
				<h1 className="hero__title">{siteConfig.title}</h1>
				<h2 className="hero__subtitle">
					True spatial computing! 2D apps and 3D apps in the same space with
					direct interaction.
				</h2>
				<p className="hero__subtitle">
					<i>{siteConfig.tagline}</i>
				</p>
				<div className={styles.buttons}>
					<Link
						className="button button--secondary button--lg"
						to="/docs/telescope/install"
					>
						Try Telescope (overlay)
					</Link>
				</div>
			</div>
		</header>
	);
}

export default function Home() {
	const { siteConfig } = useDocusaurusContext();
	return (
		<Layout image="img/icon.gif" description="XR Display Server">
			<HomepageHeader />
			<main>
				<iframe
					width="1020"
					src="https://www.youtube.com/embed/v2WblwbaLaA"
					allow="autoplay; encrypted-media"
					allowFullScreen
					style={{
						display: "block",
						margin: "32px auto 4px auto",
						textAlign: "center",
						maxWidth: "100%",
						aspectRatio: "16/9",
					}}
				/>
				<center>
					<i>Demo reel of things you can do on Stardust.</i>
				</center>
				<div style={{ height: "64px" }}></div>

				<Carousel />
				<SpaceViewport>
					<div className="island" style={{ top: "100px", left: "0px" }}>
						<img src="img/icon.gif" alt="Stardust Logo" />
						<p>test uwu</p>
					</div>
					<div className="island" style={{ top: "5000px", left: "0px" }}>
						<img src="img/icon.gif" alt="Stardust Logo" />
						<p>test uwu</p>
					</div>
				</SpaceViewport>
			</main>
		</Layout>
	);
}
