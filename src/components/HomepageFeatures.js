import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
	{
		title: 'Flexible',
		image: '../../static/img/icon.gif',
		description: (
			<>
				Stardust allows you to make XR widgets or interfaces and run them among others.
			</>
		),
	},
	{
		title: 'Focus on What Matters',
		image: '../../static/img/icon.gif',
		description: (
			<>
				Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
				ahead and move your docs into the <code>docs</code> directory.
			</>
		),
	},
];

function Feature({image, title, description}) {
	return (
		<div className={clsx('col col--6')}>
			<div className="text--center">
				<img src={image} className={styles.featureImg} alt={title} />
			</div>
			<div className="text--center padding-horiz--md">
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default function HomepageFeatures() {
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
