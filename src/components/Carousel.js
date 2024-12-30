import React from "react";
import { Carousel } from "react-responsive-carousel";

const ImageList = [
	{
		image: "img/carousel/workflow.png",
		alt: "A scene showing a flat panel with Blender to the left (containing a sketch of a 3D git client that looks like a bonsai tree), a turntable with a 3D model of the stardust logo on it in the center, and a massive grid of hexagons for all the apps on the system to the right.",
		caption:
			"A workflow containing Blender, a turntable with a 3D model preview, and the hexasgon app launcher.",
	},
	{
		image: "img/carousel/multipleclients.png",
		alt: "A scene showing multiple widgets, including CRT TV panel shells and flat touchscreen panels and 2 rings forming a cylinder around the scene.",
		caption: "Multiple objects working independently all at once.",
	},
	{
		image: "img/carousel/panels.png",
		alt: "A series of application windows as 3D panels similar to small wooden boards in proportions with a Panasonic CRT TV model in the center showing Agregore (the browser).",
		caption: "Panels for wayland apps and a CRT panel shell for XR UI.",
	},
];

function CarouselImage({ image, alt, caption }) {
	return (
		<div>
			<img alt={alt} src={image} />
			<p className="legend">{caption}</p>
		</div>
	);
}

export default () => (
	<Carousel autoPlay infiniteLoop showThumbs={false} className="gallery">
		{ImageList.map((props, idx) => (
			<CarouselImage key={idx} {...props} />
		))}
	</Carousel>
);
