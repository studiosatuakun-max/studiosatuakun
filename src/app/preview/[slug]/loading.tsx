export default function PreviewLoading() {
  return (
    <div className="flex flex-col h-screen overflow-hidden bg-paper">
      {/* Skeleton Top Bar */}
      <div className="h-16 border-b border-[rgba(107,110,115,0.25)] flex items-center justify-between px-6 flex-shrink-0">
        <div className="flex items-center gap-4">
          <div className="w-20 h-4 bg-[rgba(107,110,115,0.15)] animate-pulse rounded" />
          <div className="w-40 h-4 bg-[rgba(107,110,115,0.15)] animate-pulse rounded" />
        </div>
        <div className="flex gap-3">
          <div className="w-28 h-8 bg-[rgba(107,110,115,0.15)] animate-pulse rounded" />
          <div className="w-32 h-8 bg-ink/20 animate-pulse rounded" />
        </div>
      </div>
      {/* Skeleton Iframe Area */}
      <div className="flex-1 bg-[rgba(107,110,115,0.05)] animate-pulse" />
    </div>
  );
}
