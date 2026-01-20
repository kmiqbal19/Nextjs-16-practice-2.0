import Link from "next/link";

const users: Array<{ id: number; name: string; email: string }> = [
  { id: 1, name: "Alice Johnson", email: "john@example.com" },
  { id: 2, name: "Bob Smith", email: "bob@example.com" },
  { id: 3, name: "Charlie Brown", email: "charlie@example.com" },
];

const UsersList = () =>
  users.map((user) => (
    <Link
      key={user.id}
      className="p-4 border-b w-100"
      href={`/dashboard/users/${user.id}`}
    >
      <li key={user.id} className="p-4 border-b w-100">
        <h2 className="text-lg font-semibold">{user.name}</h2>
        <p className="text-sm text-gray-600">{user.email}</p>
      </li>
    </Link>
  ));

export default function UsersPage() {
  return <UsersList />;
}
