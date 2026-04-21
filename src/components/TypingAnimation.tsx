"use client";

type TypingAnimationProps = {
  text: string;
  className?: string;
  speed?: number;
};

export function TypingAnimation({
  text,
  className = "",
  speed = 34,
}: TypingAnimationProps) {
  const duration = Math.max(text.length * speed, 600);

  return (
    <span
      className={`typing-animation ${className}`.trim()}
      style={
        {
          ["--typing-characters" as string]: text.length,
          ["--typing-duration" as string]: `${duration}ms`,
        }
      }
    >
      <span className="typing-animation__text">{text}</span>
      <i aria-hidden="true" className="typing-animation__caret" />
    </span>
  );
}
