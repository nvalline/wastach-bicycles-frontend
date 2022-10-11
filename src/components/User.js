import { FaUserCircle } from 'react-icons/fa';
import { useRouter } from 'next/router';
import { useUser } from '@auth0/nextjs-auth0';

import { ProfileStyled } from '../../styles/components/UserStyle';

export default function User() {
	const router = useRouter();
	const { user } = useUser();

	if (!user) {
		return (
			<div onClick={() => router.push('/api/auth/login')}>
				<FaUserCircle />
				<h3>Profile</h3>
			</div>
		);
	} else {
		return (
			<ProfileStyled onClick={() => router.push('/profile')}>
				<img src={user.picture} alt='user.name' />
				<h3>{user.name}</h3>
			</ProfileStyled>
		);
	}
}
