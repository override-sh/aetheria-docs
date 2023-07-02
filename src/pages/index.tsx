import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { Banner } from "@site/src/components/banner";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Layout from "@theme/Layout";
import clsx from "clsx";
import React from "react";

import styles from "./index.module.css";

function HomepageHeader() {
	return (
		<header className={clsx("hero hero--primary", styles.heroBanner)}>
			<div className="container">
				<Banner />
				<div className={styles.buttons}>
					<Link
						className="button button--secondary button--lg"
						to="/getting-started"
					>
						🚀 Getting started
					</Link>
				</div>
			</div>
		</header>
	);
}

export default function Home(): JSX.Element {
	const {siteConfig} = useDocusaurusContext();
	return (
		<Layout
			title={`${siteConfig.title}`}
		>
			<HomepageHeader />
			<main>
				<HomepageFeatures />
			</main>
		</Layout>
	);
}
