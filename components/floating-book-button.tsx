"use client"

interface FloatingBookButtonProps {
  onClick: () => void
}

export default function FloatingBookButton({ onClick }: FloatingBookButtonProps) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-8 right-8 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 font-bold flex items-center gap-2 z-40"
    >
      <span>📅</span>
      Book Now
    </button>
  )
}
