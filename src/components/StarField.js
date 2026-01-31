import React, { useMemo } from "react";

// Seeded random for consistent builds
function seededRandom(seed) {
	const x = Math.sin(seed++) * 10000;
	return x - Math.floor(x);
}

function generateStars(count, seed, options = {}) {
	const {
		minSize = 1,
		maxSize = 2,
		minOpacity = 0.5,
		maxOpacity = 1,
		width = 4000,
		height = 4000,
		colors = ["rgba(255,255,255,{opacity})"],
	} = options;

	const stars = [];
	for (let i = 0; i < count; i++) {
		const s = seed + i * 3;
		const x = seededRandom(s) * width;
		const y = seededRandom(s + 1) * height;
		const size = minSize + seededRandom(s + 2) * (maxSize - minSize);
		const opacity = minOpacity + seededRandom(s + 3) * (maxOpacity - minOpacity);
		const colorTemplate = colors[Math.floor(seededRandom(s + 4) * colors.length)];
		const color = colorTemplate.replace("{opacity}", opacity.toFixed(2));
		const twinkleDelay = seededRandom(s + 5) * 5;
		const twinkleDuration = 2 + seededRandom(s + 6) * 4;

		stars.push({ x, y, size, color, twinkleDelay, twinkleDuration });
	}
	return stars;
}

function generateCluster(centerX, centerY, count, spread, seed, options = {}) {
	const stars = [];
	for (let i = 0; i < count; i++) {
		const s = seed + i * 4;
		// Gaussian-ish distribution around center
		const angle = seededRandom(s) * Math.PI * 2;
		const dist = seededRandom(s + 1) * seededRandom(s + 2) * spread;
		const x = centerX + Math.cos(angle) * dist;
		const y = centerY + Math.sin(angle) * dist;
		const size = (options.minSize || 1) + seededRandom(s + 3) * ((options.maxSize || 3) - (options.minSize || 1));
		const opacity = (options.minOpacity || 0.6) + seededRandom(s + 4) * ((options.maxOpacity || 1) - (options.minOpacity || 0.6));
		const colors = options.colors || ["rgba(255,255,255,{opacity})"];
		const colorTemplate = colors[Math.floor(seededRandom(s + 5) * colors.length)];
		const color = colorTemplate.replace("{opacity}", opacity.toFixed(2));
		const twinkleDelay = seededRandom(s + 6) * 5;
		const twinkleDuration = 2 + seededRandom(s + 7) * 4;

		stars.push({ x, y, size, color, twinkleDelay, twinkleDuration });
	}
	return stars;
}

export default function StarField({
	width = 4000,
	height = 4000,
	seed = 12345,
	layers = [
		{ count: 200, minSize: 0.5, maxSize: 1, minOpacity: 0.3, maxOpacity: 0.6 },
		{ count: 100, minSize: 1, maxSize: 2, minOpacity: 0.5, maxOpacity: 0.8 },
		{ count: 50, minSize: 2, maxSize: 3, minOpacity: 0.7, maxOpacity: 1 },
	],
	clusters = [],
	twinkle = true,
	className = "",
	style = {},
}) {
	const allStars = useMemo(() => {
		let stars = [];
		let currentSeed = seed;

		// Generate layer stars
		layers.forEach((layer, i) => {
			const layerStars = generateStars(layer.count, currentSeed + i * 1000, {
				...layer,
				width,
				height,
			});
			stars = stars.concat(layerStars.map(s => ({ ...s, layer: i })));
		});

		// Generate cluster stars
		clusters.forEach((cluster, i) => {
			const clusterStars = generateCluster(
				cluster.x,
				cluster.y,
				cluster.count || 30,
				cluster.spread || 200,
				currentSeed + 10000 + i * 500,
				cluster
			);
			stars = stars.concat(clusterStars.map(s => ({ ...s, layer: cluster.layer || 2 })));
		});

		return stars;
	}, [width, height, seed, layers, clusters]);

	return (
		<div
			className={`starfield-generated ${className}`}
			style={{
				position: "absolute",
				top: 0,
				left: 0,
				width,
				height,
				pointerEvents: "none",
				...style,
			}}
		>
			{allStars.map((star, i) => (
				<div
					key={i}
					style={{
						position: "absolute",
						left: star.x,
						top: star.y,
						width: star.size,
						height: star.size,
						borderRadius: "50%",
						backgroundColor: star.color,
						boxShadow: star.size > 2 ? `0 0 ${star.size * 2}px ${star.color}` : undefined,
						animation: twinkle
							? `starfield-twinkle ${star.twinkleDuration}s ease-in-out ${star.twinkleDelay}s infinite`
							: undefined,
					}}
				/>
			))}
			{twinkle && (
				<style>{`
					@keyframes starfield-twinkle {
						0%, 100% { opacity: 1; }
						50% { opacity: 0.3; }
					}
				`}</style>
			)}
		</div>
	);
}

// Export generators for custom use
export { generateStars, generateCluster };
