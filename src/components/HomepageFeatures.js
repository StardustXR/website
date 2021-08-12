import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
	{
		title: 'Flexible',
		image: '/img/icon.gif',
		description: (
			<>
				Stardust allows you to make XR widgets or interfaces and run them among others.
				You don&apos;t have to make a whole system UI, just a few pieces.
			</>
		),
	},
	{
		title: 'Streamlined',
		image: 'https://stereokit.net/img/StereoKitLogoLight.svg',
		description: (
			<>
				Stardust is made using <a href="https://stereokit.net">StereoKit</a>, an XR application/rendering toolkit allowing for a fast and lightweight display server.
				The compiled server binary when statically linking StereoKit is less than 20MB and uses ~50MB of RAM (varies depending on clients).
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
