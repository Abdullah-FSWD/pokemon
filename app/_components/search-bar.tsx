import { Button } from "@/components/ui/button";

export function SearchBar() {
  return (
    <div className="flex items-center">
      <input
        placeholder="Search any field"
        className="mx-4 p-4 w-full m-4 items-center"
      />
      <Button size="lg" className="p-6">
        Search
      </Button>
    </div>
  );
}
