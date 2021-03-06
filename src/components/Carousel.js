import React from 'react';
import { Carousel } from 'react-responsive-carousel';

const ImageList = [
	{
		image: "img/carousel/multipleclients.jpg",
		alt: "A scene showing multiple widgets, including sliders like an equalizer and a virtual touchscreen.",
		caption: "Multiple objects working independently all at once.",
	},
	{
		image: "img/carousel/spatialcode.png",
		alt: "To the left, a code editor showing Stardust Fusion creating several models and transforming them on the logicStep. To the right is the program running in Stardust.",
		caption: "Code vs output of the Spatial Fusion demo.",
	},
	{
		image: "img/carousel/panels.png",
		alt: "A series of application windows as 3D panels similar to small wooden boards in proportions with a Panasonic CRT TV model in the center showing Agregore (the browser).",
		caption: "Panels for wayland apps and a CRT panel shell for XR UI.",
	},
]

function CarouselImage({image, alt, caption}) {
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
