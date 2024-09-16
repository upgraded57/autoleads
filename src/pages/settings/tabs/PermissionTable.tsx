import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const permissions = [
  {
    name: "Create & Assign Account",
    users: ["superAdmin", "admin", "viewer"],
  },
  {
    name: "Delete Account",
    users: ["superAdmin"],
  },
  {
    name: "Create Campaign",
    users: "superAdmin",
  },
  {
    name: "Assign Campaign",
    users: ["superAdmin", "admin"],
  },
  {
    name: "View Campaign",
    users: ["superAdmin", "admin", "viewer"],
  },
  {
    name: "Delete Campaign",
    users: ["superAdmin", "admin"],
  },
  {
    name: "Approvals",
    users: ["superAdmin"],
  },
];

export default function PermissionTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-1/2">Permissions</TableHead>
          <TableHead>Super Admin</TableHead>
          <TableHead>Admin</TableHead>
          <TableHead>User</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {permissions.map((permission, idx) => (
          <TableRow key={idx}>
            <TableCell className="font-medium">{permission.name}</TableCell>
            <TableCell>
              <label
                htmlFor={`label${idx}superAdmin`}
                className="relative flex items-center justify-start"
              >
                <div className="w-6 h-6 relative">
                  <div className="w-6 h-6 rounded-full border-2 border-pry-clr"></div>
                  <input
                    type="radio"
                    id={`label${idx}superAdmin`}
                    className="peer"
                    hidden
                    defaultChecked={permission.users.includes("superAdmin")}
                  />
                  <div className="w-3 h-3 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-pry-clr hidden peer-checked:block"></div>
                </div>
              </label>
            </TableCell>
            <TableCell>
              <label
                htmlFor={`label${idx}admin`}
                className="relative flex items-center justify-start"
              >
                <div className="w-6 h-6 relative">
                  <div className="w-6 h-6 rounded-full border-2 border-pry-clr"></div>
                  <input
                    type="radio"
                    id={`label${idx}admin`}
                    className="peer"
                    hidden
                    defaultChecked={permission.users.includes("admin")}
                  />
                  <div className="w-3 h-3 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-pry-clr hidden peer-checked:block"></div>
                </div>
              </label>
            </TableCell>
            <TableCell>
              <label
                htmlFor={`label${idx}viewer`}
                className="relative flex items-center justify-start"
              >
                <div className="w-6 h-6 relative">
                  <div className="w-6 h-6 rounded-full border-2 border-pry-clr"></div>
                  <input
                    type="radio"
                    id={`label${idx}viewer`}
                    className="peer"
                    hidden
                    defaultChecked={permission.users.includes("viewer")}
                  />
                  <div className="w-3 h-3 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-pry-clr hidden peer-checked:block"></div>
                </div>
              </label>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
