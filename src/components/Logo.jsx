import clsx from "clsx";
import Link from "next/link";

const Logo = ({ invert, href, className, children, ...props }) => {
  className = clsx(
    "block shrink-0 transition hover:opacity-90",
    className
  );
  const inner = (
    <span
      className={clsx(
        "font-display text-lg font-semibold tracking-normal sm:text-2xl md:text-3xl",
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
