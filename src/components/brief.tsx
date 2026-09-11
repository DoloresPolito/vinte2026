"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Magnetic } from "@/components/motion/magnetic";
import { Reveal } from "@/components/motion/reveal";
import { useLanguage } from "@/lib/i18n/language-context";
import { sendBrief } from "@/lib/actions/send-brief";

function BriefSelect({
  value,
  onChange,
  options,
}: {
  value: string;
  onChange: (value: string) => void;
  options: readonly string[];
}) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLSpanElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <span className="brief-select-wrap" ref={wrapRef}>
      <button
        type="button"
        className="brief-select"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        {value}
        <svg className="brief-select-arrow" width="10" height="7" viewBox="0 0 10 7" fill="none" aria-hidden="true">
          <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <AnimatePresence>
        {open && (
          <motion.ul
            className="brief-select-panel"
            role="listbox"
            initial={reduced ? undefined : { opacity: 0, y: -6 }}
            animate={reduced ? undefined : { opacity: 1, y: 0 }}
            exit={reduced ? undefined : { opacity: 0, y: -6 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
          >
            {options.map((o) => (
              <li key={o}>
                <button
                  type="button"
                  role="option"
                  aria-selected={o === value}
                  className={o === value ? "brief-option is-active" : "brief-option"}
                  onClick={() => {
                    onChange(o);
                    setOpen(false);
                  }}
                >
                  <span className="brief-option-dot" aria-hidden="true" />
                  {o}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </span>
  );
}

export default function Brief() {
  const { t } = useLanguage();
  const [verb, setVerb] = useState(t.brief.verbs[0]);
  const [object, setObject] = useState(t.brief.objects[0]);
  const [timing, setTiming] = useState(t.brief.timing[0]);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    const sentence = `${t.brief.intro} ${verb} ${object} ${timing}.`;
    const result = await sendBrief({ sentence, email });
    if (result.ok) {
      setStatus("success");
      setEmail("");
    } else {
      setStatus("error");
    }
  };

  return (
    <section
      className="brief-section"
      style={{ background: "var(--color-dark)", color: "var(--color-dark-fg)", borderBottom: "1px solid var(--color-border)" }}
    >
      <Reveal className="brief-inner">
        <div className="eyebrow" style={{ display: "flex", alignItems: "center", gap: 10, color: "var(--color-dark-fg)", marginBottom: 32 }}>
          <span className="brief-eyebrow-dot" aria-hidden="true" />
          {t.brief.eyebrow}
        </div>
        <form onSubmit={handleSubmit}>
          <p className="brief-sentence">
            <span>{t.brief.intro}</span>
            <BriefSelect value={verb} onChange={setVerb} options={t.brief.verbs} />
            <BriefSelect value={object} onChange={setObject} options={t.brief.objects} />
            <span className="brief-linebreak" aria-hidden="true" />
            <BriefSelect value={timing} onChange={setTiming} options={t.brief.timing} />
            <span>.</span>
          </p>
          <p className="brief-email-line">
            <span>{t.brief.emailLabel}</span>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t.brief.emailPlaceholder}
              className="brief-email-input"
            />
            <span>.</span>
          </p>
          <Magnetic>
            <button type="submit" className="btn btn-accent" disabled={status === "sending"}>
              {status === "sending" ? t.brief.sending : t.brief.submit}
              <svg width="20" height="10" viewBox="0 0 20 10" fill="none">
                <path d="M0 5h18M14 1l4 4-4 4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </Magnetic>
          {status === "success" && <p className="brief-status brief-status-success">{t.brief.success}</p>}
          {status === "error" && <p className="brief-status brief-status-error">{t.brief.error}</p>}
        </form>
      </Reveal>
    </section>
  );
}
