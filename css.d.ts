// Type definitions for Tailwind CSS directives
declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

// Tailwind CSS at-rules
declare namespace CSS {
  interface AtRules {
    tailwind: string;
    apply: string;
    layer: string;
    screen: string;
    variants: string;
    responsive: string;
  }
}
