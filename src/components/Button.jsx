import Link from "next/link";
import clsx from "clsx";

const Button = ({ invert, href, className, children, ...props }) => {
  className = clsx(
    className,
    "inline-flex rounded-full px-4 py-1.5 text-sm font-semibold shadow-sm transition",
    invert
      ? "bg-white text-cyan-950 shadow-cyan-950/10 hover:bg-cyan-50"
      : "bg-gradient-to-r from-cyan-500 via-sky-500 to-violet-500 text-white shadow-cyan-500/25 hover:from-cyan-400 hover:via-sky-400 hover:to-violet-400"
  );

  let inner = <span>{children}</span>;
  if (href) {
    return (
      <Link href={href} className={className} {...props}>
        {inner}
      </Link>
    );
  }
  return (
    <button className={className} {...props}>
      {inner}
    </button>
  );
};

export default Button;
