import React, { useState } from 'react'
import './App.css'

export default function App() {
	const questions = [
		{
			questionText: 'You need to transmit PII via email and you want to maintain its confidenitality. Which of the following choices is the BEST Solution?',
			answerOptions: [
				{ answerText: ' Use hashes.', isCorrect: false },
				{ answerText: 'Encrypt it before sending', isCorrect:true },
				{ answerText: 'Protect it with a digital signature.', isCorrect: false },
				{ answerText: 'Use RAID.', isCorrect: false },
			],
		},
		{
			questionText: 'Management has mandated the use of digital signatures by all personnel within your organization. Which of the following use cases does this primarily support?',
			answerOptions: [
				{ answerText: ' Supporting confidentiality', isCorrect: false },
				{ answerText: 'Supporting availability', isCorrect: true },
				{ answerText: 'Supporting obfuscation', isCorrect: false },
				{ answerText: ' Supporting non-repudiation', isCorrect: false },
			],
		},
		{
			questionText: 'As the CTO, Marge is implementing a security program. She has included security controls to address confidentiality and availability. Of the following choices, what else should she include?',
			answerOptions: [
				{ answerText: ' Ensure critical systems provide uninterrupted service', isCorrect: false },
				{ answerText: 'Protect data-in-transit from unauthorized disclosure', isCorrect: false },
				{ answerText: 'Ensure systems are not susceptible to unauthorized changes.', isCorrect: true},
				{ answerText: 'Secure data to prevent unauthorized disclosure.', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div>
			<h1 className="header">CompTIA Security+ Study Guide</h1>
		<div className='app'>
			
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
		</div>
	);
}

