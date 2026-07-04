export function BlobBackground({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 800 600"
      preserveAspectRatio="xMidYMid slice"
      className={`absolute inset-0 h-full w-full ${className}`}
      aria-hidden="true"
    >
      <rect width="800" height="600" fill="var(--mustard)" />
      <path
        d="M0 0h340c40 40 10 90-30 110-60 30-90-10-140 10-60 24-70 90-170 70V0Z"
        fill="var(--navy)"
      />
      <path
        d="M800 0H520c-50 30-40 90 10 110 55 22 90-20 150 5 40 17 70 55 120 45V0Z"
        fill="var(--navy)"
      />
      <path
        d="M0 230c70-30 100 20 170 10 90-13 120-80 210-70 100 11 130 100 90 170-45 78-150 60-200 120-45 53-30 130-100 140H0V230Z"
        fill="var(--blush)"
      />
      <path
        d="M800 180c-70-20-110 30-100 90 12 68 90 80 110 140 15 44 0 120-60 190h50V180Z"
        fill="var(--coral)"
      />
      <path
        d="M0 470c60-40 110 0 150-40 45-45 20-110-30-140-55-33-120-10-170 10v170h50Z"
        fill="var(--plum)"
      />
      <path
        d="M-20 330c60 10 80 70 150 65 85-6 100-85 60-140-35-48-110-45-160-20-20 10-35 25-50 40v55Z"
        fill="var(--turquoise)"
      />
      <path
        d="M420 600c-10-70 50-100 120-95 80 6 100 70 150 95H420Z"
        fill="var(--plum)"
      />
    </svg>
  );
}
