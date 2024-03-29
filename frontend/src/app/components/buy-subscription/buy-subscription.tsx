//styles
import './buy-subscription.scss';

interface IBuySubscriptionPropsType {
	text: string,
};

const BySubscription = ({text}: IBuySubscriptionPropsType): JSX.Element => {
	return (
		<section className='buy-subscription'>
			<h3 className='buy-subscription__title'>Buy subscription for more
				<svg xmlns="http://www.w3.org/2000/svg" height="25" viewBox="0 -960 960 960" width="25" aria-hidden='true' focusable='false'>
					<path d="m524-262 140-140q11-11 16-24.5t5-28.5q0-32-22.5-54.5T608-532q-20 0-40 13t-44 42q-24-29-44-42t-40-13q-32 0-54.5 22.5T363-455q0 15 5 28.5t16 24.5l140 140Zm35 165q-18 18-43.5 18T472-97L97-472q-10-10-13.5-21T80-516v-304q0-26 17-43t43-17h304q12 0 24 3.5t22 13.5l373 373q19 19 19 44.5T863-401L559-97Zm-41-41 304-304-378-378H140v304l378 378ZM245-664q21 0 36.5-15.5T297-716q0-21-15.5-36.5T245-768q-21 0-36.5 15.5T193-716q0 21 15.5 36.5T245-664ZM140-820Z"/>
				</svg>
			</h3>
			<p className='buy-subscription__text'>{text}</p>
			<a className='buy-subscription__link' href='test'>Subscription</a>
		</section>
	);
};

export default BySubscription;
