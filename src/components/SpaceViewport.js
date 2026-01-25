import React, { useCallback, useEffect, useRef, useState } from "react";
import "./SpaceViewport.css";

const SpaceViewport = ({
	children,
	className = "",
	style = {},
	grid = true,
	grabCursor = true,
}) => {
	const viewportRef = useRef(null);
	const containerRef = useRef(null);
	const [isDragging, setIsDragging] = useState(false);
	const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
	const dragStartRef = useRef({ x: 0, y: 0, scrollLeft: 0, scrollTop: 0 });
	const resizeRef = useRef({
		observing: false,
		observer: null,
		isResizing: false,
		centerScrollPos: { left: 0, top: 0 },
	});

	const calculateBounds = useCallback(() => {
		const viewport = viewportRef.current;
		const container = containerRef.current;
		if (!viewport || !container) return;

		const children = container.querySelectorAll(":scope > *");
		if (children.length === 0) {
			setContainerSize({ width: 0, height: 0 });
			return;
		}

		let minX = -Infinity, minY = -Infinity, maxX = Infinity, maxY = Infinity;

		children.forEach((child) => {
			const rect = child.getBoundingClientRect();
			const containerRect = container.getBoundingClientRect();
			const x = rect.left - containerRect.left;
			const y = rect.top - containerRect.top;
			minX = Math.min(minX, x);
			minY = Math.min(minY, y);
			maxX = Math.max(maxX, x + rect.width);
			maxY = Math.max(maxY, y + rect.height);
		});

		const width = maxX - minX;
		const height = maxY - minY;
		const offsetX = minX;
		const offsetY = minY;

		setContainerSize({ width, height, offsetX, offsetY });
	}, []);

	const handleMouseDown = useCallback((e) => {
		if (e.target !== viewportRef.current) return;

		setIsDragging(true);
		dragStartRef.current = {
			x: e.clientX,
			y: e.clientY,
			scrollLeft: viewportRef.current.scrollLeft,
			scrollTop: viewportRef.current.scrollTop,
		};
	}, []);

	const handleMouseMove = useCallback((e) => {
		if (!isDragging || !viewportRef.current) return;

		const dx = e.clientX - dragStartRef.current.x;
		const dy = e.clientY - dragStartRef.current.y;

		viewportRef.current.scrollLeft = dragStartRef.current.scrollLeft + dx;
		viewportRef.current.scrollTop = dragStartRef.current.scrollTop + dy;
	}, [isDragging]);

	const handleMouseUp = useCallback(() => {
		setIsDragging(false);
	}, []);

	useEffect(() => {
		const viewport = viewportRef.current;
		if (!viewport) return;

		calculateBounds();

		document.addEventListener("mousemove", handleMouseMove);
		document.addEventListener("mouseup", handleMouseUp);

		return () => {
			document.removeEventListener("mousemove", handleMouseMove);
			document.removeEventListener("mouseup", handleMouseUp);
		};
	}, [calculateBounds, handleMouseMove, handleMouseUp]);

	useEffect(() => {
		const viewport = viewportRef.current;
		if (!viewport) return;

		let resizeTimeout;

		const resizeObserver = new ResizeObserver((entries) => {
			for (const entry of entries) {
				if (entry.target === viewport) {
					if (!resizeRef.current.isResizing) {
						const { clientWidth, clientHeight, scrollWidth, scrollHeight } = viewport;
						resizeRef.current.centerScrollPos = {
							left: scrollWidth / 2 - clientWidth / 2,
							top: scrollHeight / 2 - clientHeight / 2,
						};
						resizeRef.current.isResizing = true;
					}

					clearTimeout(resizeTimeout);
					resizeTimeout = setTimeout(() => {
						resizeRef.current.isResizing = false;
						calculateBounds();
						viewport.scrollTo({
							left: resizeRef.current.centerScrollPos.left,
							top: resizeRef.current.centerScrollPos.top,
							behavior: "instant",
						});
					}, 100);
					break;
				}
			}
		});

		resizeObserver.observe(viewport);
		return () => {
			resizeObserver.disconnect();
			clearTimeout(resizeTimeout);
		};
	}, [calculateBounds]);

	return (
		<main
			ref={viewportRef}
			className={`space-viewport ${className}`}
			onMouseDown={handleMouseDown}
			style={{
				height: "100svh", // full window height
				width: "100svw", // full window width
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
			<div
				ref={containerRef}
				className="space-center"
				style={{
					width: containerSize.width || "max-content",
					height: containerSize.height || "max-content",
				}}
			>
				{children}
			</div>
		</main>
	);
};

export default SpaceViewport;
