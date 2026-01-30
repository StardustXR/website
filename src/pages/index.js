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

export default function Home() {
	const { siteConfig } = useDocusaurusContext();
	return (
		// <Layout image="img/icon.gif" description="XR Display Server">
		// </Layout>
		<main>
			<SpaceViewport
				manualCanvasWidth={2000}
				manualCanvasHeight={2000}
				style={{ width: "100%", height: "100vh" }}
			>
				<div className="island" style={{ top: "0px", left: "0px" }}>
					<img src="img/icon.gif" alt="Stardust Logo" width={"300px"} />
					<h1>
						<center>Stardust XR</center>
					</h1>

					<div className="container">
						<link rel="me" href="https://fosstodon.org/@stardustxr"></link>
						<h1 className="hero__title">{siteConfig.title}</h1>
						<h2 className="hero__subtitle">
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
					</div>
				</div>
				<div className="island" style={{ top: "800px", left: "-750px" }}>
					<iframe
						width="1020"
						src="https://www.youtube.com/embed/v2WblwbaLaA"
						allow="autoplay; encrypted-media"
						allowFullScreen
						style={{
							display: "block",
							margin: "32px 0px",
							textAlign: "center",
							// maxWidth: "100%",
							aspectRatio: "16/9",
						}}
					/>
					<center>
						<i>Demo reel of things you can do on Stardust.</i>
					</center>
				</div>

				<div
					className="island"
					style={{
						top: "800px",
						left: "750px",
						width: "1020px",
						aspectRatio: "16/9",
					}}
				>
					<Carousel />
				</div>
			</SpaceViewport>
		</main>
	);
}
