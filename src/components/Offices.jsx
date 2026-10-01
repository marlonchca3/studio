import clsx from "clsx";

function Office({ name, children, invert = false }) {
  return (
    <address
      className={clsx(
        "text-sm not-italic",
        invert ? "text-neutral-300" : "text-neutral-600"
      )}
    >
      <strong className={invert ? "text-white" : "text-neutral-950"}>
        {name}
      </strong>
      <br />
      {children}
    </address>
  );
}

const Offices = ({ invert = false, ...props }) => {
  return (
    <ul role="list" {...props}>
      <li>
        <Office name="Peru" invert={invert}>
          Atencion remota
          <br />
          Proyectos para Latinoamerica
        </Office>
      </li>
      <li>
        <Office name="Online" invert={invert}>
          Reuniones por videollamada
          <br />
          Soporte y seguimiento digital
        </Office>
      </li>
    </ul>
  );
};

export default Offices;
