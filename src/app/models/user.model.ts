export interface User {
  firstName: string;
  lastName: string;
  email: string;
  dateOfBirth: string;
  phone: string;
  address: string;
  avatar: string;
  password: string;
  // batchList: any;
  role: Role;
  createdAt: string;
  updatedAt: string;
}

enum Role {
  superadmin,
  admin,
  student,
  teacher,
  assistant,
}
