import React, { useCallback, useEffect, useRef, useState } from "react";
import "./SpaceViewport.css";

const SpaceViewport = ({
	children,
	className = "",
	style = {},
	grid = true, // Show grid background
	grabCursor = true, // Enable grab cursor
}) => {
	const viewportRef = useRef(null);
	const [isDragging, setIsDragging] = useState(false);
	const lastPosRef = useRef({ x: 0, y: 0 });

	// Auto-center viewport to content
	const centerViewport = useCallback(() => {
		const viewport = viewportRef.current;
		if (!viewport) return;

		const { scrollWidth, scrollHeight, clientWidth, clientHeight } = viewport;
		viewport.scrollTo({
			left: Math.max(0, scrollWidth / 2 - clientWidth / 2),
			top: Math.max(0, scrollHeight / 2 - clientHeight / 2),
			behavior: "instant",
		});
	}, []);

	// Drag handlers
	const handleMouseDown = useCallback((e) => {
		if (e.target !== viewportRef.current) return;

		setIsDragging(true);
		lastPosRef.current = { x: e.clientX, y: e.clientY };
		e.preventDefault();
	}, []);

	const handleMouseMove = useCallback(
		(e) => {
			if (!isDragging || !viewportRef.current) return;

			const viewport = viewportRef.current;
			const deltaX = lastPosRef.current.x - e.clientX;
			const deltaY = lastPosRef.current.y - e.clientY;

			viewport.scrollBy({ left: deltaX, top: deltaY, behavior: "instant" });
			lastPosRef.current = { x: e.clientX, y: e.clientY };
		},
		[isDragging],
	);

	const handleMouseUp = useCallback(() => {
		setIsDragging(false);
	}, []);

	// Setup event listeners
	useEffect(() => {
		const viewport = viewportRef.current;
		if (!viewport) return;

		centerViewport();

		document.addEventListener("mousemove", handleMouseMove);
		document.addEventListener("mouseup", handleMouseUp);

		return () => {
			document.removeEventListener("mousemove", handleMouseMove);
			document.removeEventListener("mouseup", handleMouseUp);
		};
	}, [centerViewport, handleMouseMove, handleMouseUp]);

	// Resize handler
	useEffect(() => {
		const handleResize = () => {
			// Debounce with requestAnimationFrame
			requestAnimationFrame(centerViewport);
		};

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, [centerViewport]);

	return (
		<main
			ref={viewportRef}
			className={`space-viewport ${className}`}
			onMouseDown={handleMouseDown}
			style={{
				height: "100svh",
				width: "100svw",
				overflow: "scroll",
				position: "relative",
				backgroundColor: grid ? "#241f31" : "transparent",
				cursor:
					grabCursor && isDragging
						? "grabbing"
						: grabCursor
							? "grab"
							: "default",
				userSelect: isDragging ? "none" : "auto",
				WebkitUserSelect: isDragging ? "none" : "auto",
				...style,
			}}
		>
			{grid && <div className="grid-overlay" />}
			<div className="space-center">{children}</div>
		</main>
	);
};

export default SpaceViewport;
