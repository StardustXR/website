import React, { useCallback, useEffect, useRef, useState } from "react";
import "./SpaceViewport.css";

const SpaceViewport = ({
	children,
	className = "",
	style = {},
	grid = true,
	grabCursor = true,
	manualCanvasWidth, // Fallback for noscript
	manualCanvasHeight, // Fallback for noscript
	padding = 100, // Padding around content for auto-sizing
}) => {
	const viewportRef = useRef(null);
	const containerRef = useRef(null);
	const [isDragging, setIsDragging] = useState(false);
	const [autoSize, setAutoSize] = useState({ width: null, height: null });
	const dragStartRef = useRef({ x: 0, y: 0, scrollLeft: 0, scrollTop: 0 });
	const hasCenteredRef = useRef(false);

	const centerViewport = useCallback(() => {
		const viewport = viewportRef.current;
		if (!viewport) return;

		const { scrollWidth, scrollHeight, clientWidth, clientHeight } = viewport;
		viewport.scrollTo({
			left: (scrollWidth - clientWidth) / 2,
			top: (scrollHeight - clientHeight) / 2,
			behavior: "instant",
		});
	}, []);

	const calculateBounds = useCallback(() => {
		const container = containerRef.current;
		if (!container) return;

		const childElements = container.querySelectorAll(":scope > *");
		if (childElements.length === 0) {
			setAutoSize({ width: null, height: null });
			return;
		}

		let maxExtentX = 0;
		let maxExtentY = 0;

		childElements.forEach((child) => {
			const style = window.getComputedStyle(child);
			const left = parseFloat(style.left) || 0;
			const top = parseFloat(style.top) || 0;
			const width = child.offsetWidth;
			const height = child.offsetHeight;

			// Account for transform: translate(-50%, -50%) centering
			// Find the furthest edge from center in any direction
			const extentLeft = Math.abs(left - width / 2);
			const extentRight = Math.abs(left + width / 2);
			const extentTop = Math.abs(top - height / 2);
			const extentBottom = Math.abs(top + height / 2);

			maxExtentX = Math.max(maxExtentX, extentLeft, extentRight);
			maxExtentY = Math.max(maxExtentY, extentTop, extentBottom);
		});

		// Canvas is symmetric around center, so double the max extent + padding
		const width = maxExtentX * 2 + padding * 2;
		const height = maxExtentY * 2 + padding * 2;

		setAutoSize({ width, height });
	}, [padding]);

	const handleMouseDown = useCallback((e) => {
		// Allow drag on viewport or grid overlay
		const isViewport = e.target === viewportRef.current;
		const isGridOverlay = e.target.classList.contains("grid-overlay");
		if (!isViewport && !isGridOverlay) return;

		setIsDragging(true);
		dragStartRef.current = {
			x: e.clientX,
			y: e.clientY,
			scrollLeft: viewportRef.current.scrollLeft,
			scrollTop: viewportRef.current.scrollTop,
		};
		e.preventDefault();
	}, []);

	const handleMouseMove = useCallback(
		(e) => {
			if (!isDragging || !viewportRef.current) return;

			const dx = e.clientX - dragStartRef.current.x;
			const dy = e.clientY - dragStartRef.current.y;

			// Subtract delta so content follows cursor direction
			viewportRef.current.scrollLeft = dragStartRef.current.scrollLeft - dx;
			viewportRef.current.scrollTop = dragStartRef.current.scrollTop - dy;
		},
		[isDragging],
	);

	const handleMouseUp = useCallback(() => {
		setIsDragging(false);
	}, []);

	// Calculate bounds and center on mount
	useEffect(() => {
		const viewport = viewportRef.current;
		if (!viewport) return;

		calculateBounds();

		// Center viewport after a frame to ensure layout is complete
		requestAnimationFrame(() => {
			if (!hasCenteredRef.current) {
				centerViewport();
				hasCenteredRef.current = true;
			}
		});

		document.addEventListener("mousemove", handleMouseMove);
		document.addEventListener("mouseup", handleMouseUp);

		return () => {
			document.removeEventListener("mousemove", handleMouseMove);
			document.removeEventListener("mouseup", handleMouseUp);
		};
	}, [calculateBounds, centerViewport, handleMouseMove, handleMouseUp]);

	// Handle resize - recalculate bounds and maintain center
	useEffect(() => {
		const viewport = viewportRef.current;
		if (!viewport) return;

		let resizeTimeout;

		const resizeObserver = new ResizeObserver(() => {
			clearTimeout(resizeTimeout);
			resizeTimeout = setTimeout(() => {
				calculateBounds();
				centerViewport();
			}, 100);
		});

		resizeObserver.observe(viewport);
		return () => {
			resizeObserver.disconnect();
			clearTimeout(resizeTimeout);
		};
	}, [calculateBounds, centerViewport]);

	// Use auto-size if available, otherwise fall back to manual props
	const finalWidth = autoSize.width || manualCanvasWidth;
	const finalHeight = autoSize.height || manualCanvasHeight;

	return (
		<div
			ref={viewportRef}
			className={`space-viewport ${className}`}
			onMouseDown={handleMouseDown}
			style={{
				// Pass calculated size as CSS variables for external styling
				"--canvas-width": finalWidth ? `${finalWidth}px` : undefined,
				"--canvas-height": finalHeight ? `${finalHeight}px` : undefined,
				backgroundColor: grid ? undefined : "transparent",
				cursor:
					grabCursor && isDragging
						? "grabbing"
						: grabCursor
							? "grab"
							: "default",
				userSelect: isDragging ? "none" : "auto",
				WebkitUserSelect: isDragging ? "none" : "auto",
				scrollbarGutter: "stable" /* Track then thumb */,
				...style,
			}}
		>
			{grid && <div className="grid-overlay" />}
			<div ref={containerRef} className="space-center">
				{children}
			</div>
		</div>
	);
};

export default SpaceViewport;
