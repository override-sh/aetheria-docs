import clsx from "clsx";
import React from "react";
import styles from "./styles.module.css";

type FeatureItem = {
	title: string;
	Svg: React.ComponentType<React.ComponentProps<"svg">>;
	description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
	{
		title:       "Intuitive Content Management",
		Svg:         require("@site/static/img/undraw_version_control_re_mg66.svg").default,
		description: (
			             <>
				             Simplify your content management experience with Aetheria's user-friendly interface.
				             Effortlessly create, organize, and update your website's content.
			             </>
		             ),
	},
	{
		title:       "Unparalleled Security Measures",
		Svg:         require("@site/static/img/undraw_safe_re_kiil.svg").default,
		description: (
			             <>
				             Trust Aetheria's robust security features that protect your website from vulnerabilities
				             and ensure the safety of your valuable data.
			             </>
		             ),
	},
	{
		title:       "Advanced Plugin Architecture",
		Svg:         require("@site/static/img/undraw_solution_mindset_re_57bf.svg").default,
		description: (
			             <>
				             Customize and extend Aetheria effortlessly with our powerful plugin system.
				             Unlock unlimited possibilities for your website's functionality.
			             </>
		             ),
	},
];

function Feature(
	{
		title,
		Svg,
		description,
	}: FeatureItem,
) {
	return (
		<div className={clsx("col col--4")}>
			<div className="text--center">
				<Svg
					className={styles.featureSvg}
					role={"img"}
				/>
			</div>
			<div className="text--center padding-horiz--md">
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default function HomepageFeatures(): JSX.Element {
	return (
		<section className={styles.features}>
			<div className="container">
				<div className="row">
					{FeatureList.map((props, idx) => (
						<Feature key={idx} {...props} />
					))}
				</div>
			</div>
		</section>
	);
}
