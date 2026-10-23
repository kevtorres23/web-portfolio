export default function ToolCard({ toolName }: { toolName: string }) {
  return (
    <div className="px-5 py-3 rounded-lg bg-white/7 hover:bg-white/10">
      <p className="text-sm font-normal text-white">{toolName}</p>
    </div>
  );
}
