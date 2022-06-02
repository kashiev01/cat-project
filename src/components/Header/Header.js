import React from "react";
import classes from "./Header.module.css";
import Card from "../UI/Card";

const Header = () => {
	return (
		<header className={classes.header}>
			<Card>
				<nav>
					<ul className={classes.menu}>
						<li>
							<div className={classes.allCats}>Все котики</div>
						</li>
						<li>
							<div className={classes.favCats}>Любимые котики</div>
						</li>
					</ul>
				</nav>
			</Card>
		</header>
	);
};

export default Header;
