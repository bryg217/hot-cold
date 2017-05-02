import React from 'react';

export default function PreviousGuesses (props) {
	let prevGuesses = props.previousGuesses;
	let prevGuessList = prevGuesses.map((guess, index) => {
		return (<li className="guess-list-item" key={index}>
					{guess}
				</li>
		);
	})
	return (
		<div className="previous-guesses-container">
			<ul className="guess-list">{prevGuessList}</ul>
		</div>
	)
}