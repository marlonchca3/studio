import clsx from "clsx";
import Link from "next/link";

const Logo = ({ invert, href, className, children, ...props }) => {
  className = clsx(
    "group block shrink-0 transition",
    className
  );
  const inner = (
    <span
      className={clsx(
        "font-display text-lg font-semibold tracking-normal transition duration-300 group-hover:text-cyan-500 group-hover:[text-shadow:0_0_18px_rgba(6,182,212,0.75)] group-focus-visible:text-cyan-500 group-focus-visible:[text-shadow:0_0_18px_rgba(6,182,212,0.75)] sm:text-2xl md:text-3xl",
        invert ? "text-white" : "text-neutral-950"
      )}
    >
      {children || "PUROINTERNET"}
    </span>
  );
  if (href) {
    return (
      <Link href={href} className={className} {...props}>
        {inner}
      </Link>
    );
  }
  return (
    <div className={className} {...props}>
      {inner}
    </div>
  );
};

export default Logo;
