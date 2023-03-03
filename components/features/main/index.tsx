import { Card } from "@/components/ui/card";

function Main() {
  return (
    <main className="flex-col container mx-auto py-4">
      <Card
        className="text-md bg-slate-400 max-w-sm rounded overflow-hidden shadow-lg my-4 flex-col mx-auto"
        title="Test Card One"
      />
      <Card
        className="text-md bg-pink-400 max-w-sm rounded overflow-hidden shadow-lg my-4 flex-col mx-auto"
        title="Test Card Two"
      />
      <Card
        className="text-md bg-slate-400 max-w-sm rounded overflow-hidden shadow-lg my-4 flex-col mx-auto"
        title="Test Card Three"
      />
      <Card
        className="text-md bg-pink-400 max-w-sm rounded overflow-hidden shadow-lg my-4 flex-col mx-auto"
        title="Test Card Four"
      />
    </main>
  );
}
export default Main;
