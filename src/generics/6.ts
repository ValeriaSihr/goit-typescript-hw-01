type Errors = {
  email?: string[];
  firstName?: string[];
  lastName?: string[];
  phone?: string[];
};

type Form = {
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  errors: Errors;
};

type Params = Omit<Form, 'errors'>;


const params: Params = {
  email: 'j.sparrow@tortuga.mail.com',
  firstName: 'Jack',
  lastName: 'Sparrow',
  phone: '+351333444555',
};

console.log(params);
