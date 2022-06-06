import ErrorMessage	from '../errorMessage/errorMessage';
import { Link } from 'react-router-dom';

const Page404 = () => {
	return (
		<div style={{
			textAlign: 'center'
		}}>
			<ErrorMessage/>
			<Link 
				style={{
					'display': 'block',
					'textAlign': 'center',
					'fontWeight': 'bold',
					'fontSize': '24px',
					'marginTop': '30px',
					'color': 'white'
				}}
				to="/">
					Back to main page
			</Link>
		</div>
	)
}

export default Page404;