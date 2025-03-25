export interface Person {
  id?: number;  // Optional because new entries won't have an ID yet
  name: string;
  city: string;
  phone: string;
  email: string;
}
