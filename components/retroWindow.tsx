import { ReactNode } from "react";

type RetroWindowProps = {
  id?: string;
  icon: string;
  title: string;
  menu?: string[];
  status?: string;
  children: ReactNode;
};

export default function RetroWindow({
  id,
  icon,
  title,
  menu,
  status,
  children,
}: RetroWindowProps) {
  return (
    <section id={id} className="retro-window scroll-mt-6">
      <div className="retro-titlebar">
        <span className="retro-title-icon" aria-hidden="true">
          {icon}
        </span>
        <h2 className="retro-title">{title}</h2>
        <div className="retro-controls" aria-hidden="true">
          <span className="retro-control">_</span>
          <span className="retro-control">□</span>
          <span className="retro-control retro-control-close">×</span>
        </div>
      </div>
      {menu ? (
        <div className="retro-menubar" aria-label="Fenstermenü">
          {menu.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      ) : null}
      <div className="retro-content">{children}</div>
      {status ? <div className="retro-statusbar">{status}</div> : null}
    </section>
  );
}
