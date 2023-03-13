const users = [
	{
		first_name: 'Camryn',
		last_name: 'Bowden',
		phone_number: '071-843 9129',
		email: 'cam@gmail.com',
		member_password: 'password21',
		fitness_goals: 'lose weight and gain fitness',
		workout_schedule: 'Monday, Tuesday, Friday, Saturday',
		fitness_level: 'Beginner',
	},
	{
		last_name: 'Dirt',
		phone_number: '123-456-7890',
		email: 'joedirta@gmail.com',
		member_password: 'rockHard247',
		fitness_goals: 'Big muscles',
		workout_schedule: 'Tuesday, Thursday, Friday',
		fitness_level: 'Intermediate',
	},
];

const personalMessageArray = ['Have A Great Gym Session!', 'Go Get Those Gains!', 'You Going To Do Great Today!'];

const loginForm = document.querySelector('#loginForm');
const containerMessage = document.querySelector('#display_container');
const messageButton = document.querySelector('#display_button');
const loginMessage = document.querySelector('#message_change');
const messageTitle = document.querySelector('#message_title');
const personalMessage = document.querySelector('#person_message');

loginForm.addEventListener('submit', (e) => {
	e.preventDefault();

	let memberEmail = document.querySelector('#email');
	let memberPassword = document.querySelector('#password');

	if (isEmptyOrSpaces(memberEmail.value) || isEmptyOrSpaces(memberPassword.value)) {
		alert('Please enter in your Details');
	} else {
		CheckUsers(memberEmail.value, memberPassword.value);

		containerMessage.style.display = 'block';
	}
});

const isEmptyOrSpaces = (value) => {
	return value === null || value.match(/^ *$/) !== null;
};

messageButton.addEventListener('click', () => {
	containerMessage.style.display = 'none';
});

function CheckUsers(email, password) {
	let emailExists = false;
	let passwordExists = false;

	let userName = '';

	users.forEach((value) => {
		if (email === value.email) {
			emailExists = true;

			let returnName = value.first_name + ' ' + value.last_name;
			userName = returnName;
		}

		if (password === value.member_password) {
			passwordExists = true;
		}
	});

	if (emailExists && passwordExists) {
		DisplayMessage(true, userName);
	} else if (!emailExists && !passwordExists) {
		DisplayMessage(false, 'You Do Not Have A Membership');
	} else if (!emailExists) {
		DisplayMessage(false, 'Your Email Is Incorrect');
	} else if (!passwordExists) {
		DisplayMessage(false, 'Your Password Is Incorrect');
	}
}

function DisplayMessage(trueOrFalse, message) {
	if (trueOrFalse) {
		messageTitle.innerText = 'Welcome';
		loginMessage.innerText = message + ' to FitWorks GYM';

		let randomNumber = Math.floor(Math.random() * personalMessageArray.length);

		personalMessage.innerText = personalMessageArray[randomNumber];
	} else {
		messageTitle.innerText = 'Error';
		loginMessage.innerText = message;
		personalMessage.innerText = '';
	}
}
