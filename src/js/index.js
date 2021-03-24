//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";
import PropTypes from "prop-types";

function SimpleCounter(props) {
	return (
		<div className="SecondsCounter">
			<div className="Clock">
				<i className="far fa-clock"></i>
			</div>
			<div clasName="Five">{props.DigitFive % 10}</div>
			<div className="Four">{props.DigitFour % 10}</div>
			<div className="Three">{props.DigitThree % 10}</div>
			<div className="Two">{props.DigitTwo % 10}</div>
			<div className="One">{props.DigitOne % 10}</div>
			<div className="Zero">{props.DigitZero % 10}</div>
		</div>
	);
}

SimpleCounter.propTypes = {
	DigitFive: PropTypes.number,
	DigitFour: PropTypes.number,
	DigitThree: PropTypes.number,
	DigitTwo: PropTypes.number,
	DigitOne: PropTypes.number,
	DigitZero: PropTypes.number
};

let counter = 0;
setInterval(function() {
	const Five = Math.floor(counter / 100000);
	const Four = Math.floor(counter / 10000);
	const Three = Math.floor(counter / 1000);
	const Two = Math.floor(counter / 100);
	const One = Math.floor(counter / 10);
	const Zero = Math.floor(counter / 1);

	counter++;

	ReactDOM.render(
		<SimpleCounter
			DigitZero={Zero}
			DigitOne={One}
			DigitTwo={Two}
			DigitThree={Three}
			DigitFour={Four}
			DigitFive={Five}
		/>,
		document.querySelector("#app")
	);
}, 1000);
