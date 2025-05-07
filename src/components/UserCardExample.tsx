type UserCardProps = { name: string; age: number; role: string };

export function UserCard({ name, age, role }: UserCardProps) {
  return (
    <div className="rounded border p-4 shadow-sm">
      <h2 className="text-xl font-bold">{name}</h2> <p>Age: {age}</p>
      <p>Role: {role}</p>
    </div>
  );
}
