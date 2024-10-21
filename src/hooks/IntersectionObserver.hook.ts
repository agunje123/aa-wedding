import { useEffect } from "react";

export const useIntersectionObserver = (elementsRefs, options) => {
	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("visible");
				}
			});
		}, options);

		elementsRefs.forEach((ref) => {
			if (ref.current) {
				observer.observe(ref.current);
			}
		});

		return () => {
			elementsRefs.forEach((ref) => {
				if (ref.current) {
					observer.unobserve(ref.current);
				}
			});
		};
	}, [elementsRefs, options]);
};
