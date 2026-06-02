"use client";

import React from "react";

interface IllustrationProps {
  className?: string;
}

/**
 * Custom-designed high-fidelity SVG illustration representing an empty transaction history.
 * Features glassmorphic cards, curved dotted lines, and floaty nodes representing incoming/outgoing transactions.
 */
export function EmptyHistoryIllustration({ className }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 200 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Background soft glow */}
      <circle cx="100" cy="80" r="60" fill="url(#historyGlow)" opacity="0.15" className="dark:opacity-25" />

      {/* Main card representation */}
      <rect
        x="50"
        y="30"
        width="100"
        height="100"
        rx="16"
        className="stroke-[#bfd6ca]/60 fill-white/40 dark:stroke-[#2b4a43]/60 dark:fill-black/20"
        strokeWidth="1.5"
        strokeDasharray="4 4"
      />

      {/* Placeholder lines representing clean empty entries */}
      <rect
        x="65"
        y="50"
        width="70"
        height="8"
        rx="4"
        className="fill-[#bfd6ca]/30 dark:fill-[#2b4a43]/30"
      />
      <rect
        x="65"
        y="70"
        width="50"
        height="8"
        rx="4"
        className="fill-[#bfd6ca]/20 dark:fill-[#2b4a43]/20"
      />
      <rect
        x="65"
        y="90"
        width="60"
        height="8"
        rx="4"
        className="fill-[#bfd6ca]/20 dark:fill-[#2b4a43]/20"
      />

      {/* Floating incoming transaction node (emerald green) */}
      <g className="animate-bounce" style={{ animationDuration: "3s" }}>
        <circle
          cx="45"
          cy="55"
          r="16"
          className="fill-emerald-500/10 stroke-emerald-500/30 dark:fill-emerald-400/10 dark:stroke-emerald-400/40"
          strokeWidth="1.5"
        />
        <path
          d="M41 55H49M45 51V59"
          className="stroke-emerald-600 dark:stroke-emerald-400"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>

      {/* Floating outgoing transaction node */}
      <g className="animate-bounce" style={{ animationDuration: "4s", animationDelay: "1s" }}>
        <circle
          cx="155"
          cy="85"
          r="14"
          className="fill-gray-400/10 stroke-gray-400/30 dark:fill-gray-500/10 dark:stroke-gray-500/30"
          strokeWidth="1.5"
        />
        <path
          d="M151 85H159"
          className="stroke-gray-600 dark:stroke-gray-400"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>

      {/* Dotted paths connecting things */}
      <path
        d="M45 71C45 95 75 110 95 110"
        className="stroke-[#bfd6ca]/40 dark:stroke-[#2b4a43]/40"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="2 3"
      />

      {/* Sparkles */}
      <path
        d="M135 45L137 49L141 50L137 51L135 55L133 51L129 50L133 49L135 45Z"
        className="fill-amber-400/60 dark:fill-amber-400"
      />

      <defs>
        <radialGradient id="historyGlow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(100 80) rotate(90) scale(60)">
          <stop stopColor="#10B981" />
          <stop offset="1" stopColor="#10B981" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
}

/**
 * Custom-designed SVG illustration representing active cycle / investment growth.
 * Visualizes a glowing sprout growing from a seed, representing money starting to yield returns.
 */
export function EmptyCycleIllustration({ className }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 200 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Background glow */}
      <circle cx="100" cy="80" r="55" fill="url(#cycleGlow)" opacity="0.18" className="dark:opacity-28" />

      {/* Stylized geometric pot */}
      <path
        d="M75 110 L125 110 L120 130 L80 130 Z"
        className="stroke-[#bfd6ca] fill-white/50 dark:stroke-[#2b4a43] dark:fill-black/30"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <line
        x1="70"
        y1="110"
        x2="130"
        y2="110"
        className="stroke-[#bfd6ca] dark:stroke-[#2b4a43]"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Sprout Stem */}
      <path
        d="M100 110 C100 85 92 65 100 45"
        className="stroke-emerald-500 dark:stroke-emerald-400"
        strokeWidth="3.5"
        strokeLinecap="round"
      />

      {/* Leaves */}
      <path
        d="M100 80 C112 76 122 84 122 84 C122 84 112 90 100 84 Z"
        className="fill-emerald-500 stroke-emerald-600 dark:fill-emerald-400 dark:stroke-emerald-500"
        strokeWidth="1"
      />
      <path
        d="M100 65 C88 61 78 69 78 69 C78 69 88 75 100 69 Z"
        className="fill-emerald-400 stroke-emerald-500 dark:fill-emerald-300 dark:stroke-emerald-400"
        strokeWidth="1"
      />
      <path
        d="M100 45 C108 35 102 25 102 25 C102 25 94 33 100 45 Z"
        className="fill-emerald-300 stroke-emerald-400 dark:fill-emerald-200 dark:stroke-emerald-300"
        strokeWidth="1"
      />

      {/* Floating capital / yield sparkles */}
      <g className="animate-pulse">
        <circle cx="135" cy="55" r="4" className="fill-amber-400" />
        <circle cx="65" cy="85" r="3" className="fill-emerald-400" />
        <circle cx="140" cy="95" r="2.5" className="fill-amber-400/80" />
      </g>

      {/* Micro stars */}
      <path
        d="M60 40L62 43L65 44L62 45L60 48L58 45L55 44L58 43L60 40Z"
        className="fill-amber-400/80 dark:fill-amber-400"
      />
      <path
        d="M145 35L146.5 38L149.5 39.5L146.5 41L145 44L143.5 41L140.5 39.5L143.5 38L145 35Z"
        className="fill-emerald-400/90 dark:fill-emerald-300"
      />

      <defs>
        <radialGradient id="cycleGlow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(100 70) rotate(90) scale(60)">
          <stop stopColor="#34D399" />
          <stop offset="1" stopColor="#34D399" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
}

/**
 * Custom-designed SVG illustration representing a secure wallet or vault/safe.
 * Visualizes a sleek outline safe box with floating sparkles, signifying safety and readiness to hold capital.
 */
export function EmptyBalanceIllustration({ className }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 200 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Background glow */}
      <circle cx="100" cy="80" r="58" fill="url(#balanceGlow)" opacity="0.14" className="dark:opacity-24" />

      {/* Main Safe Vault */}
      <rect
        x="55"
        y="35"
        width="90"
        height="90"
        rx="18"
        className="stroke-[#bfd6ca] fill-white/50 dark:stroke-[#2b4a43] dark:fill-black/30"
        strokeWidth="1.5"
      />
      <rect
        x="63"
        y="43"
        width="74"
        height="74"
        rx="12"
        className="stroke-[#bfd6ca]/40 dark:stroke-[#2b4a43]/40"
        strokeWidth="1"
      />

      {/* Vault Wheel Lock */}
      <circle
        cx="100"
        y="80"
        r="22"
        className="stroke-[#bfd6ca] fill-white dark:stroke-[#2b4a43] dark:fill-[#0c2d27]"
        strokeWidth="1.5"
      />
      <circle
        cx="100"
        y="80"
        r="14"
        className="stroke-[#bfd6ca]/50 dark:stroke-[#2b4a43]/50"
        strokeWidth="1"
        strokeDasharray="3 3"
      />

      {/* Vault Spindles */}
      <line x1="100" y1="52" x2="100" y2="60" className="stroke-[#bfd6ca] dark:stroke-[#2b4a43]" strokeWidth="2" strokeLinecap="round" />
      <line x1="100" y1="100" x2="100" y2="108" className="stroke-[#bfd6ca] dark:stroke-[#2b4a43]" strokeWidth="2" strokeLinecap="round" />
      <line x1="72" y1="80" x2="80" y2="80" className="stroke-[#bfd6ca] dark:stroke-[#2b4a43]" strokeWidth="2" strokeLinecap="round" />
      <line x1="120" y1="80" x2="128" y2="80" className="stroke-[#bfd6ca] dark:stroke-[#2b4a43]" strokeWidth="2" strokeLinecap="round" />

      {/* Center cap */}
      <circle
        cx="100"
        cy="80"
        r="5"
        className="fill-emerald-500 dark:fill-emerald-400"
      />

      {/* Sparkles signifying pristine readiness */}
      <path
        d="M150 35L152 39L156 40L152 41L150 45L148 41L144 40L148 39L150 35Z"
        className="fill-amber-400/80 dark:fill-amber-400"
      />
      <path
        d="M48 100L49.5 103L52.5 104.5L49.5 106L48 109L46.5 106L43.5 104.5L46.5 103L48 100Z"
        className="fill-emerald-400/80 dark:fill-emerald-300"
      />

      <defs>
        <radialGradient id="balanceGlow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(100 80) rotate(90) scale(60)">
          <stop stopColor="#059669" />
          <stop offset="1" stopColor="#059669" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
}
