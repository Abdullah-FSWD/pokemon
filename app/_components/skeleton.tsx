export function Skeleton() {
  return (
    <>
      <div className="group hover:shadow-md transition overflow-hidden border rounded-lg p-3 h-full">
        <div className="flex justify-between mb-4">
          <div className="bg-muted animate-pulse w-24 h-6 rounded-md"></div>
          <div className="bg-muted animate-pulse w-12 h-6 rounded-md"></div>
        </div>

        <div className="relative w-full aspect-video rounded-md overflow-hidden justify-items-center bg-transparent">
          <div className="bg-muted animate-pulse w-full h-full rounded-md"></div>
        </div>

        <div className="flex justify-around items-center rounded-md opacity-60 bg-background p-3 hover:opacity-80">
          <div className="bg-muted animate-pulse w-16 h-6 rounded-md"></div>
          <div className="bg-muted animate-pulse w-16 h-6 rounded-md"></div>
          <div className="bg-muted animate-pulse w-16 h-6 rounded-md"></div>
        </div>
      </div>
    </>
  );
}
