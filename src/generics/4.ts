type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
}

function createOrUpdateUser(initialValues: Partial<User>) {
  
  const updatedUser: User = {
    name: initialValues.name || 'Default Name',
    surname: initialValues.surname || 'Default Surname',
    email: initialValues.email || 'default@example.com',
    password: initialValues.password || 'defaultPassword'
  };

  console.log(updatedUser);
}


createOrUpdateUser({ 
  email: 'user@mail.com', 
  password: 'password123' 
});
