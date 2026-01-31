import React, { useCallback, useEffect, useRef, useState } from "react";
import "./SpaceViewport.css";

const SpaceViewport = ({
	children,
	className = "",
	style = {},
	nebula = true,
	backgroundImage = null, // Background image URL
	grabCursor = true,
	manualCanvasWidth, // Fallback for noscript
	manualCanvasHeight, // Fallback for noscript
	padding = 100, // Padding around content for auto-sizing
}) => {
	const viewportRef = useRef(null);
	const containerRef = useRef(null);
	const backgroundRef = useRef(null);
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
		// Allow drag on viewport or background
		const isViewport = e.target === viewportRef.current;
		const isBackground = e.target.closest(".space-background");
		if (!isViewport && !isBackground) return;

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

	// Parallax effect for background image and nebula
	useEffect(() => {
		const viewport = viewportRef.current;
		const background = backgroundRef.current;
		if (!viewport || !background) return;

		const nebulaEl = background.querySelector(".nebula-layer");
		const bgParallax = 0.15;
		const nebulaParallax = 0.03;

		const handleScroll = () => {
			const scrollX = viewport.scrollLeft;
			const scrollY = viewport.scrollTop;
			const centerX = (viewport.scrollWidth - viewport.clientWidth) / 2;
			const centerY = (viewport.scrollHeight - viewport.clientHeight) / 2;

			// Background image parallax
			if (backgroundImage) {
				const offsetX = (scrollX - centerX) * bgParallax;
				const offsetY = (scrollY - centerY) * bgParallax;
				background.style.backgroundPosition = `calc(50% + ${offsetX}px) calc(50% + ${offsetY}px)`;
			}

			// Nebula parallax (slower/subtler)
			if (nebulaEl) {
				const nebulaX = (scrollX - centerX) * nebulaParallax;
				const nebulaY = (scrollY - centerY) * nebulaParallax;
				nebulaEl.style.transform = `translate(${-nebulaX}px, ${-nebulaY}px)`;
			}
		};

		viewport.addEventListener("scroll", handleScroll, { passive: true });
		handleScroll();

		return () => viewport.removeEventListener("scroll", handleScroll);
	}, [backgroundImage, nebula]);

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
				cursor:
					grabCursor && isDragging
						? "grabbing"
						: grabCursor
							? "grab"
							: "default",
				userSelect: isDragging ? "none" : "auto",
				WebkitUserSelect: isDragging ? "none" : "auto",
				scrollbarGutter: "stable",
				...style,
			}}
		>
			<div
				ref={backgroundRef}
				className="space-background"
				style={{
					backgroundImage: backgroundImage
						? `url(${backgroundImage})`
						: undefined,
				}}
			>
				{nebula && <div className="nebula-layer" />}
			</div>
			<div ref={containerRef} className="space-center">
				{children}
			</div>
		</div>
	);
};

export default SpaceViewport;
