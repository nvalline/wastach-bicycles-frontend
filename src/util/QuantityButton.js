import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';

export default function Button({ icon, onClick }) {
	if (icon === 'plus') {
		return (
			<button>
				<AiFillPlusCircle onClick={onClick} />
			</button>
		);
	}

	if (icon === 'minus') {
		return (
			<button>
				<AiFillMinusCircle onClick={onClick} />
			</button>
		);
	}
}
