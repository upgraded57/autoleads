import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { HiDotsVertical } from "react-icons/hi";

const users = [
  {
    name: "Abudu Olatunbosun",
    email: "abuduolatunbosun@gmail.com",
    role: "admin",
  },
  {
    name: "Shokunbi Micheal",
    email: "	shokunbimicheal@yahoo.com",
    role: "user",
  },
  {
    name: "Marcel Mars",
    email: "marcelmars@gmail.com",
    role: "user",
  },
  {
    name: "Augustine Ikhide",
    email: "	augustineikhide@gmail.com",
    role: "viewer",
  },
];

export default function UsersTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user, idx) => (
          <TableRow key={idx}>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.role}</TableCell>
            <TableCell>
              <HiDotsVertical />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
