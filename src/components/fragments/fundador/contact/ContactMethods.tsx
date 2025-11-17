"use client";

import { motion } from "framer-motion";
import { ContactMethodCard } from "./ContactMethodCard";

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
    value: "github.com/Nataspitz",
    href: "https://github.com/Nataspitz",
  },
];

export function ContactMethods() {
  return (
    <div className="grid w-full gap-6 sm:grid-cols-3">
      {CONTACT_ITEMS.map((item, index) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: index * 0.07, ease: "easeOut" }}
        >
          <ContactMethodCard label={item.label} value={item.value} href={item.href} />
        </motion.div>
      ))}
    </div>
  );
}
