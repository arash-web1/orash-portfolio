import {
  ArrowUpRight,
  Code2,
  Mail,
  Send,
} from "lucide-react";
import {
  useState,
} from "react";
import PageTransition from "../components/common/PageTransition";
import Seo from "../components/common/Seo";
import useLanguage from "../context/useLanguage";

function Contact() {
  const { t } =
    useLanguage();

  const [form, setForm] =
    useState({
      name: "",
      email: "",
      message: "",
    });

  const submit = (event) => {
    event.preventDefault();

    const subject =
      encodeURIComponent(
        `${t(
          "contact.mailSubject"
        )} ${form.name}`
      );

    const body =
      encodeURIComponent(
        `${form.message}\n\n${t(
          "contact.mailFrom"
        )}: ${form.name}\nEmail: ${form.email}`
      );

    window.location.href =
      `mailto:your-email@example.com?subject=${subject}&body=${body}`;
  };

  return (
    <PageTransition className="page">
      <Seo
        title={`${t(
          "nav.contact"
        )} — Qurbonzoda Orash Rizvon`}
        description={t(
          "contact.intro"
        )}
      />

      <section className="page-hero contact-hero">
        <p>
          {t(
            "contact.eyebrow"
          )}
        </p>

        <h1>
          {t(
            "contact.title1"
          )}

          <br />

          <span>
            {t(
              "contact.title2"
            )}
          </span>
        </h1>

        <p className="page-intro">
          {t(
            "contact.intro"
          )}
        </p>
      </section>

      <section className="contact-layout">
        <div className="contact-info">
          <a href="mailto:your-email@example.com">
            <Mail size={18} />

            <div>
              <span>
                {t(
                  "contact.email"
                )}
              </span>

              <strong>
                {t(
                  "contact.emailText"
                )}
              </strong>
            </div>

            <ArrowUpRight
              size={16}
            />
          </a>

          <a
            href="#"
            target="_blank"
            rel="noreferrer"
          >
            <Code2 size={18} />

            <div>
              <span>
                {t(
                  "contact.github"
                )}
              </span>

              <strong>
                {t(
                  "contact.githubText"
                )}
              </strong>
            </div>

            <ArrowUpRight
              size={16}
            />
          </a>

          <a
            href="#"
            target="_blank"
            rel="noreferrer"
          >
            <Send size={18} />

            <div>
              <span>
                {t(
                  "contact.telegram"
                )}
              </span>

              <strong>
                {t(
                  "contact.telegramText"
                )}
              </strong>
            </div>

            <ArrowUpRight
              size={16}
            />
          </a>
        </div>

        <form
          className="contact-form"
          onSubmit={submit}
        >
          <label>
            <span>
              {t(
                "contact.name"
              )}
            </span>

            <input
              value={
                form.name
              }
              onChange={(
                event
              ) =>
                setForm({
                  ...form,
                  name:
                    event
                      .target
                      .value,
                })
              }
              placeholder={t(
                "contact.namePlaceholder"
              )}
              required
            />
          </label>

          <label>
            <span>
              {t(
                "contact.emailField"
              )}
            </span>

            <input
              type="email"
              value={
                form.email
              }
              onChange={(
                event
              ) =>
                setForm({
                  ...form,
                  email:
                    event
                      .target
                      .value,
                })
              }
              placeholder={t(
                "contact.emailPlaceholder"
              )}
              required
            />
          </label>

          <label>
            <span>
              {t(
                "contact.message"
              )}
            </span>

            <textarea
              value={
                form.message
              }
              onChange={(
                event
              ) =>
                setForm({
                  ...form,
                  message:
                    event
                      .target
                      .value,
                })
              }
              placeholder={t(
                "contact.messagePlaceholder"
              )}
              rows="8"
              required
            />
          </label>

          <button
            className="button-primary"
            type="submit"
          >
            {t(
              "contact.send"
            )}

            <Send size={15} />
          </button>
        </form>
      </section>
    </PageTransition>
  );
}

export default Contact;