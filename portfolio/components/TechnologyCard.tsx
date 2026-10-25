export default function TechnologyCard({ toolName }: { toolName: string }) {
  return (
    <div className="px-3 py-1.5 rounded-full bg-slate-200">
      <p className="text-sm font-normal text-slate-700">{toolName}</p>
    </div>
  );
}
