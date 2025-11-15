"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const CONTACT_ITEMS = [
  {
    label: "WhatsApp",
    value: "(22) 99972-9196",
    href: "https://wa.me/5522999729196",
  },
  {
    label: "E-mail",
    value: "nataspitz81@gmail.com",
    href: "mailto:nataspitz81@gmail.com",
  },
  {
    label: "GitHub",
    value: "github.com/nataspitz",
    href: "https://github.com/nataspitz",
  },
];

export function ContactMethods() {
  return (
    <div className="grid w-full gap-6 sm:grid-cols-3">
      {CONTACT_ITEMS.map((item, index) => (
        <motion.div
          key={item.label}
          className="rounded-3xl border border-white/15 bg-white/10 p-5 backdrop-blur-md transition duration-300 hover:border-white/35 hover:bg-white/16 hover:shadow-[0_18px_45px_rgba(122,228,255,0.25)]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: index * 0.07, ease: "easeOut" }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/55">{item.label}</p>
          <Link
            href={item.href}
            target={item.href.startsWith("http") ? "_blank" : undefined}
            rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="mt-3 block text-base font-medium text-white/90 transition duration-300 hover:text-white"
          >
            {item.value}
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
