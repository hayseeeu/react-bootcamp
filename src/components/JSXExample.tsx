function Greeting({ name }: { name: string }) {
  const isMorning = new Date().getHours() < 12;

  return (
    <div className="rounded bg-blue-100 p-4">
      <h1 className="text-xl font-bold">
        {isMorning ? "Good morning" : "Good afternoon"}, {name}!{" "}
      </h1>
    </div>
  );
}

export default Greeting;
