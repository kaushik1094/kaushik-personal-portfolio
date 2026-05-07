import { motion, useReducedMotion } from "framer-motion";

// eslint-disable-next-line react/prop-types
export default function SectionTitle({ id, children }) {
  const reduce = useReducedMotion();
  return (
    <motion.h2
      id={id}
      className="section-title"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={{
        hidden: { opacity: 0, y: reduce ? 0 : 12 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      }}
    >
      <span>{children}</span>
      <motion.span
        className="section-title-underline"
        variants={{
          hidden: { scaleX: 0 },
          visible: {
            scaleX: 1,
            transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 },
          },
        }}
      />
    </motion.h2>
  );
}
