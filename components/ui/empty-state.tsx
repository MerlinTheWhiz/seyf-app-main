"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  EmptyHistoryIllustration,
  EmptyCycleIllustration,
  EmptyBalanceIllustration,
} from "./empty-state-illustrations";

export interface EmptyStateAction {
  label: string;
  href?: string;
  onClick?: () => void;
}

export type EmptyStateIllustrationType = "history" | "cycle" | "balance";

export interface EmptyStateProps {
  /** The type of illustration or a custom React component */
  illustration: EmptyStateIllustrationType | React.ReactNode;
  title: string;
  description: string;
  primaryAction: EmptyStateAction;
  secondaryAction?: EmptyStateAction;
  /** "full" for complete routes/pages; "compact" for inside dashboards/cards */
  variant?: "full" | "compact";
  className?: string;
}

export function EmptyState({
  illustration,
  title,
  description,
  primaryAction,
  secondaryAction,
  variant = "full",
  className,
}: EmptyStateProps) {
  const isFull = variant === "full";

  const renderIllustration = () => {
    if (typeof illustration !== "string") {
      return illustration;
    }

    const illustrationClass = cn(
      "mx-auto transition-transform duration-500 hover:scale-105",
      isFull ? "h-36 w-auto sm:h-44" : "h-24 w-auto"
    );

    switch (illustration) {
      case "history":
        return <EmptyHistoryIllustration className={illustrationClass} />;
      case "cycle":
        return <EmptyCycleIllustration className={illustrationClass} />;
      case "balance":
        return <EmptyBalanceIllustration className={illustrationClass} />;
      default:
        return null;
    }
  };

  const renderAction = (action: EmptyStateAction, isPrimary = true) => {
    const buttonClass = cn(
      "rounded-full font-bold transition-all duration-300",
      isPrimary
        ? "bg-foreground text-background hover:bg-foreground/90 active:scale-95 shadow-sm"
        : "bg-secondary text-muted-foreground hover:bg-secondary/80 hover:text-foreground active:scale-95 border border-border/50",
      isFull ? "h-11 px-6 text-sm" : "h-9 px-4 text-xs"
    );

    if (action.href) {
      return (
        <Button asChild className={buttonClass} variant={isPrimary ? "default" : "secondary"}>
          <Link href={action.href}>{action.label}</Link>
        </Button>
      );
    }

    return (
      <Button
        onClick={action.onClick}
        className={buttonClass}
        variant={isPrimary ? "default" : "secondary"}
        type="button"
      >
        {action.label}
      </Button>
    );
  };

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center text-center",
        isFull
          ? "rounded-[2rem] border border-border bg-card/45 p-8 md:p-12 shadow-[0_8px_32px_rgba(0,0,0,0.04)] backdrop-blur-md dark:bg-card/25"
          : "p-4",
        className
      )}
    >
      {/* Illustration container */}
      <div className={cn("relative mb-6 flex justify-center", isFull ? "h-36 sm:h-44" : "h-24")}>
        {renderIllustration()}
      </div>

      {/* Text Copy */}
      <div className={cn("max-w-md space-y-2", isFull ? "mb-8" : "mb-5")}>
        <h3
          className={cn(
            "font-black tracking-tight text-foreground",
            isFull ? "text-xl md:text-2xl" : "text-sm md:text-base"
          )}
        >
          {title}
        </h3>
        <p
          className={cn(
            "leading-relaxed text-muted-foreground mx-auto",
            isFull ? "text-sm md:text-base max-w-sm" : "text-xs max-w-xs"
          )}
        >
          {description}
        </p>
      </div>

      {/* Call to Actions */}
      <div
        className={cn(
          "flex items-center justify-center gap-3 w-full",
          isFull ? "flex-col sm:flex-row max-w-xs sm:max-w-none" : "flex-row"
        )}
      >
        {renderAction(primaryAction, true)}
        {secondaryAction && renderAction(secondaryAction, false)}
      </div>
    </div>
  );
}
