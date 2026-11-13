/**
 * Contact — the unified contact studio: info rail, intent chips, form, and
 * Web3Forms submission.
 *
 * Content comes from `src/content/contact.ts`; shared email/phone/location and
 * the Web3Forms key come from `src/content/site.ts`.
 */

import { useState } from "react";
import {
  AtSign,
  Check,
  Clock,
  Copy,
  Loader2,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
  Sparkles,
  Tag,
  User,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CONTACT, FIELD_CLASS } from "@/content/contact";
import { SITE } from "@/content/site";
import { toast } from "sonner";

export default function Contact() {
  const [sending, setSending] = useState(false);
  const [subject, setSubject] = useState("");
  const [copied, setCopied] = useState(false);
  const [messageLength, setMessageLength] = useState(0);

  // ================= FORM SUBMIT ===============

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSending(true);

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", SITE.web3forms.accessKey);

    try {
      const response = await fetch(SITE.web3forms.endpoint, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success(CONTACT.form.successMessage);
        form.reset();
        setSubject("");
        setMessageLength(0);
      } else {
        toast.error(data.message || CONTACT.form.failureMessage);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error(CONTACT.form.connectionErrorMessage);
    } finally {
      setSending(false);
    }
  };

  // ================= COPY EMAIL ===============

  // Clipboard access can be denied by browser permissions; fall back to a toast
  // that points the visitor at the mail link.
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(SITE.contact.email);

      setCopied(true);
      toast.success(CONTACT.form.copySuccessMessage);

      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error(CONTACT.form.copyErrorMessage);
    }
  };

  return (
    <section
      id={CONTACT.id}
      className="relative overflow-hidden py-10 sm:py-14"
    >
      {/* ================= STAGE GLOW =============== */}

      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-16 h-[680px] w-[680px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,oklch(0.65_0.25_280_/_0.12),transparent_65%)] blur-2xl" />

        <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,oklch(0.82_0.14_85_/_0.08),transparent_70%)] blur-2xl" />

        <div className="absolute inset-0 opacity-[0.12] [background-image:radial-gradient(oklch(1_0_0_/_0.35)_1px,transparent_1px)] [background-size:26px_26px] [mask-image:radial-gradient(ellipse_at_center,black_25%,transparent_70%)]" />
      </div>

      {/* ================= CONTENT =============== */}

      <div className="relative mx-auto max-w-[1600px] px-6 sm:px-12">
        {/* Header */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="eyebrow-pill mb-4 inline-flex rounded-full px-3 py-1">
              {CONTACT.eyebrow}
            </div>

            <h2 className="font-display text-4xl font-bold sm:text-5xl">
              <span className="gradient-text animate-text-shine">
                {CONTACT.title}
              </span>
            </h2>

            <p className="mt-3 max-w-xl text-muted-foreground">
              {CONTACT.subtitle}
            </p>
          </div>

          {/* Availability */}
          <div className="flex flex-wrap gap-3">
            <div className="glass rounded-2xl px-5 py-3">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>

                <span className="font-display text-lg font-black leading-none text-foreground">
                  {CONTACT.availability.open}
                </span>
              </div>

              <div className="mt-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                {CONTACT.availability.openLabel}
              </div>
            </div>

            <div className="glass rounded-2xl px-5 py-3">
              <div className="font-display text-lg font-black leading-none text-gold">
                {CONTACT.availability.replyTime}
              </div>

              <div className="mt-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                {CONTACT.availability.replyLabel}
              </div>
            </div>
          </div>
        </div>

        {/* ================= CONTACT PANEL =============== */}

        <div className="mt-10 rounded-[2rem] bg-gradient-to-br from-gold/40 via-white/10 to-primary/45 p-px shadow-[0_40px_120px_-60px_oklch(0.65_0.25_280_/_0.6)]">
          <div
            className="grid grid-cols-1 overflow-hidden rounded-[calc(2rem-1px)] lg:grid-cols-[0.85fr_1.15fr]"
            style={{
              background:
                "linear-gradient(160deg, oklch(0.13 0.02 240 / 0.96), oklch(0.09 0.015 240 / 0.98))",
            }}
          >
            {/* ================= INFO RAIL =============== */}

            <div className="relative min-w-0 border-b border-white/10 p-6 sm:p-8 lg:border-b-0 lg:border-r lg:p-10">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,oklch(0.82_0.14_85_/_0.10),transparent_55%)]"
              />

              <div className="relative">
                <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-gold">
                  {CONTACT.rail.eyebrow}
                </span>

                <h3 className="mt-3 font-display text-2xl font-bold leading-tight text-foreground sm:text-3xl">
                  {CONTACT.rail.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {CONTACT.rail.description}
                </p>

                {/* Direct contact */}
                <ul className="mt-7 space-y-3">
                  <li className="group/contact flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-3 transition-colors duration-300 hover:border-gold/30 hover:bg-white/[0.05]">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-gold/25 bg-gold/10 text-gold">
                      <Mail className="h-4 w-4" />
                    </span>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/40">
                          {CONTACT.rail.emailLabel}
                        </span>

                        <button
                          type="button"
                          onClick={copyEmail}
                          aria-label={CONTACT.rail.copyEmailLabel}
                          className="grid h-6 w-6 shrink-0 place-items-center rounded-md border border-white/10 bg-white/5 text-muted-foreground transition-colors hover:border-gold/40 hover:text-gold"
                        >
                          {copied ? (
                            <Check className="h-3 w-3 text-gold" />
                          ) : (
                            <Copy className="h-3 w-3" />
                          )}
                        </button>
                      </div>

                      <a
                        href={`mailto:${SITE.contact.email}`}
                        className="mt-0.5 block break-words text-xs font-medium leading-snug text-foreground transition-colors group-hover/contact:text-gold sm:text-sm"
                      >
                        {SITE.contact.email}
                      </a>
                    </div>
                  </li>

                  <li className="group/contact flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-3 transition-colors duration-300 hover:border-gold/30 hover:bg-white/[0.05]">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-gold/25 bg-gold/10 text-gold">
                      <Phone className="h-4 w-4" />
                    </span>

                    <div className="min-w-0 flex-1">
                      <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/40">
                        {CONTACT.rail.phoneLabel}
                      </div>

                      <a
                        href={`tel:${SITE.contact.phone}`}
                        className="block text-sm font-medium text-foreground transition-colors group-hover/contact:text-gold"
                      >
                        {SITE.contact.phoneDisplay}
                      </a>
                    </div>
                  </li>

                  <li className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-3">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-gold/25 bg-gold/10 text-gold">
                      <MapPin className="h-4 w-4" />
                    </span>

                    <div className="min-w-0 flex-1">
                      <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/40">
                        {CONTACT.rail.locationLabel}
                      </div>

                      <div className="text-sm font-medium text-foreground">
                        {SITE.contact.location}{" "}
                        <span className="text-muted-foreground">
                          · {SITE.contact.timezone}
                        </span>
                      </div>
                    </div>
                  </li>
                </ul>

                {/* Socials */}
                <div className="mt-7 border-t border-white/10 pt-6">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/40">
                    {CONTACT.rail.socialsLabel}
                  </div>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {SITE.socials.map(({ Icon, label, href }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={label}
                        className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2 text-xs font-medium text-muted-foreground transition-colors duration-300 hover:border-gold/30 hover:bg-gold/10 hover:text-gold"
                      >
                        <Icon className="h-3.5 w-3.5" />
                        {label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* ================= FORM =============== */}

            <div className="relative min-w-0 p-6 sm:p-8 lg:p-10">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,oklch(0.65_0.25_280_/_0.10),transparent_55%)]"
              />

              <div
                aria-hidden
                className="pointer-events-none absolute -right-10 top-0 h-48 w-48 rounded-full bg-gold/5 blur-3xl"
              />

              <form onSubmit={onSubmit} className="relative">
                {/* ================= INTENT =============== */}

                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <span className="grid h-7 w-7 place-items-center rounded-lg border border-gold/25 bg-gold/10 text-gold shadow-[0_0_18px_-8px_oklch(0.82_0.14_85_/_0.8)]">
                      <Sparkles className="h-3.5 w-3.5" />
                    </span>

                    <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/50">
                      {CONTACT.form.intentLabel}
                    </span>
                  </div>

                  <span className="hidden items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.14em] text-emerald-300 sm:inline-flex">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    </span>
                    {CONTACT.form.onlineLabel}
                  </span>
                </div>

                {/* ================= INTENT CHIPS =============== */}

                <div className="mt-3 flex flex-wrap gap-2">
                  {CONTACT.form.intents.map((intent) => {
                    const isActive = subject === intent.subject;
                    const IntentIcon = intent.Icon;

                    return (
                      <button
                        key={intent.label}
                        type="button"
                        aria-pressed={isActive}
                        onClick={() =>
                          setSubject(isActive ? "" : intent.subject)
                        }
                        className={`group/chip inline-flex items-center gap-2 rounded-xl border px-3 py-1.5 text-xs font-medium transition-all duration-300 ${
                          isActive
                            ? "border-gold/60 bg-gradient-to-r from-gold/25 to-gold/10 text-gold shadow-[0_0_20px_-8px_oklch(0.82_0.14_85_/_0.9)]"
                            : "border-white/10 bg-white/[0.03] text-muted-foreground hover:border-gold/30 hover:bg-white/[0.06] hover:text-foreground"
                        }`}
                      >
                        {isActive ? (
                          <Check className="h-3.5 w-3.5" />
                        ) : (
                          <IntentIcon className="h-3.5 w-3.5 text-white/35 transition-colors group-hover/chip:text-gold/80" />
                        )}

                        {intent.label}
                      </button>
                    );
                  })}
                </div>

                {/* ================= NAME + EMAIL =============== */}

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="mb-1.5 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/50"
                    >
                      <span className="h-1 w-1 rounded-full bg-gold/70" />
                      {CONTACT.form.labels.name}
                    </label>

                    <div className="group/field relative">
                      <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30 transition-colors group-focus-within/field:text-gold">
                        <User className="h-4 w-4" />
                      </span>

                      <Input
                        required
                        id="contact-name"
                        name="name"
                        autoComplete="name"
                        placeholder={CONTACT.form.placeholders.name}
                        className={`${FIELD_CLASS} pl-10`}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="mb-1.5 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/50"
                    >
                      <span className="h-1 w-1 rounded-full bg-gold/70" />
                      {CONTACT.form.labels.email}
                    </label>

                    <div className="group/field relative">
                      <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30 transition-colors group-focus-within/field:text-gold">
                        <AtSign className="h-4 w-4" />
                      </span>

                      <Input
                        required
                        id="contact-email"
                        type="email"
                        name="email"
                        autoComplete="email"
                        placeholder={CONTACT.form.placeholders.email}
                        className={`${FIELD_CLASS} pl-10`}
                      />
                    </div>
                  </div>
                </div>

                {/* ================= SUBJECT =============== */}

                <div className="mt-4">
                  <label
                    htmlFor="contact-subject"
                    className="mb-1.5 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/50"
                  >
                    <span className="h-1 w-1 rounded-full bg-gold/70" />
                    {CONTACT.form.labels.subject}
                  </label>

                  <div className="group/field relative">
                    <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30 transition-colors group-focus-within/field:text-gold">
                      <Tag className="h-4 w-4" />
                    </span>

                    <Input
                      required
                      id="contact-subject"
                      name="subject"
                      value={subject}
                      onChange={(event) => setSubject(event.target.value)}
                      placeholder={CONTACT.form.placeholders.subject}
                      className={`${FIELD_CLASS} pl-10`}
                    />
                  </div>
                </div>

                {/* ================= MESSAGE =============== */}

                <div className="mt-4">
                  <label
                    htmlFor="contact-message"
                    className="mb-1.5 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/50"
                  >
                    <span className="h-1 w-1 rounded-full bg-gold/70" />
                    {CONTACT.form.labels.message}
                  </label>

                  <div className="group/field relative">
                    <span className="pointer-events-none absolute left-3.5 top-3.5 text-white/30 transition-colors group-focus-within/field:text-gold">
                      <MessageSquare className="h-4 w-4" />
                    </span>

                    <Textarea
                      required
                      id="contact-message"
                      name="message"
                      rows={5}
                      placeholder={CONTACT.form.placeholders.message}
                      onChange={(event) =>
                        setMessageLength(event.target.value.length)
                      }
                      className={`${FIELD_CLASS} h-auto min-h-[150px] resize-none pb-7 pl-10 pt-3`}
                    />

                    {messageLength > 0 && (
                      <span className="pointer-events-none absolute bottom-2.5 right-3 text-[10px] tabular-nums text-white/25">
                        {messageLength} {CONTACT.form.characterSuffix}
                      </span>
                    )}
                  </div>
                </div>

                {/* ================= FOOTER =============== */}

                <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[11px] text-muted-foreground">
                    <Clock className="h-3.5 w-3.5 text-gold" />
                    {CONTACT.form.replyNote}
                  </span>

                  <Button
                    type="submit"
                    disabled={sending}
                    className="group/btn relative h-11 overflow-hidden rounded-xl bg-gradient-to-r from-gold to-[oklch(0.93_0.13_92)] px-6 text-sm font-bold text-black shadow-[0_14px_40px_-16px_oklch(0.82_0.14_85_/_0.8)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_50px_-14px_oklch(0.82_0.14_85_/_0.9)] active:translate-y-0 disabled:translate-y-0 disabled:opacity-60"
                  >
                    {/* Light sweep on hover */}
                    <span
                      aria-hidden
                      className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover/btn:translate-x-full"
                    />

                    <span className="relative inline-flex items-center gap-2">
                      {sending ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          {CONTACT.form.sendingLabel}
                        </>
                      ) : (
                        <>
                          {CONTACT.form.sendLabel}
                          <Send className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                        </>
                      )}
                    </span>
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
