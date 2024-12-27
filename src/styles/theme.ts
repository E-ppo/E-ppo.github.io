export const theme = {
  colors: {
    white: "#ffffff",
    black: "#171212",
    dustyRose: "#876370",
    line: "#e5e8eb",
    background: {
      gray: "#f5f0f2",
    },
    brand: {
      lighter: "#ffecf1",
      light: "#ffd2de",
      default: "#e51a5c",
      dark: "#d6145a",
      darker: "#830a36",
    },
  },

  font: {
    title: {
      lg: { pc: "48px", mobile: "30px", weight: "600", lineHeight: "120%" },
      md: { pc: "36px", mobile: "26px", weight: "600", lineHeight: "120%" },
      sm: { pc: "24px", mobile: "20px", weight: "600", lineHeight: "130%" },
    },
    text: {
      lg: { pc: "18px", mobile: "18px", weight: "600", lineHeight: "140%" },
      md: { pc: "16px", mobile: "18px", weight: "400", lineHeight: "140%" },
      sm: { pc: "14px", mobile: "16px", weight: "400", lineHeight: "140%" },
    },
    caption: { pc: "12px", mobile: "14px", weight: "400", lineHeight: "140%" },
  },
  getFont: (type: "title" | "text", size: "lg" | "md" | "sm") => `
    font-size: ${theme.font[type][size].pc};
    font-weight: ${theme.font[type][size].weight};
    line-height: ${theme.font[type][size].lineHeight};
    @media (max-width: 768px) {
      font-size: ${theme.font[type][size].mobile};
    }
  `,
} as const
