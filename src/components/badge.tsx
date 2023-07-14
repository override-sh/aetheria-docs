import React, { FC, ReactNode } from "react";

interface PillProps {
	children?: ReactNode;
	title?: string;
	variant?: "primary" | "secondary" | "success" | "danger" | "warning" | "info";
}

export const Badge: FC<PillProps> = ({
	                                     children,
	                                     variant,
	                                     title,
                                     }) => {
	return (
		<span className={`badge badge--${variant || "primary"}`}>
	        {children || title}
		</span>
	);
};
