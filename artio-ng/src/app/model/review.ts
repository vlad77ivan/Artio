import { Business } from './business';
import { User } from './user';

export interface Review {
    text: string;
	timestamp: Date;
	rating: number;
	user: string;
	business: string;
}